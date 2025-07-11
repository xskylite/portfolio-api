import { buildServer } from './src/infrastructure/webserver/elysia.server';
import { logger, formatLog } from './src/shared/utils/logger';
import { AppConfig } from './src/shared/config/app.config';
import { initializeSpotifyService, stopSpotifyService } from './src/infrastructure/webserver/routes/spotify.routes';
import { GracefulShutdown } from './src/shared/utils/gracefulShutdown';

const config = AppConfig();

async function startServer() {
  try {
    GracefulShutdown.initialize();

    GracefulShutdown.registerHandler(() => {
      stopSpotifyService();
    });
    const app = buildServer();

    app.listen(config.port, async () => {
      logger.info(formatLog(`🚀 Server is running on **__[blue]{http://localhost:${config.port}}__**`));

      if (config.env === 'development' || config.env === 'dev') {
        logger.info(formatLog(`🌱 Running in **[red]{development}** mode`));
      } else {
        logger.info(formatLog(`🌱 Running in **[green]{production}** mode`));
      }

      await new Promise(resolve => setTimeout(resolve, 200));

      try {
        await initializeSpotifyService();
        logger.info('All services started successfully');
      } catch (error) {
        logger.error('Failed to start Spotify service:', error);
      }
    });

  } catch (error) {
    logger.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();