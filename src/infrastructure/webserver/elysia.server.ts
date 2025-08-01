import { Elysia } from 'elysia';
import cookie from '@elysiajs/cookie';
import { cors } from '@elysiajs/cors';
import { pluginSwagger } from '../../plugins/swagger';
import { pluginRateLimit } from '../../plugins/rate-limit';
import { WeatherRoutes } from './routes/weather.routes';
import { SkillRoutes } from './routes/skills.routes';
import { ProjectRoutes } from './routes/projects.routes';
import { SpotifyRoutes } from './routes/spotify.routes';
import { HealthRoutes } from './routes/health.routes';
import { handleError } from '../../shared/utils/handle-error';
import { handleResponse } from '../../shared/utils/handle-response';
import { AppConfig } from '../../shared/config/app.config';

export const buildServer = () => {
  const config = AppConfig();
  const app = new Elysia()
    .use(pluginSwagger)
    .use(cors({
      origin: config.corsOrigin,
      credentials: true
    }))
    .onError(handleError)
    .mapResponse(handleResponse)
    .use(pluginRateLimit)
    .use(cookie())
    .use(HealthRoutes)
    .use(WeatherRoutes)
    .use(SkillRoutes)
    .use(ProjectRoutes)
    .use(SpotifyRoutes)

  return app;
};