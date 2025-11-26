# ⚠️ HIGH PRIORITY FIXES
## Important Improvements - Should Complete Before MVP Launch

**Priority:** P1 - HIGH
**Timeline:** Weeks 2-4 of development
**Total Effort:** 80-120 hours

---

## HIGH PRIORITY FIX #1: Implement AI Cost Control System

### Problem
No mechanism to track and limit AI API costs. Could easily exceed $50/month budget.

### Impact
- Budget overruns
- Unsustainable economics
- No visibility into spending

### Solution

#### Step 1: Create Cost Tracking Service (4 hours)

**File:** `/src/services/ai-cost.service.ts`

```typescript
import { prisma } from './db.service';
import { logger } from '../utils/logger';

interface AIUsage {
  model: string;
  inputTokens: number;
  outputTokens: number;
  cost: number;
}

class AICostService {
  // Claude pricing (as of Nov 2025)
  private pricing = {
    'claude-sonnet-4-5': {
      input: 0.003 / 1000,  // $3 per million tokens
      output: 0.015 / 1000  // $15 per million tokens
    },
    'claude-haiku-3-5': {
      input: 0.00025 / 1000,
      output: 0.00125 / 1000
    }
  };

  async trackUsage(usage: AIUsage): Promise<void> {
    // Store in database
    await prisma.aiUsage.create({
      data: {
        model: usage.model,
        inputTokens: usage.inputTokens,
        outputTokens: usage.outputTokens,
        cost: usage.cost,
        timestamp: new Date()
      }
    });

    // Check if approaching budget
    const monthlyTotal = await this.getMonthlyTotal();
    const budgetLimit = parseFloat(process.env.AI_MONTHLY_BUDGET_USD || '50');
    const alertThreshold = parseFloat(process.env.ALERT_AT_PERCENT || '80') / 100;

    if (monthlyTotal >= budgetLimit * alertThreshold) {
      logger.warn(`⚠️  AI costs at ${(monthlyTotal / budgetLimit * 100).toFixed(1)}% of budget`);
      // TODO: Send alert email
    }

    if (monthlyTotal >= budgetLimit) {
      logger.error('🚨 AI budget exceeded! Switching to cost-saving mode');
      // TODO: Implement cost-saving fallbacks
    }
  }

  async getMonthlyTotal(): Promise<number> {
    const startOfMonth = new Date();
    startOfMonth.setDate(1);
    startOfMonth.setHours(0, 0, 0, 0);

    const result = await prisma.aiUsage.aggregate({
      where: {
        timestamp: { gte: startOfMonth }
      },
      _sum: { cost: true }
    });

    return result._sum.cost || 0;
  }

  calculateCost(model: string, inputTokens: number, outputTokens: number): number {
    const prices = this.pricing[model] || this.pricing['claude-sonnet-4-5'];
    return (inputTokens * prices.input) + (outputTokens * prices.output);
  }
}

export const aiCostService = new AICostService();
```

#### Step 2: Implement Semantic Caching (6 hours)

**File:** `/src/services/ai-cache.service.ts`

```typescript
import { createHash } from 'crypto';
import Redis from 'ioredis';
import { logger } from '../utils/logger';

class AICacheService {
  private redis: Redis;

  constructor() {
    this.redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');
  }

  private generateKey(prompt: string, context?: object): string {
    const combined = JSON.stringify({ prompt, context });
    return `ai:cache:${createHash('sha256').update(combined).digest('hex')}`;
  }

  async get(prompt: string, context?: object): Promise<string | null> {
    const key = this.generateKey(prompt, context);
    const cached = await this.redis.get(key);

    if (cached) {
      logger.debug('✨ Cache hit - saved AI call');
    }

    return cached;
  }

  async set(prompt: string, response: string, context?: object, ttl: number = 3600): Promise<void> {
    const key = this.generateKey(prompt, context);
    await this.redis.setex(key, ttl, response);
  }

  async invalidate(pattern: string): Promise<void> {
    const keys = await this.redis.keys(`ai:cache:*${pattern}*`);
    if (keys.length > 0) {
      await this.redis.del(...keys);
      logger.info(`Invalidated ${keys.length} cache entries`);
    }
  }
}

export const aiCacheService = new AICacheService();
```

#### Step 3: Update AI Service with Cost Tracking (3 hours)

**File:** `/src/services/ai.service.ts`

```typescript
import Anthropic from '@anthropic-ai/sdk';
import { aiCacheService } from './ai-cache.service';
import { aiCostService } from './ai-cost.service';
import { logger } from '../utils/logger';

class AIService {
  private client: Anthropic;

  constructor() {
    this.client = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY
    });
  }

  async chat(
    prompt: string,
    options?: {
      model?: 'claude-sonnet-4-5' | 'claude-haiku-3-5';
      maxTokens?: number;
      temperature?: number;
      useCache?: boolean;
      context?: object;
    }
  ): Promise<string> {
    const model = options?.model || 'claude-haiku-3-5'; // Default to cheaper model
    const useCache = options?.useCache !== false; // Cache by default

    // Check cache first
    if (useCache) {
      const cached = await aiCacheService.get(prompt, options?.context);
      if (cached) {
        return cached;
      }
    }

    try {
      const response = await this.client.messages.create({
        model,
        max_tokens: options?.maxTokens || 1024,
        temperature: options?.temperature || 0.7,
        messages: [{ role: 'user', content: prompt }]
      });

      const text = response.content[0].type === 'text'
        ? response.content[0].text
        : '';

      // Track costs
      await aiCostService.trackUsage({
        model,
        inputTokens: response.usage.input_tokens,
        outputTokens: response.usage.output_tokens,
        cost: aiCostService.calculateCost(
          model,
          response.usage.input_tokens,
          response.usage.output_tokens
        )
      });

      // Cache response
      if (useCache) {
        await aiCacheService.set(prompt, text, options?.context);
      }

      return text;
    } catch (error) {
      logger.error('AI request failed:', error);
      throw error;
    }
  }

  async stream(
    prompt: string,
    onChunk: (text: string) => void,
    options?: {
      model?: 'claude-sonnet-4-5' | 'claude-haiku-3-5';
      maxTokens?: number;
    }
  ): Promise<void> {
    const model = options?.model || 'claude-haiku-3-5';

    const stream = await this.client.messages.create({
      model,
      max_tokens: options?.maxTokens || 2048,
      messages: [{ role: 'user', content: prompt }],
      stream: true
    });

    let inputTokens = 0;
    let outputTokens = 0;

    for await (const event of stream) {
      if (event.type === 'content_block_delta') {
        if (event.delta.type === 'text_delta') {
          onChunk(event.delta.text);
          outputTokens += event.delta.text.split(/\s+/).length; // Rough estimate
        }
      }

      if (event.type === 'message_start') {
        inputTokens = event.message.usage.input_tokens;
      }
    }

    // Track costs after streaming completes
    await aiCostService.trackUsage({
      model,
      inputTokens,
      outputTokens,
      cost: aiCostService.calculateCost(model, inputTokens, outputTokens)
    });
  }
}

export const aiService = new AIService();
```

### Verification

```bash
# Monitor costs in development
npm run dev

# Make some AI calls
curl -X POST http://localhost:3000/api/v1/ai/chat \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Identify patterns in this data..."}'

# Check cost dashboard
curl http://localhost:3000/api/v1/ai/costs/monthly

# Should return: { "total": 0.05, "budget": 50, "percentUsed": 0.1 }
```

### Effort
**Total:** 13 hours

---

## HIGH PRIORITY FIX #2: Implement Rate Limiting

### Problem
No rate limiting means:
- Vulnerable to DoS attacks
- Users could run up huge AI bills
- No fair usage enforcement

### Impact
- Security vulnerability
- Cost risk
- Poor user experience under load

### Solution

#### Create Rate Limiting Middleware (3 hours)

**File:** `/src/middleware/rate-limit.middleware.ts`

```typescript
import rateLimit from 'express-rate-limit';
import RedisStore from 'rate-limit-redis';
import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');

// General API rate limit
export const apiLimiter = rateLimit({
  store: new RedisStore({
    client: redis,
    prefix: 'rl:api:'
  }),
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 requests per 15 minutes
  message: {
    error: 'Too many requests, please try again later.',
    retryAfter: '15 minutes'
  },
  standardHeaders: true,
  legacyHeaders: false
});

// AI endpoint rate limit (more restrictive)
export const aiLimiter = rateLimit({
  store: new RedisStore({
    client: redis,
    prefix: 'rl:ai:'
  }),
  windowMs: 60 * 60 * 1000, // 1 hour
  max: parseInt(process.env.MAX_AI_REQUESTS_PER_HOUR || '100'),
  message: {
    error: 'AI request limit reached. Please try again in an hour.',
    tip: 'Upgrade to Pro for higher limits.'
  },
  keyGenerator: (req) => {
    // Rate limit per user, not IP
    return req.user?.id || req.ip;
  }
});

// Auth endpoint rate limit (prevent brute force)
export const authLimiter = rateLimit({
  store: new RedisStore({
    client: redis,
    prefix: 'rl:auth:'
  }),
  windowMs: 15 * 60 * 1000,
  max: 5, // Only 5 login attempts per 15 minutes
  message: {
    error: 'Too many login attempts. Please try again later.'
  }
});
```

#### Apply to Routes (1 hour)

```typescript
// In src/app.ts
import { apiLimiter, aiLimiter, authLimiter } from './middleware/rate-limit.middleware';

// Apply to all routes
app.use('/api/', apiLimiter);

// Apply stricter limit to AI routes
app.use('/api/v1/ai/', aiLimiter);

// Apply to auth routes
app.use('/api/v1/auth/', authLimiter);
```

### Effort
**Total:** 4 hours

---

## HIGH PRIORITY FIX #3: Implement Proper Error Handling

### Problem
Basic error handler exists but:
- No error classification
- No error monitoring integration
- No user-friendly error messages

### Impact
- Poor debugging experience
- No visibility into production errors
- Confusing errors for users

### Solution

#### Create Error Classes (2 hours)

**File:** `/src/utils/errors.ts`

```typescript
export class AppError extends Error {
  constructor(
    public statusCode: number,
    public message: string,
    public isOperational: boolean = true
  ) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
  }
}

export class ValidationError extends AppError {
  constructor(message: string) {
    super(400, message);
  }
}

export class UnauthorizedError extends AppError {
  constructor(message: string = 'Unauthorized') {
    super(401, message);
  }
}

export class ForbiddenError extends AppError {
  constructor(message: string = 'Forbidden') {
    super(403, message);
  }
}

export class NotFoundError extends AppError {
  constructor(resource: string) {
    super(404, `${resource} not found`);
  }
}

export class ConflictError extends AppError {
  constructor(message: string) {
    super(409, message);
  }
}

export class TooManyRequestsError extends AppError {
  constructor(message: string = 'Too many requests') {
    super(429, message);
  }
}

export class InternalServerError extends AppError {
  constructor(message: string = 'Internal server error') {
    super(500, message, false); // Not operational
  }
}
```

#### Enhanced Error Handler (3 hours)

**File:** `/src/middleware/error.middleware.ts`

```typescript
import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/errors';
import { logger } from '../utils/logger';

export function errorHandler(
  err: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  let statusCode = 500;
  let message = 'Internal Server Error';
  let isOperational = false;

  if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
    isOperational = err.isOperational;
  }

  // Log error
  if (statusCode >= 500 || !isOperational) {
    logger.error('Unhandled error:', {
      message: err.message,
      stack: err.stack,
      url: req.url,
      method: req.method,
      userId: (req as any).user?.id
    });

    // TODO: Send to Sentry/DataDog
  } else {
    logger.warn('Operational error:', {
      message: err.message,
      statusCode,
      url: req.url
    });
  }

  // Send response
  res.status(statusCode).json({
    error: {
      message: isOperational ? message : 'Something went wrong',
      statusCode,
      timestamp: new Date().toISOString(),
      path: req.path,
      requestId: req.headers['x-request-id']
    },
    ...(process.env.NODE_ENV === 'development' && {
      stack: err.stack,
      originalMessage: err.message
    })
  });
}

// Catch unhandled promise rejections
process.on('unhandledRejection', (reason: Error) => {
  logger.error('Unhandled Promise Rejection:', reason);
  throw reason;
});

// Catch uncaught exceptions
process.on('uncaughtException', (error: Error) => {
  logger.error('Uncaught Exception:', error);
  process.exit(1);
});
```

### Effort
**Total:** 5 hours

---

## HIGH PRIORITY FIX #4: Add Authentication System

### Problem
No authentication means:
- Anyone can access API
- No user-specific data
- Security vulnerability

### Impact
**BLOCKS MULTI-USER FUNCTIONALITY**

### Solution

#### Use Supabase Auth (8 hours implementation)

**File:** `/src/services/auth.service.ts`

```typescript
import { createClient } from '@supabase/supabase-js';
import { UnauthorizedError } from '../utils/errors';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

class AuthService {
  async signUp(email: string, password: string, name: string) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name }
      }
    });

    if (error) throw new UnauthorizedError(error.message);
    return data;
  }

  async signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) throw new UnauthorizedError(error.message);
    return data;
  }

  async signOut(token: string) {
    await supabase.auth.signOut();
  }

  async verifyToken(token: string) {
    const { data, error } = await supabase.auth.getUser(token);

    if (error || !data.user) {
      throw new UnauthorizedError('Invalid token');
    }

    return data.user;
  }
}

export const authService = new AuthService();
```

**File:** `/src/middleware/auth.middleware.ts`

```typescript
import { Request, Response, NextFunction } from 'express';
import { authService } from '../services/auth.service';
import { UnauthorizedError } from '../utils/errors';

export async function requireAuth(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedError('No token provided');
    }

    const token = authHeader.substring(7);
    const user = await authService.verifyToken(token);

    // Attach user to request
    (req as any).user = user;

    next();
  } catch (error) {
    next(error);
  }
}

export function requireRole(allowedRoles: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user;

    if (!user) {
      return next(new UnauthorizedError());
    }

    if (!allowedRoles.includes(user.role)) {
      return next(new ForbiddenError('Insufficient permissions'));
    }

    next();
  };
}
```

**File:** `/src/controllers/auth.controller.ts`

```typescript
import { Request, Response, NextFunction } from 'express';
import { authService } from '../services/auth.service';
import { ValidationError } from '../utils/errors';

export class AuthController {
  async signUp(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password, name } = req.body;

      if (!email || !password || !name) {
        throw new ValidationError('Email, password, and name are required');
      }

      const data = await authService.signUp(email, password, name);

      res.status(201).json({
        message: 'User created successfully',
        user: data.user,
        session: data.session
      });
    } catch (error) {
      next(error);
    }
  }

  async signIn(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        throw new ValidationError('Email and password are required');
      }

      const data = await authService.signIn(email, password);

      res.json({
        message: 'Signed in successfully',
        user: data.user,
        session: data.session
      });
    } catch (error) {
      next(error);
    }
  }

  async signOut(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.headers.authorization?.substring(7);
      if (token) {
        await authService.signOut(token);
      }

      res.json({ message: 'Signed out successfully' });
    } catch (error) {
      next(error);
    }
  }

  async me(req: Request, res: Response, next: NextFunction) {
    try {
      const user = (req as any).user;
      res.json({ user });
    } catch (error) {
      next(error);
    }
  }
}

export const authController = new AuthController();
```

#### Add Auth Routes (1 hour)

```typescript
// In src/app.ts or new src/routes/auth.routes.ts
import { authController } from './controllers/auth.controller';
import { requireAuth } from './middleware/auth.middleware';

app.post('/api/v1/auth/signup', authController.signUp);
app.post('/api/v1/auth/signin', authController.signIn);
app.post('/api/v1/auth/signout', requireAuth, authController.signOut);
app.get('/api/v1/auth/me', requireAuth, authController.me);

// Protect all other routes
app.use('/api/v1/*', requireAuth); // All routes after this require auth
```

### Verification

```bash
# Sign up
curl -X POST http://localhost:3000/api/v1/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123","name":"Test User"}'

# Sign in
curl -X POST http://localhost:3000/api/v1/auth/signin \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'

# Use token to access protected route
curl http://localhost:3000/api/v1/auth/me \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

### Effort
**Total:** 9 hours

---

## HIGH PRIORITY FIX #5: Add Comprehensive Logging

### Problem
Basic logger exists but:
- No structured logging
- No log rotation
- No production-ready logging

### Impact
- Difficult to debug production issues
- Logs fill up disk space
- No log analytics

### Solution

#### Enhanced Logger with Winston (4 hours)

```bash
npm install winston winston-daily-rotate-file
```

**File:** `/src/utils/logger.ts` (replace existing)

```typescript
import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

const isDevelopment = process.env.NODE_ENV === 'development';

// Custom format for development
const devFormat = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp({ format: 'HH:mm:ss' }),
  winston.format.printf(({ timestamp, level, message, ...meta }) => {
    const metaStr = Object.keys(meta).length ? `\n${JSON.stringify(meta, null, 2)}` : '';
    return `[${timestamp}] ${level}: ${message}${metaStr}`;
  })
);

// JSON format for production
const prodFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.errors({ stack: true }),
  winston.format.json()
);

// Create logger
export const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || (isDevelopment ? 'debug' : 'info'),
  format: isDevelopment ? devFormat : prodFormat,
  transports: [
    // Console transport
    new winston.transports.Console({
      silent: process.env.NODE_ENV === 'test'
    }),

    // File transports for production
    ...(!isDevelopment ? [
      // Error log
      new DailyRotateFile({
        filename: 'logs/error-%DATE%.log',
        datePattern: 'YYYY-MM-DD',
        level: 'error',
        maxFiles: '14d',
        maxSize: '20m'
      }),

      // Combined log
      new DailyRotateFile({
        filename: 'logs/combined-%DATE%.log',
        datePattern: 'YYYY-MM-DD',
        maxFiles: '7d',
        maxSize: '20m'
      })
    ] : [])
  ]
});

// Log unhandled rejections
process.on('unhandledRejection', (reason: Error) => {
  logger.error('Unhandled Rejection:', { error: reason.message, stack: reason.stack });
});
```

### Effort
**Total:** 4 hours

---

## SUMMARY OF HIGH PRIORITY FIXES

| Fix | Effort | Priority |
|-----|--------|----------|
| #1: AI Cost Control | 13 hrs | HIGH |
| #2: Rate Limiting | 4 hrs | HIGH |
| #3: Error Handling | 5 hrs | HIGH |
| #4: Authentication | 9 hrs | HIGH |
| #5: Logging | 4 hrs | HIGH |
| **TOTAL** | **35 hrs** | **P1** |

---

## RECOMMENDED SEQUENCE

1. **Week 2:** Authentication + Error Handling (14 hours)
2. **Week 3:** AI Cost Control + Rate Limiting (17 hours)
3. **Week 4:** Logging + Testing (4 hours)

After completing these, proceed to MEDIUM priority fixes.

---

*These fixes ensure the system is production-ready, secure, and cost-effective.* 🛡️
