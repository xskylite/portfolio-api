import { WeatherEntity } from '../../core/entities/weather.entity';

export const WeatherSerializer = (weather: WeatherEntity) => ({
  location: weather.location,
  temp_c: weather.temp_c,
  temp_f: weather.temp_f,
  condition: weather.condition,
  humidity: weather.humidity,
  windSpeed: weather.windSpeed,
  cachedAt: weather.cachedAt.toISOString(),
  expiresAt: weather.expiresAt.toISOString(),
});