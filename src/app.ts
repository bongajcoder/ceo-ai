import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { errorHandler } from './middleware/error.middleware';
import { logger } from './utils/logger';
import { chatController } from './controllers/chat.controller';

export function createServer(): Express {
  const app = express();

  // Middleware
  app.use(cors());
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
      environment: process.env.NODE_ENV || 'development',
      version: '0.1.0',
      message: 'DHAFU CEO AI - ULTRA MVP',
    });
  });

  // Root endpoint
  app.get('/', (req: Request, res: Response) => {
    res.json({
      message: 'DHAFU CEO AI - Consciousness Partner for Film Empire',
      version: '0.1.0',
      endpoints: {
        health: '/health',
        chat: '/api/chat',
        auth: {
          login: '/api/auth/login',
        },
        financial: {
          transactions: '/api/financial/transactions',
          summary: '/api/financial/summary',
        },
      },
      philosophy: 'Every frame is frequency. Every story is medicine. Every creator is liberated.',
    });
  });

  // Chat/AI routes
  app.post('/api/chat', chatController.chat.bind(chatController));
  app.post('/api/decision', chatController.decisionSupport.bind(chatController));
  app.post('/api/briefing', chatController.dailyBriefing.bind(chatController));
  app.get('/api/cache/stats', chatController.cacheStats.bind(chatController));
  app.post('/api/cache/clear', chatController.clearCache.bind(chatController));

  // TODO: Add /api/auth routes
  // TODO: Add /api/financial routes

  // 404 handler
  app.use((req: Request, res: Response) => {
    res.status(404).json({
      error: 'Not Found',
      message: `Cannot ${req.method} ${req.path}`,
      timestamp: new Date().toISOString(),
    });
  });

  // Error handler (must be last)
  app.use(errorHandler);

  return app;
}
