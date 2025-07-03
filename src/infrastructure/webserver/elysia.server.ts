import { Elysia } from 'elysia';
import cookie from '@elysiajs/cookie';
import { pluginSwagger } from '../../plugins/swagger';
import { handleError } from '../../shared/utils/error-handler';
import { rateLimit } from 'elysia-rate-limit';
import { WeatherRoutes } from './routes/weather.routes';

export const buildServer = () => {
  return new Elysia()
      .use(
      rateLimit({
        duration: 60_000,
        max: 20,
        errorResponse: new Response(
          JSON.stringify({
          success: false,
          error: 'Rate limit exceeded. Please try again later.',
        }), {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
          },
        }),
      })
    )
    .use(cookie())
    .use(pluginSwagger)
    .get('/api/health', () => ({
      status: 'ok',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      version: '1.0.0',
    }))
    .use(WeatherRoutes)
    .use(handleError)
};