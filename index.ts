import { buildServer } from './src/infrastructure/webserver/elysia.server';
import { logger } from './src/shared/utils/logger';

const app = buildServer();

app.listen(3000, () => {
  logger.info(`🚀 Server is running on http://localhost:3000`);
});
