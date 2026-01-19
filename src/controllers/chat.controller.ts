import { Request, Response, NextFunction } from 'express';
import { aiService } from '../services/ai.service';
import { logger } from '../utils/logger';

export class ChatController {
  async chat(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { message, model, useCache } = req.body;

      if (!message || typeof message !== 'string') {
        res.status(400).json({
          error: 'Missing or invalid "message" field in request body',
        });
        return;
      }

      logger.info(`💬 Chat request: "${message.substring(0, 50)}..."`);

      const response = await aiService.chat(message, { model, useCache });

      res.json({
        message,
        response,
        timestamp: new Date().toISOString(),
        cached: false, // Simple implementation - could track this
      });
    } catch (error: any) {
      logger.error('Chat endpoint error:', error);
      next(error);
    }
  }

  async decisionSupport(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { question, context } = req.body;

      if (!question || typeof question !== 'string') {
        res.status(400).json({
          error: 'Missing or invalid "question" field in request body',
        });
        return;
      }

      logger.info(`🎯 Decision support request: "${question}"`);

      const recommendation = await aiService.getDecisionSupport(
        question,
        context
      );

      res.json({
        question,
        recommendation,
        timestamp: new Date().toISOString(),
      });
    } catch (error: any) {
      logger.error('Decision support endpoint error:', error);
      next(error);
    }
  }

  async dailyBriefing(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const userData = req.body;

      logger.info('📊 Daily briefing requested');

      const briefing = await aiService.getDailyBriefing(userData);

      res.json({
        briefing,
        date: new Date().toISOString().split('T')[0],
        timestamp: new Date().toISOString(),
      });
    } catch (error: any) {
      logger.error('Daily briefing endpoint error:', error);
      next(error);
    }
  }

  cacheStats(req: Request, res: Response): void {
    const stats = aiService.getCacheStats();
    res.json({
      cache: stats,
      message: 'In-memory cache statistics',
    });
  }

  clearCache(req: Request, res: Response): void {
    aiService.clearCache();
    res.json({
      message: 'Cache cleared successfully',
    });
  }
}

export const chatController = new ChatController();
