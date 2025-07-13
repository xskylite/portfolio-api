import { Elysia } from 'elysia';
import { WeatherController } from '../../../interfaces/controllers/weather.controller';
import { WeatherQuerySchema, WeatherResponseSchema } from '../schemas/weather.schema';
import { WeatherSerializer } from '../../../interfaces/serializers/weather.serializer';
import { BadRequest } from '../../../shared/utils/error';
import { logger } from '../../../shared/utils/logger';

export const WeatherRoutes = new Elysia({ prefix: '/api/weather' })
  .get('/current', async ({ query: { location, lang } }) => {
    if (!location) {
      throw BadRequest('Location is required');
    }
    const result = await WeatherController.getWeather({
      query: {
        location: location,
        lang: lang
      }
    });

    if ('error' in result) {
      throw BadRequest(result.error);;
    }

    return WeatherSerializer(result)
  }, {
    query: WeatherQuerySchema,
    response: WeatherResponseSchema,
    detail: {
      tags: ['Weather'],
      summary: 'Get current weather by location and lang'
    }
  })