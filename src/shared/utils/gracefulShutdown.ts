import { formatLog, logger } from './logger';

type ShutdownHandler = () => Promise<void> | void;

export class GracefulShutdown {
  private static isShuttingDown = false;
  private static shutdownHandlers: ShutdownHandler[] = [];
  private static isInitialized = false;

  static registerHandler(handler: ShutdownHandler): void {
    this.shutdownHandlers.push(handler);
  }

  static initialize(): void {
    if (this.isInitialized) {
      logger.warn('GracefulShutdown already initialized');
      return;
    }

    const handleShutdown = (signal: string) => {
      this.gracefulShutdown(signal);
    };

    process.on('SIGINT', () => handleShutdown('SIGINT'));
    process.on('SIGTERM', () => handleShutdown('SIGTERM'));

    this.isInitialized = true;
    logger.info('GracefulShutdown initialized');
  }

  private static async gracefulShutdown(signal: string): Promise<void> {
    if (this.isShuttingDown) {
      return;
    }

    this.isShuttingDown = true;
    logger.info(`Received ${signal}, shutting down gracefully...`);

    try {
      for (const handler of this.shutdownHandlers) {
        await handler();
      }

      logger.info('All services stopped successfully');
    } catch (error) {
      logger.error('Error during shutdown:', error);
    }

    logger.info('Goodbye!');
    process.exit(0);
  }

  static get shuttingDown(): boolean {
    return this.isShuttingDown;
  }
}