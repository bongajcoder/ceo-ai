# 🚨 CRITICAL FIXES REQUIRED
## Must Be Completed Before Development Can Begin

**Priority:** P0 - BLOCKERS
**Timeline:** Days 1-7
**Total Effort:** 40-60 hours

---

## CRITICAL FIX #1: Initialize Development Environment

### Problem
No code structure exists. Developers cannot start work without:
- package.json
- tsconfig.json
- Directory structure
- Build tooling

### Impact
**BLOCKS ALL DEVELOPMENT**

### Solution

#### Step 1: Initialize Node.js Project (30 minutes)

```bash
cd /home/user/ceo-ai
npm init -y

# Install core dependencies
npm install --save \
  express \
  @anthropic-ai/sdk \
  @supabase/supabase-js \
  @prisma/client \
  dotenv \
  cors \
  helmet \
  zod \
  @tanstack/react-query

# Install dev dependencies
npm install --save-dev \
  typescript \
  @types/node \
  @types/express \
  @types/cors \
  ts-node \
  tsx \
  eslint \
  @typescript-eslint/parser \
  @typescript-eslint/eslint-plugin \
  prettier \
  husky \
  lint-staged \
  jest \
  @types/jest \
  ts-jest \
  supertest \
  @types/supertest
```

#### Step 2: Create TypeScript Configuration (15 minutes)

**File:** `/tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "lib": ["ES2022"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "moduleResolution": "node",
    "types": ["node", "jest"],
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@engines/*": ["src/engines/*"],
      "@utils/*": ["src/utils/*"],
      "@types/*": ["src/types/*"]
    }
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "**/*.test.ts"]
}
```

#### Step 3: Create Directory Structure (20 minutes)

```bash
mkdir -p src/{engines,services,controllers,middleware,utils,types,config}
mkdir -p src/engines/{vision,financial,production,talent,community,distribution,innovation}
mkdir -p tests/{unit,integration,e2e}
mkdir -p docs
mkdir -p scripts
mkdir -p .github/workflows

# Create placeholder files
touch src/index.ts
touch src/app.ts
touch .env.example
touch .gitignore
```

#### Step 4: Configure ESLint & Prettier (20 minutes)

**File:** `/.eslintrc.js`

```javascript
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  plugins: ['@typescript-eslint'],
  env: {
    node: true,
    es2022: true,
    jest: true
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': ['error', {
      argsIgnorePattern: '^_'
    }],
    'no-console': ['warn', { allow: ['warn', 'error'] }]
  }
};
```

**File:** `/.prettierrc`

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "arrowParens": "avoid"
}
```

#### Step 5: Configure Git Hooks (15 minutes)

```bash
npx husky init
```

**File:** `/.husky/pre-commit`

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
npm run test:changed
```

**File:** `/package.json` (add to scripts and config)

```json
{
  "scripts": {
    "dev": "tsx watch src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:changed": "jest --bail --findRelatedTests",
    "test:coverage": "jest --coverage",
    "lint": "eslint src --ext .ts",
    "lint:fix": "eslint src --ext .ts --fix",
    "format": "prettier --write \"src/**/*.ts\"",
    "typecheck": "tsc --noEmit"
  },
  "lint-staged": {
    "*.ts": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}
```

#### Step 6: Create .gitignore (5 minutes)

**File:** `/.gitignore`

```
# Dependencies
node_modules/
package-lock.json
yarn.lock
pnpm-lock.yaml

# Build output
dist/
build/
*.tsbuildinfo

# Environment
.env
.env.local
.env.*.local

# IDE
.vscode/
.idea/
*.swp
*.swo
*~
.DS_Store

# Testing
coverage/
.nyc_output/

# Logs
logs/
*.log
npm-debug.log*

# Temporary
tmp/
temp/
.cache/
```

### Verification

```bash
# Verify setup works
npm run typecheck
npm run lint
npm run build

# Should complete without errors
```

### Effort
**Total:** 2 hours for initial setup

---

## CRITICAL FIX #2: Create Documentation for AI Assistants

### Problem
No CLAUDE.md or setup instructions means AI assistants (and human developers) don't understand project context.

### Impact
- Developers waste time understanding structure
- AI assistants provide poor suggestions
- Knowledge not transferable

### Solution

#### Create CLAUDE.md (60 minutes)

**File:** `/CLAUDE.md`

```markdown
# DHAFU CEO AI - Project Context

## Project Overview

DHAFU CEO AI is a revolutionary AI co-management system for orchestrating a seven-pillar film empire. This codebase implements an AI consciousness partner that helps Bongani Mlambo manage:

1. DHAFU Film Hub (physical infrastructure)
2. DHAFU Films (production company)
3. DHAFU Entertainment Network (streaming - 70/30 creator split)
4. Flashcard Film School (education platform)
5. DHAFU Network (online community)
6. Liberation Sanctuary (neurodivergent spaces)
7. Pattern Liberation Consulting (coaching services)

## Core Philosophy

- **Frequency-First:** Every decision evaluated on consciousness elevation potential
- **AuDHD-Optimized:** Protects hyperfocus, manages transitions, honors energy patterns
- **Liberation Economics:** 70/30 creator split, not extraction
- **Pattern Recognition:** Sees connections others miss across all seven pillars

## Architecture

### Seven Strategic Engines

1. **Strategic Vision Engine:** Pattern recognition, opportunity mapping
2. **Financial Liberation System:** Multi-stream revenue, 70/30 splits, cash flow
3. **Production Intelligence Network:** Pipeline management, resource coordination
4. **Talent Liberation Platform:** Neurodivergent talent discovery, member matching
5. **Community Orchestration:** Member journeys, engagement tracking
6. **Distribution Intelligence:** Streaming analytics, festival strategy
7. **Innovation Lab:** Tech scouting, experiment design

### Technology Stack

**Backend:**
- Node.js + Express.js (TypeScript)
- Anthropic Claude SDK (Sonnet 4.5)
- PostgreSQL via Prisma ORM
- Redis for caching
- Pinecone for vector embeddings

**Frontend:**
- React 18+ with TypeScript
- Tailwind CSS
- TanStack Query (React Query)
- Recharts for visualizations

**Infrastructure:**
- Supabase for database + auth + storage
- Vercel for frontend deployment
- Railway for backend deployment
- Upstash Redis (serverless)
- Pinecone (managed vector DB)

## Key Design Patterns

### 1. Service Layer Pattern
All business logic in service classes under `src/services/`

### 2. Engine Pattern
Each strategic engine is a self-contained module with:
- Service (business logic)
- Controller (HTTP handlers)
- Types (TypeScript interfaces)
- Tests (unit + integration)

### 3. AI Integration Pattern
- All AI calls go through `src/services/ai.service.ts`
- Caching via Redis to minimize API costs
- Confidence scores for all recommendations
- Human approval for critical decisions

## File Structure

```
src/
├── engines/          # Seven strategic engines
│   ├── vision/       # Strategic Vision Engine
│   ├── financial/    # Financial Liberation System
│   ├── production/   # Production Intelligence
│   ├── talent/       # Talent Liberation Platform
│   ├── community/    # Community Orchestration
│   ├── distribution/ # Distribution Intelligence
│   └── innovation/   # Innovation Lab
├── services/         # Shared services
│   ├── ai.service.ts
│   ├── db.service.ts
│   └── cache.service.ts
├── controllers/      # HTTP request handlers
├── middleware/       # Express middleware
├── utils/           # Utility functions
├── types/           # TypeScript type definitions
├── config/          # Configuration
├── app.ts           # Express app setup
└── index.ts         # Entry point
```

## Environment Variables

See `.env.example` for required configuration:
- `ANTHROPIC_API_KEY`: Claude API key
- `SUPABASE_URL`: Supabase project URL
- `SUPABASE_ANON_KEY`: Supabase anonymous key
- `REDIS_URL`: Redis connection string
- `PINECONE_API_KEY`: Pinecone API key

## Development Guidelines

### Code Style
- TypeScript strict mode always
- No `any` types - use proper typing
- Descriptive variable names (readability > brevity)
- Comments for complex logic only

### Testing
- Minimum 80% code coverage
- Unit tests for all services
- Integration tests for engines
- E2E tests for critical user flows

### Git Workflow
- Branch naming: `feature/`, `fix/`, `refactor/`
- Commit format: `type: description` (e.g., `feat: add strategic vision engine`)
- PR reviews required before merge

## AuDHD-Specific Considerations

When working on this codebase, remember:

1. **Minimal Cognitive Load:** Keep interfaces simple
2. **Visual Feedback:** Progress indicators everywhere
3. **Energy Awareness:** Features respect user's energy patterns
4. **Hyperfocus Protection:** Implement "do not disturb" modes
5. **Transition Management:** Gentle alerts, no jarring notifications

## Cost Optimization

AI API costs must stay <$50/month per user:

1. **Aggressive Caching:** Cache everything cacheable
2. **Model Selection:** Use Haiku for simple tasks, Sonnet for complex
3. **Rate Limiting:** 100 requests/hour default
4. **Streaming:** Long responses streamed, not buffered
5. **Monitoring:** Daily cost tracking via dashboard

## Security

- All PII encrypted at rest and in transit
- Role-based access control (RBAC)
- Audit logging for all critical actions
- SOC 2 compliance path
- Regular security audits

## Success Metrics

MVP must achieve:
- Save Bongani 10+ hours/week
- 100% accurate financial tracking
- Zero calendar conflicts
- 70%+ AI recommendation acceptance
- < 2 second dashboard load time

## Resources

- Requirements: `/UNIFIED_REQUIREMENTS.md`
- Architecture: `/TECHNICAL_ARCHITECTURE.md`
- MVP Scope: `/MVP_FEATURES.md`
- Roadmap: `/FUTURE_ROADMAP.md`

## Contact

**Repository:** github.com/bongajcoder/ceo-ai
**Branch Strategy:** Feature branches → `main`
**Current Phase:** MVP Development

---

*Every frame is frequency. Every story is medicine. Every creator is liberated.*
```

#### Create CLAUDE_CODE_INSTRUCTIONS.md (45 minutes)

**File:** `/CLAUDE_CODE_INSTRUCTIONS.md`

```markdown
# DHAFU CEO AI - Development Setup Guide

## Quick Start (30 Minutes)

### Prerequisites

- Node.js 20+ LTS
- npm or yarn
- Git
- Docker (optional, for local database)

### Setup Steps

#### 1. Clone & Install (5 minutes)

```bash
git clone https://github.com/bongajcoder/ceo-ai.git
cd ceo-ai
npm install
```

#### 2. Configure Environment (10 minutes)

```bash
cp .env.example .env
```

Edit `.env` with your credentials:

```env
# Required
ANTHROPIC_API_KEY=your_claude_api_key_here
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key

# Optional (for full functionality)
REDIS_URL=redis://localhost:6379
PINECONE_API_KEY=your_pinecone_api_key
GOOGLE_CLIENT_ID=your_google_oauth_client_id
GOOGLE_CLIENT_SECRET=your_google_oauth_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

#### 3. Set Up Database (10 minutes)

**Option A: Supabase (Recommended)**

1. Create account at supabase.com
2. Create new project
3. Copy project URL and anon key to `.env`
4. Run migrations:

```bash
npm run db:migrate
npm run db:seed  # Optional: seed with sample data
```

**Option B: Local PostgreSQL (Docker)**

```bash
docker-compose up -d postgres
npm run db:migrate
```

#### 4. Start Development Server (5 minutes)

```bash
npm run dev
```

Server runs at: `http://localhost:3000`

Dashboard at: `http://localhost:3000/dashboard`

API docs at: `http://localhost:3000/api-docs`

### Verify Setup

```bash
# Run tests
npm test

# Check types
npm run typecheck

# Lint code
npm run lint

# All should pass ✅
```

---

## Development Workflow

### Daily Workflow

1. **Pull latest changes**
   ```bash
   git pull origin main
   ```

2. **Create feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make changes & test**
   ```bash
   npm run dev  # Start dev server
   npm test     # Run tests as you code
   ```

4. **Commit with checks**
   ```bash
   git add .
   git commit -m "feat: add your feature"
   # Pre-commit hooks run automatically
   ```

5. **Push & create PR**
   ```bash
   git push origin feature/your-feature-name
   # Create PR on GitHub
   ```

### Running Tests

```bash
# All tests
npm test

# Watch mode (recommended during development)
npm run test:watch

# Specific file
npm test -- src/engines/vision/vision.service.test.ts

# Coverage report
npm run test:coverage
```

### Debugging

**VS Code (Recommended)**

`.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug Dev Server",
      "runtimeExecutable": "npm",
      "runtimeArgs": ["run", "dev"],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen"
    },
    {
      "type": "node",
      "request": "launch",
      "name": "Debug Tests",
      "program": "${workspaceFolder}/node_modules/jest/bin/jest",
      "args": ["--runInBand", "--no-cache"],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen"
    }
  ]
}
```

Press F5 to start debugging.

---

## Common Tasks

### Adding a New Engine

1. Create directory: `src/engines/new-engine/`
2. Create files:
   ```
   new-engine/
   ├── new-engine.service.ts    # Business logic
   ├── new-engine.controller.ts # HTTP handlers
   ├── new-engine.types.ts      # TypeScript types
   └── new-engine.service.test.ts # Tests
   ```
3. Register in `src/app.ts`
4. Add tests
5. Update documentation

### Adding API Endpoint

1. Create route handler in `src/controllers/`
2. Add route to `src/app.ts`
3. Update OpenAPI docs in `src/docs/api.yaml`
4. Write tests in `tests/integration/`

### Integrating External API

1. Add SDK: `npm install @company/sdk`
2. Create service: `src/services/external-api.service.ts`
3. Add environment variables to `.env.example`
4. Document in `CLAUDE.md`
5. Add error handling and retry logic
6. Write integration tests with mocks

### Database Changes

```bash
# Create migration
npm run db:migration:create add_new_table

# Edit migration file in prisma/migrations/

# Apply migration
npm run db:migrate

# Generate Prisma client
npm run db:generate
```

---

## Project Structure Explained

### `/src/engines/`
Each engine is self-contained with:
- Service layer (business logic)
- Controller (HTTP API)
- Types (TypeScript interfaces)
- Tests

**Example: Strategic Vision Engine**
```
vision/
├── vision.service.ts        # Pattern recognition logic
├── vision.controller.ts     # API endpoints
├── vision.types.ts          # TypeScript interfaces
└── vision.service.test.ts   # Unit tests
```

### `/src/services/`
Shared services used across engines:
- `ai.service.ts`: Claude SDK integration
- `db.service.ts`: Database access
- `cache.service.ts`: Redis caching
- `email.service.ts`: Email sending
- `calendar.service.ts`: Google Calendar integration

### `/src/middleware/`
Express middleware:
- `auth.middleware.ts`: Authentication
- `error.middleware.ts`: Error handling
- `validation.middleware.ts`: Request validation
- `rate-limit.middleware.ts`: Rate limiting

### `/src/utils/`
Utility functions:
- `logger.ts`: Logging
- `validator.ts`: Input validation
- `formatter.ts`: Data formatting

---

## Testing Strategy

### Unit Tests
Test individual functions/classes in isolation.

**Example:**
```typescript
describe('StrategicVisionService', () => {
  it('should identify patterns from data', async () => {
    const service = new StrategicVisionService();
    const patterns = await service.identifyPatterns(mockData);

    expect(patterns).toHaveLength(3);
    expect(patterns[0].type).toBe('revenue_opportunity');
  });
});
```

### Integration Tests
Test how engines work together.

**Example:**
```typescript
describe('Vision + Financial Integration', () => {
  it('should trigger financial alert when pattern detected', async () => {
    const vision = new StrategicVisionService();
    const financial = new FinancialLiberationService();

    const pattern = await vision.identifyPatterns(data);
    const alert = await financial.processPattern(pattern);

    expect(alert.sent).toBe(true);
  });
});
```

### E2E Tests
Test complete user workflows.

**Example:**
```typescript
describe('Dashboard Load E2E', () => {
  it('should load dashboard with all widgets', async () => {
    const response = await request(app)
      .get('/api/dashboard')
      .set('Authorization', `Bearer ${testToken}`);

    expect(response.status).toBe(200);
    expect(response.body.widgets).toHaveLength(7);
  });
});
```

---

## Troubleshooting

### Common Issues

**1. "Module not found" errors**
```bash
npm install
npm run build
```

**2. Database connection fails**
- Check `.env` has correct `DATABASE_URL`
- Verify Supabase project is running
- Run `npm run db:migrate` to create tables

**3. Tests failing**
```bash
# Clear cache
npm run test -- --clearCache

# Regenerate snapshots if needed
npm run test -- -u
```

**4. TypeScript errors**
```bash
# Regenerate types
npm run db:generate

# Check for syntax errors
npm run typecheck
```

**5. Port already in use**
```bash
# Kill process on port 3000
npx kill-port 3000

# Or change port in .env
PORT=3001
```

---

## Performance Tips

### Development Speed
- Use `tsx watch` for fast reloads
- Use `jest --watch` for test-driven development
- Use VS Code for TypeScript autocompletion

### Build Optimization
- Enable TypeScript incremental builds
- Use SWC instead of ts-node in production
- Enable caching in CI/CD

### AI API Optimization
- Cache aggressively (Redis)
- Use Haiku model for simple tasks
- Batch requests when possible
- Stream long responses

---

## Deployment

### Environment Setup

**Development:**
```bash
npm run dev
```

**Staging:**
```bash
npm run build
NODE_ENV=staging npm start
```

**Production:**
```bash
npm run build
NODE_ENV=production npm start
```

### Deploy to Railway

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Link project
railway link

# Deploy
railway up
```

### Deploy to Vercel (Frontend)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

---

## Security Checklist

Before deploying:

- [ ] All environment variables in `.env.example`
- [ ] No secrets in code
- [ ] Authentication enabled
- [ ] Rate limiting configured
- [ ] Input validation on all endpoints
- [ ] HTTPS enforced
- [ ] CORS properly configured
- [ ] SQL injection prevention (Prisma handles this)
- [ ] XSS prevention (sanitize user input)

---

## Getting Help

**Documentation:**
- Technical: `/TECHNICAL_ARCHITECTURE.md`
- Requirements: `/UNIFIED_REQUIREMENTS.md`
- MVP Scope: `/MVP_FEATURES.md`

**Questions:**
- GitHub Issues: Submit bugs/feature requests
- Slack: #ceo-ai-dev channel
- Email: [dev team email]

**Useful Commands:**
```bash
npm run help       # List all commands
npm run docs:serve # Serve API docs locally
npm run db:studio  # Open Prisma Studio
```

---

**Happy coding! Every line is frequency. 🚀**
```

### Verification

After creating these files:

```bash
# Verify Claude can understand project
# (Ask Claude Code to summarize the project)

# Verify developers can set up
# (Give .env.example to a developer, time the setup)
```

### Effort
**Total:** 2 hours for documentation

---

## CRITICAL FIX #3: Create Environment Configuration

### Problem
No `.env.example` means developers don't know what environment variables are needed.

### Impact
- Cannot connect to services
- Security risk (developers might commit real credentials)
- Deployment fails

### Solution

**File:** `/.env.example`

```env
# ==================================
# DHAFU CEO AI - Environment Configuration
# ==================================

# Application
NODE_ENV=development
PORT=3000
API_URL=http://localhost:3000

# Database (Supabase)
DATABASE_URL=postgresql://postgres:password@localhost:5432/ceo_ai
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_KEY=your_supabase_service_key_here

# AI Services
ANTHROPIC_API_KEY=sk-ant-your_claude_api_key_here
OPENAI_API_KEY=sk-your_openai_api_key_here  # Optional, for GPT-4 fallback
GOOGLE_AI_API_KEY=your_gemini_api_key_here   # Optional, for Gemini fallback

# Vector Database
PINECONE_API_KEY=your_pinecone_api_key_here
PINECONE_ENVIRONMENT=us-west1-gcp
PINECONE_INDEX_NAME=ceo-ai-patterns

# Cache
REDIS_URL=redis://localhost:6379
REDIS_PASSWORD=  # Leave empty for local dev

# Authentication
JWT_SECRET=your_super_secret_jwt_key_change_in_production
JWT_EXPIRES_IN=7d
SESSION_SECRET=your_session_secret_here

# Google OAuth (for Calendar integration)
GOOGLE_CLIENT_ID=your_google_oauth_client_id
GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret
GOOGLE_REDIRECT_URI=http://localhost:3000/auth/google/callback

# Stripe (for payments)
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key

# Email (for notifications)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_specific_password
FROM_EMAIL=noreply@dhafu.com

# File Storage
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=us-west-2
S3_BUCKET=dhafu-ceo-ai

# Monitoring
SENTRY_DSN=https://your_sentry_dsn_here
DATADOG_API_KEY=your_datadog_api_key

# Feature Flags
ENABLE_AI_CACHING=true
ENABLE_RATE_LIMITING=true
ENABLE_ANALYTICS=false  # Disable in development
MAX_AI_REQUESTS_PER_HOUR=100

# Cost Limits
AI_MONTHLY_BUDGET_USD=50
ALERT_AT_PERCENT=80

# Development Tools
LOG_LEVEL=debug  # debug | info | warn | error
PRETTY_LOGS=true # Colorized logs in development
```

**File:** `/.env`

```env
# DO NOT COMMIT THIS FILE TO GIT
# Copy from .env.example and fill in real values

NODE_ENV=development
PORT=3000

# Get these from your service providers
ANTHROPIC_API_KEY=
SUPABASE_URL=
SUPABASE_ANON_KEY=

# ... rest of values
```

**Add to `.gitignore`:**

```
.env
.env.local
.env.*.local
```

### Effort
**Total:** 30 minutes

---

## CRITICAL FIX #4: Create Basic Application Structure

### Problem
No entry point, no server, no basic routes. Cannot run the application.

### Impact
**BLOCKS ALL TESTING AND DEVELOPMENT**

### Solution

#### Create Entry Point (30 minutes)

**File:** `/src/index.ts`

```typescript
import dotenv from 'dotenv';
import { createServer } from './app';
import { logger } from './utils/logger';

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

async function start(): Promise<void> {
  try {
    // Create Express app
    const app = await createServer();

    // Start server
    const server = app.listen(PORT, () => {
      logger.info(`🚀 DHAFU CEO AI running in ${NODE_ENV} mode`);
      logger.info(`📡 Server listening on port ${PORT}`);
      logger.info(`📊 API docs available at http://localhost:${PORT}/api-docs`);
      logger.info(`🎯 Health check at http://localhost:${PORT}/health`);
    });

    // Graceful shutdown
    process.on('SIGTERM', () => {
      logger.info('SIGTERM signal received: closing HTTP server');
      server.close(() => {
        logger.info('HTTP server closed');
        process.exit(0);
      });
    });

    process.on('SIGINT', () => {
      logger.info('SIGINT signal received: closing HTTP server');
      server.close(() => {
        logger.info('HTTP server closed');
        process.exit(0);
      });
    });
  } catch (error) {
    logger.error('Failed to start server:', error);
    process.exit(1);
  }
}

start();
```

**File:** `/src/app.ts`

```typescript
import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { errorHandler } from './middleware/error.middleware';
import { logger } from './utils/logger';

export async function createServer(): Promise<Express> {
  const app = express();

  // Security middleware
  app.use(helmet());
  app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true
  }));

  // Body parsing
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true }));

  // Request logging
  app.use((req: Request, res: Response, next: NextFunction) => {
    logger.info(`${req.method} ${req.path}`);
    next();
  });

  // Health check endpoint
  app.get('/health', (req: Request, res: Response) => {
    res.json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
      version: process.env.npm_package_version || '0.1.0'
    });
  });

  // API routes (to be added)
  app.use('/api/v1', (req: Request, res: Response) => {
    res.json({
      message: 'DHAFU CEO AI API v1',
      endpoints: {
        vision: '/api/v1/vision',
        financial: '/api/v1/financial',
        production: '/api/v1/production',
        talent: '/api/v1/talent',
        community: '/api/v1/community',
        distribution: '/api/v1/distribution',
        innovation: '/api/v1/innovation'
      },
      documentation: '/api-docs'
    });
  });

  // 404 handler
  app.use((req: Request, res: Response) => {
    res.status(404).json({
      error: 'Not Found',
      message: `Cannot ${req.method} ${req.path}`,
      timestamp: new Date().toISOString()
    });
  });

  // Error handler (must be last)
  app.use(errorHandler);

  return app;
}
```

**File:** `/src/middleware/error.middleware.ts`

```typescript
import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';

export interface AppError extends Error {
  statusCode?: number;
  isOperational?: boolean;
}

export function errorHandler(
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  // Log error
  logger.error('Error occurred:', {
    message: err.message,
    statusCode,
    path: req.path,
    method: req.method,
    stack: err.stack
  });

  // Send response
  res.status(statusCode).json({
    error: {
      message,
      statusCode,
      timestamp: new Date().toISOString(),
      path: req.path
    },
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
}
```

**File:** `/src/utils/logger.ts`

```typescript
const isDevelopment = process.env.NODE_ENV === 'development';
const prettyLogs = process.env.PRETTY_LOGS === 'true';

const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  green: '\x1b[32m'
};

function formatMessage(level: string, message: string, meta?: unknown): string {
  const timestamp = new Date().toISOString();
  const color = {
    error: colors.red,
    warn: colors.yellow,
    info: colors.blue,
    debug: colors.green
  }[level] || colors.reset;

  if (prettyLogs && isDevelopment) {
    const metaStr = meta ? `\n${JSON.stringify(meta, null, 2)}` : '';
    return `${color}[${timestamp}] [${level.toUpperCase()}]${colors.reset} ${message}${metaStr}`;
  }

  return JSON.stringify({ timestamp, level, message, meta });
}

export const logger = {
  info: (message: string, meta?: unknown) => {
    console.log(formatMessage('info', message, meta));
  },
  error: (message: string, meta?: unknown) => {
    console.error(formatMessage('error', message, meta));
  },
  warn: (message: string, meta?: unknown) => {
    console.warn(formatMessage('warn', message, meta));
  },
  debug: (message: string, meta?: unknown) => {
    if (isDevelopment) {
      console.debug(formatMessage('debug', message, meta));
    }
  }
};
```

#### Test the Server (10 minutes)

```bash
# Start server
npm run dev

# In another terminal, test health check
curl http://localhost:3000/health

# Should return:
# {
#   "status": "healthy",
#   "timestamp": "2025-11-26T...",
#   "environment": "development",
#   "version": "0.1.0"
# }
```

### Effort
**Total:** 1 hour

---

## CRITICAL FIX #5: Set Up Database Schema

### Problem
No database schema defined. Cannot store data.

### Impact
**BLOCKS ALL DATA PERSISTENCE**

### Solution

#### Install Prisma (30 minutes)

```bash
npm install prisma @prisma/client
npx prisma init
```

#### Create Schema (60 minutes)

**File:** `/prisma/schema.prisma`

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// Users
model User {
  id            String   @id @default(uuid())
  email         String   @unique
  name          String
  role          Role     @default(MEMBER)
  energyPattern Json?    // AuDHD energy tracking
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt

  // Relations
  projects      Project[]
  decisions     Decision[]
  patterns      Pattern[]

  @@map("users")
}

enum Role {
  OWNER
  ADMIN
  MANAGER
  MEMBER
}

// Projects (Productions)
model Project {
  id          String        @id @default(uuid())
  title       String
  status      ProjectStatus @default(DEVELOPMENT)
  budget      Decimal       @db.Decimal(12, 2)
  spent       Decimal       @db.Decimal(12, 2) @default(0)
  ownerId     String
  pillar      Pillar
  createdAt   DateTime      @default(now())
  updatedAt   DateTime      @updatedAt

  // Relations
  owner       User          @relation(fields: [ownerId], references: [id])

  @@map("projects")
}

enum ProjectStatus {
  DEVELOPMENT
  PRE_PRODUCTION
  PRODUCTION
  POST_PRODUCTION
  DISTRIBUTION
  ARCHIVED
}

enum Pillar {
  FILM_HUB
  FILMS
  ENTERTAINMENT_NETWORK
  FLASHCARD_SCHOOL
  NETWORK
  LIBERATION_SANCTUARY
  PATTERN_CONSULTING
}

// AI-generated patterns
model Pattern {
  id          String   @id @default(uuid())
  type        String   // "revenue_opportunity", "risk", "synergy", etc.
  description String
  confidence  Float    // 0.0 to 1.0
  priority    Priority @default(MEDIUM)
  status      String   @default("pending") // "pending", "approved", "rejected"
  userId      String
  pillar      Pillar?
  createdAt   DateTime @default(now())

  // Relations
  user        User     @relation(fields: [userId], references: [id])

  @@map("patterns")
}

enum Priority {
  CRITICAL
  HIGH
  MEDIUM
  LOW
}

// Financial transactions
model Transaction {
  id          String          @id @default(uuid())
  amount      Decimal         @db.Decimal(12, 2)
  type        TransactionType
  pillar      Pillar
  description String
  creatorSplit Decimal?       @db.Decimal(12, 2) // 70% of amount
  platformSplit Decimal?      @db.Decimal(12, 2) // 30% of amount
  date        DateTime        @default(now())
  createdAt   DateTime        @default(now())

  @@map("transactions")
}

enum TransactionType {
  REVENUE
  EXPENSE
  PAYOUT
}

// Decisions logged for learning
model Decision {
  id          String   @id @default(uuid())
  question    String
  context     Json
  aiSuggestion String
  userChoice   String
  confidence   Float
  outcome      String?  // "good", "bad", "neutral" - filled in later
  userId       String
  createdAt    DateTime @default(now())
  evaluatedAt  DateTime?

  // Relations
  user         User     @relation(fields: [userId], references: [id])

  @@map("decisions")
}

// Calendar events
model CalendarEvent {
  id          String   @id @default(uuid())
  title       String
  startTime   DateTime
  endTime     DateTime
  description String?
  location    String?
  energyLevel String?  // "high", "medium", "low" for AuDHD optimization
  pillar      Pillar?
  googleEventId String? @unique
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@map("calendar_events")
}
```

#### Generate Prisma Client (5 minutes)

```bash
npx prisma generate
npx prisma migrate dev --name init
```

#### Create Database Service (20 minutes)

**File:** `/src/services/db.service.ts`

```typescript
import { PrismaClient } from '@prisma/client';
import { logger } from '../utils/logger';

class DatabaseService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient({
      log: process.env.NODE_ENV === 'development'
        ? ['query', 'error', 'warn']
        : ['error'],
    });
  }

  async connect(): Promise<void> {
    try {
      await this.prisma.$connect();
      logger.info('✅ Database connected');
    } catch (error) {
      logger.error('❌ Database connection failed:', error);
      throw error;
    }
  }

  async disconnect(): Promise<void> {
    await this.prisma.$disconnect();
    logger.info('Database disconnected');
  }

  getClient(): PrismaClient {
    return this.prisma;
  }
}

export const db = new DatabaseService();
export const prisma = db.getClient();
```

#### Update app.ts to Connect Database (10 minutes)

```typescript
// Add to src/app.ts
import { db } from './services/db.service';

export async function createServer(): Promise<Express> {
  // Connect to database
  await db.connect();

  // ... rest of app setup
}
```

### Verification

```bash
# Check database connection
npm run dev

# Open Prisma Studio to view database
npx prisma studio

# Should open at http://localhost:5555
```

### Effort
**Total:** 2 hours

---

## SUMMARY OF CRITICAL FIXES

| Fix | Effort | Status |
|-----|--------|--------|
| #1: Initialize Development Environment | 2 hours | ❌ TODO |
| #2: Create Documentation (CLAUDE.md, etc.) | 2 hours | ❌ TODO |
| #3: Environment Configuration | 30 min | ❌ TODO |
| #4: Basic Application Structure | 1 hour | ❌ TODO |
| #5: Database Schema | 2 hours | ❌ TODO |
| **TOTAL** | **7.5 hours** | **0/5 complete** |

---

## NEXT STEPS AFTER CRITICAL FIXES

Once all critical fixes are complete:

1. ✅ Verify server runs: `npm run dev`
2. ✅ Verify tests pass: `npm test`
3. ✅ Verify database works: `npx prisma studio`
4. ✅ Verify documentation is clear

Then proceed to:
- HIGH PRIORITY FIXES (see FIXES_HIGH.md)
- Begin implementing MVP features

---

## VALIDATION CHECKLIST

Before moving on, verify:

- [ ] `npm install` completes without errors
- [ ] `npm run typecheck` passes
- [ ] `npm run lint` passes
- [ ] `npm run build` creates `dist/` folder
- [ ] `npm run dev` starts server
- [ ] `curl http://localhost:3000/health` returns 200
- [ ] `npm test` runs (even if no tests yet)
- [ ] `.env.example` is documented
- [ ] `CLAUDE.md` exists and is comprehensive
- [ ] Database migrations applied successfully

---

**Once all critical fixes are complete, the codebase is ready for feature development.** 🚀

**Total Time Investment:** ~8 hours
**Impact:** Unblocks all development work
**Priority:** DO THIS FIRST

---

*Every fix is progress. Every line of code is frequency.* ✨
