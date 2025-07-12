import { Elysia } from 'elysia';
import cookie from '@elysiajs/cookie';
import { pluginSwagger } from '../../plugins/swagger';
import { handleError } from '../../shared/utils/error-handler';
import { rateLimit } from 'elysia-rate-limit';
import { WeatherRoutes } from './routes/weather.routes';
import { SkillRoutes } from './routes/skills.routes';
import { ProjectRoutes } from './routes/projects.routes';
import { SpotifyRoutes } from './routes/spotify.routes';

export const buildServer = () => {
  const app = new Elysia()
    .use(
      rateLimit({
        duration: 60_000,
        max: 2000,
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
    .use(handleError)
    .use(pluginSwagger)
    .get('/api/health', () => ({
      status: 'ok',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      version: '1.0.0',
    }))
    .use(WeatherRoutes)
    .use(SkillRoutes)
    .use(ProjectRoutes)
    .use(SpotifyRoutes);

  return app;
};