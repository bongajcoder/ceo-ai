import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { errorHandler } from './middleware/error.middleware';
import { logger } from './utils/logger';
import { chatController } from './controllers/chat.controller';
import { authController } from './controllers/auth.controller';
import { financialController } from './controllers/financial.controller';
import { requireAuth } from './middleware/auth.middleware';

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

  // Auth routes (public)
  app.post('/api/auth/login', authController.login.bind(authController));
  app.get('/api/auth/info', authController.info.bind(authController));
  app.get('/api/auth/status', requireAuth, authController.status.bind(authController));

  // Chat/AI routes (protected)
  app.post('/api/chat', requireAuth, chatController.chat.bind(chatController));
  app.post('/api/decision', requireAuth, chatController.decisionSupport.bind(chatController));
  app.post('/api/briefing', requireAuth, chatController.dailyBriefing.bind(chatController));
  app.get('/api/cache/stats', requireAuth, chatController.cacheStats.bind(chatController));
  app.post('/api/cache/clear', requireAuth, chatController.clearCache.bind(chatController));

  // Financial routes (protected)
  app.get('/api/financial/info', financialController.info.bind(financialController));
  app.post('/api/financial/transactions', requireAuth, financialController.addTransaction.bind(financialController));
  app.get('/api/financial/transactions', requireAuth, financialController.getTransactions.bind(financialController));
  app.get('/api/financial/transactions/:id', requireAuth, financialController.getTransaction.bind(financialController));
  app.get('/api/financial/summary', requireAuth, financialController.getSummary.bind(financialController));
  app.get('/api/financial/breakdown', requireAuth, financialController.getPillarBreakdown.bind(financialController));
  app.get('/api/financial/recent', requireAuth, financialController.getRecent.bind(financialController));
  app.post('/api/financial/clear', requireAuth, financialController.clearAll.bind(financialController));

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
