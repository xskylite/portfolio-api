import { Elysia, ErrorContext } from 'elysia';
import { WeatherController } from '../../../interfaces/controllers/weather.controller';
import { WeatherQuerySchema, WeatherResponseSchema } from '../schemas/weather.schema';
import { WeatherSerializer } from '../../../interfaces/serializers/weather.serializer';

export const WeatherRoutes = new Elysia({ prefix: '/api/weather' })
  .get('/current', async (ctx) => {
    const result = await WeatherController.getWeather({ query: ctx.query });

    if ('error' in result) {
      throw new Error(`Error: ${result.error}`);
    }

    return WeatherSerializer(result);
  }, {
    query: WeatherQuerySchema,
    response: WeatherResponseSchema,
    detail: {
      tags: ['Weather'],
      summary: 'Get current weather by location and lang'
    }
  });