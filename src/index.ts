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
    const app = createServer();

    // Start server
    const server = app.listen(PORT, () => {
      logger.info(`🚀 DHAFU CEO AI running in ${NODE_ENV} mode`);
      logger.info(`📡 Server listening on port ${PORT}`);
      logger.info(`🎯 Health check at http://localhost:${PORT}/health`);
      logger.info(`💡 API docs at http://localhost:${PORT}/`);
      logger.info('');
      logger.info('✨ Every frame is frequency. Every story is medicine. Every creator is liberated. ✨');
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
