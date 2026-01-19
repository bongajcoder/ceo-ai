import { Request, Response, NextFunction } from 'express';
import { authService } from '../services/auth.service';
import { logger } from '../utils/logger';

// Extend Express Request to include user
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        email: string;
        name: string;
        role: string;
      };
    }
  }
}

export async function requireAuth(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({
        error: 'Unauthorized',
        message: 'No token provided. Include "Authorization: Bearer <token>" header.',
      });
      return;
    }

    const token = authHeader.substring(7); // Remove 'Bearer ' prefix
    const user = authService.getUserByToken(token);

    if (!user) {
      res.status(401).json({
        error: 'Unauthorized',
        message: 'Invalid or expired token.',
      });
      return;
    }

    // Attach user to request
    req.user = user;

    next();
  } catch (error: any) {
    logger.error('Auth middleware error:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: 'Authentication failed',
    });
  }
}

// Optional authentication (doesn't fail if no token)
export async function optionalAuth(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.substring(7);
      const user = authService.getUserByToken(token);

      if (user) {
        req.user = user;
      }
    }

    next();
  } catch (error: any) {
    // Silently fail for optional auth
    next();
  }
}
