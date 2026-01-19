import Anthropic from '@anthropic-ai/sdk';
import { logger } from '../utils/logger';

// Simple in-memory cache for ULTRA-MVP
const cache = new Map<string, { response: string; timestamp: number }>();
const CACHE_TTL = 3600000; // 1 hour

interface ChatOptions {
  useCache?: boolean;
  model?: 'claude-sonnet-4-5' | 'claude-haiku-3-5';
  maxTokens?: number;
}

class AIService {
  private client: Anthropic | null = null;
  private enabled: boolean;

  constructor() {
    const apiKey = process.env.ANTHROPIC_API_KEY;

    if (!apiKey || apiKey.trim() === '') {
      logger.warn('⚠️  No ANTHROPIC_API_KEY found. AI features will be disabled.');
      logger.warn('   Get your API key from https://console.anthropic.com/');
      this.enabled = false;
    } else {
      this.client = new Anthropic({ apiKey });
      this.enabled = true;
      logger.info('✅ Claude AI service initialized');
    }
  }

  private getCacheKey(prompt: string, model: string): string {
    return `${model}:${prompt}`;
  }

  private getFromCache(key: string): string | null {
    const cached = cache.get(key);
    if (!cached) return null;

    // Check if cache is still valid
    if (Date.now() - cached.timestamp > CACHE_TTL) {
      cache.delete(key);
      return null;
    }

    logger.debug('✨ Cache hit - saved API call');
    return cached.response;
  }

  private setCache(key: string, response: string): void {
    cache.set(key, { response, timestamp: Date.now() });
  }

  async chat(prompt: string, options?: ChatOptions): Promise<string> {
    if (!this.enabled || !this.client) {
      return 'AI service is not configured. Please add your ANTHROPIC_API_KEY to the .env file.';
    }

    const model = options?.model || 'claude-haiku-3-5'; // Default to cheaper model
    const useCache = options?.useCache !== false; // Cache by default
    const maxTokens = options?.maxTokens || 1024;

    // Check cache first
    if (useCache) {
      const cacheKey = this.getCacheKey(prompt, model);
      const cached = this.getFromCache(cacheKey);
      if (cached) {
        return cached;
      }
    }

    try {
      logger.info(`🤖 Calling Claude ${model}...`);

      const response = await this.client.messages.create({
        model,
        max_tokens: maxTokens,
        messages: [{ role: 'user', content: prompt }],
      });

      const text =
        response.content[0].type === 'text' ? response.content[0].text : '';

      // Log usage
      logger.info(`💰 API usage: ${response.usage.input_tokens} in + ${response.usage.output_tokens} out`);

      // Cache response
      if (useCache) {
        const cacheKey = this.getCacheKey(prompt, model);
        this.setCache(cacheKey, text);
      }

      return text;
    } catch (error: any) {
      logger.error('AI request failed:', { error: error.message });

      if (error.status === 401) {
        return 'AI service authentication failed. Please check your ANTHROPIC_API_KEY.';
      }

      if (error.status === 429) {
        return 'AI service rate limit reached. Please try again in a moment.';
      }

      return `AI service error: ${error.message}`;
    }
  }

  // Helper method for decision support
  async getDecisionSupport(
    question: string,
    context?: Record<string, any>
  ): Promise<string> {
    const contextStr = context
      ? `\n\nContext:\n${JSON.stringify(context, null, 2)}`
      : '';

    const prompt = `You are an AI advisor for DHAFU, a film empire focused on frequency liberation and conscious creative capitalism.

The user is asking for decision support:
"${question}"${contextStr}

Please provide:
1. A clear recommendation
2. Key considerations
3. Potential risks
4. Next steps

Be concise, practical, and focus on liberation economics (70/30 creator splits) and neurodivergent-friendly approaches.`;

    return this.chat(prompt, { model: 'claude-sonnet-4-5' }); // Use smarter model for decisions
  }

  // Helper method for daily briefing
  async getDailyBriefing(userData?: Record<string, any>): Promise<string> {
    const userDataStr = userData
      ? `\n\nUser Data:\n${JSON.stringify(userData, null, 2)}`
      : '';

    const prompt = `You are the CEO AI for DHAFU film empire. Generate a concise daily briefing.${userDataStr}

Include:
1. Priorities for today
2. Pattern insights (if any data provided)
3. Opportunities to explore
4. Energy management tips (for AuDHD optimization)

Be encouraging, practical, and focused on frequency elevation.

Keep it under 200 words.`;

    return this.chat(prompt, { model: 'claude-haiku-3-5', useCache: false });
  }

  getCacheStats(): { size: number; entries: number } {
    return {
      size: cache.size,
      entries: cache.size,
    };
  }

  clearCache(): void {
    cache.clear();
    logger.info('🗑️  Cache cleared');
  }
}

export const aiService = new AIService();
