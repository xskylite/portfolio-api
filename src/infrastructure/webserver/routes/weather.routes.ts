import { Elysia } from 'elysia';
import { WeatherController } from '../../../interfaces/controllers/weather.controller';

export const WeatherRoutes = new Elysia({ prefix: '/api/weather' })
  .get('/current', WeatherController.getWeather)