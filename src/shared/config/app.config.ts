import { logger, formatLog } from "../utils/logger";

export const AppConfig = () => {
  const isProduction = process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod';
  const node_env = ['production', 'prod', 'development', 'dev'].includes(process.env.NODE_ENV || '');
  if (!node_env) {
    logger.warn(formatLog(`**NODE_ENV** is not set to **production** or **development**. Defaulting to **development**.`));
  }
  return {
    port: parseInt(process.env.PORT || '3000', 10),
    env: isProduction ? 'production' : 'development',
  }
}