import { Request, Response, NextFunction } from 'express';
import { authService } from '../services/auth.service';
import { logger } from '../utils/logger';

export class AuthController {
  async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        res.status(400).json({
          error: 'Bad Request',
          message: 'Email and password are required',
        });
        return;
      }

      const result = await authService.login(email, password);

      if (!result) {
        res.status(401).json({
          error: 'Unauthorized',
          message: 'Invalid email or password',
        });
        return;
      }

      res.json({
        message: 'Login successful',
        user: result.user,
        token: result.token,
        expiresIn: process.env.JWT_EXPIRES_IN || '7d',
      });
    } catch (error: any) {
      logger.error('Login endpoint error:', error);
      next(error);
    }
  }

  async status(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      // User is attached by requireAuth middleware
      if (!req.user) {
        res.status(401).json({
          error: 'Unauthorized',
          message: 'No user found',
        });
        return;
      }

      res.json({
        authenticated: true,
        user: req.user,
      });
    } catch (error: any) {
      logger.error('Status endpoint error:', error);
      next(error);
    }
  }

  async info(req: Request, res: Response): void {
    // Info about authentication (no auth required)
    const user = authService.getHardcodedUser();

    res.json({
      mode: 'ULTRA-MVP',
      authType: 'JWT with hardcoded user',
      note: 'This is a simplified auth system for the 2-day ULTRA-MVP. Full auth with database will be added in Week 1.',
      defaultUser: {
        email: user.email,
        note: 'Use this email with the password from your .env file',
      },
      howToLogin: {
        endpoint: 'POST /api/auth/login',
        body: {
          email: user.email,
          password: '(from .env DEFAULT_USER_PASSWORD)',
        },
      },
    });
  }
}

export const authController = new AuthController();
