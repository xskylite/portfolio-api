// ~/src/infrastructure/webserver/elysia.server.ts
import { Elysia } from 'elysia';
import cookie from '@elysiajs/cookie';
import { pluginSwagger } from '../../plugins/swagger';
import { handleError } from '../../shared/utils/error-handler';

export const buildServer = () => {
  return new Elysia()
    .use(cookie())
    .use(pluginSwagger)
    .get('/api/health', () => ({
      status: 'ok',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      version: '1.0.0',
    }))
    .onError(handleError);
};