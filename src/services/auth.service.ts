import jwt from 'jsonwebtoken';
import { logger } from '../utils/logger';

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

interface TokenPayload {
  userId: string;
  email: string;
}

class AuthService {
  private jwtSecret: string;
  private jwtExpiresIn: string;

  // Hardcoded user for ULTRA-MVP (no database yet)
  private hardcodedUser: User;

  constructor() {
    this.jwtSecret = process.env.JWT_SECRET || 'default_secret_change_this';
    this.jwtExpiresIn = process.env.JWT_EXPIRES_IN || '7d';

    this.hardcodedUser = {
      id: '1',
      email: process.env.DEFAULT_USER_EMAIL || 'bongani@dhafu.com',
      name: process.env.DEFAULT_USER_NAME || 'Bongani Mlambo',
      role: 'owner',
    };

    logger.info('✅ Auth service initialized (hardcoded user mode)');
    logger.debug(`   User: ${this.hardcodedUser.email}`);
  }

  async login(email: string, password: string): Promise<{ user: User; token: string } | null> {
    // Simple hardcoded authentication (ULTRA-MVP only!)
    const expectedEmail = this.hardcodedUser.email;
    const expectedPassword = process.env.DEFAULT_USER_PASSWORD || 'dhafu2025';

    if (email === expectedEmail && password === expectedPassword) {
      const token = this.generateToken({
        userId: this.hardcodedUser.id,
        email: this.hardcodedUser.email,
      });

      logger.info(`✅ User logged in: ${email}`);

      return {
        user: this.hardcodedUser,
        token,
      };
    }

    logger.warn(`❌ Failed login attempt: ${email}`);
    return null;
  }

  generateToken(payload: TokenPayload): string {
    return jwt.sign(payload, this.jwtSecret, {
      expiresIn: this.jwtExpiresIn,
    });
  }

  verifyToken(token: string): TokenPayload | null {
    try {
      const decoded = jwt.verify(token, this.jwtSecret) as TokenPayload;
      return decoded;
    } catch (error: any) {
      logger.warn('Invalid token:', error.message);
      return null;
    }
  }

  getUserByToken(token: string): User | null {
    const payload = this.verifyToken(token);
    if (!payload) return null;

    // In ULTRA-MVP, we only have one user
    if (payload.email === this.hardcodedUser.email) {
      return this.hardcodedUser;
    }

    return null;
  }

  getHardcodedUser(): User {
    return this.hardcodedUser;
  }
}

export const authService = new AuthService();
