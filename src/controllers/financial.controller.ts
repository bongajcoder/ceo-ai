import { Request, Response, NextFunction } from 'express';
import { financialService } from '../services/financial.service';
import { logger } from '../utils/logger';

export class FinancialController {
  async addTransaction(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { type, amount, description, pillar } = req.body;

      // Validation
      if (!type || (type !== 'revenue' && type !== 'expense')) {
        res.status(400).json({
          error: 'Bad Request',
          message: 'type must be "revenue" or "expense"',
        });
        return;
      }

      if (!amount || typeof amount !== 'number' || amount <= 0) {
        res.status(400).json({
          error: 'Bad Request',
          message: 'amount must be a positive number',
        });
        return;
      }

      if (!description || typeof description !== 'string') {
        res.status(400).json({
          error: 'Bad Request',
          message: 'description is required',
        });
        return;
      }

      const transaction = financialService.addTransaction(
        type,
        amount,
        description,
        pillar
      );

      res.status(201).json({
        message: 'Transaction added successfully',
        transaction,
      });
    } catch (error: any) {
      logger.error('Add transaction endpoint error:', error);
      next(error);
    }
  }

  async getTransactions(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { type, pillar } = req.query;

      const transactions = financialService.getTransactions(
        type as 'revenue' | 'expense' | undefined,
        pillar as string | undefined
      );

      res.json({
        transactions,
        count: transactions.length,
      });
    } catch (error: any) {
      logger.error('Get transactions endpoint error:', error);
      next(error);
    }
  }

  async getTransaction(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;

      const transaction = financialService.getTransaction(id);

      if (!transaction) {
        res.status(404).json({
          error: 'Not Found',
          message: `Transaction with id ${id} not found`,
        });
        return;
      }

      res.json({ transaction });
    } catch (error: any) {
      logger.error('Get transaction endpoint error:', error);
      next(error);
    }
  }

  async getSummary(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { pillar } = req.query;

      const summary = financialService.getSummary(pillar as string | undefined);

      res.json({
        summary,
        note: 'All revenue automatically split 70/30 (creator/platform)',
      });
    } catch (error: any) {
      logger.error('Get summary endpoint error:', error);
      next(error);
    }
  }

  async getPillarBreakdown(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const breakdown = financialService.getPillarBreakdown();

      res.json({
        breakdown,
        pillars: Object.keys(breakdown),
      });
    } catch (error: any) {
      logger.error('Get pillar breakdown endpoint error:', error);
      next(error);
    }
  }

  async getRecent(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : 10;

      const transactions = financialService.getRecentTransactions(limit);

      res.json({
        transactions,
        count: transactions.length,
      });
    } catch (error: any) {
      logger.error('Get recent transactions endpoint error:', error);
      next(error);
    }
  }

  info(req: Request, res: Response): void {
    const dataSize = financialService.getDataSize();

    res.json({
      mode: 'ULTRA-MVP',
      storage: 'in-memory (data lost on restart)',
      note: 'Full database integration will be added in Week 1',
      features: {
        seventyThirtySplit: 'Automatic for all revenue',
        pillars: [
          'DHAFU Film Hub',
          'DHAFU Films',
          'Entertainment Network',
          'Flashcard Film School',
          'DHAFU Network',
          'Liberation Sanctuary',
          'Pattern Consulting',
        ],
      },
      dataSize,
    });
  }

  clearAll(req: Request, res: Response): void {
    financialService.clearAll();
    res.json({
      message: 'All financial data cleared (for testing only)',
    });
  }
}

export const financialController = new FinancialController();
