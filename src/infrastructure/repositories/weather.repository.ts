import { PrismaClient, WeatherCache } from '../../generated/prisma';
import { WeatherEntity } from '../../core/entities/weather.entity';

const prisma = new PrismaClient();

export class WeatherRepository {
  async getWeatherByLocation(location: string): Promise<WeatherEntity | null> {
    const weather = await prisma.weatherCache.findUnique({
      where: { location },
    });

    if (!weather) return null;

    return {
      id: weather.id,
      location: weather.location,
      temp_c: weather.temp_c,
      temp_f: weather.temp_f,
      condition: {
        text: weather.description,
        icon: weather.icon,
        code: weather.conditionCode,
      },
      humidity: weather.humidity ?? undefined,
      windSpeed: weather.windSpeed ?? undefined,
      cachedAt: new Date(weather.cachedAt),
      expiresAt: new Date(weather.expiresAt),
    };
  }

  async upsertWeather(weather: WeatherEntity): Promise<void> {
    const upsertWeather = await prisma.weatherCache.upsert({
      where: { location: weather.location },
      update: {
        temp_c: weather.temp_c,
        temp_f: weather.temp_f,
        description: weather.condition.text,
        icon: weather.condition.icon,
        conditionCode: weather.condition.code,
        humidity: weather.humidity ?? null,
        windSpeed: weather.windSpeed ?? null,
        cachedAt: new Date(),
        expiresAt: new Date(Date.now() + 3600000), // 1 hour  
      },
      create: {
        id: weather.id,
        location: weather.location,
        temp_c: weather.temp_c,
        temp_f: weather.temp_f,
        description: weather.condition.text,
        icon: weather.condition.icon,
        conditionCode: weather.condition.code,
        humidity: weather.humidity ?? null,
        windSpeed: weather.windSpeed ?? null,
        cachedAt: new Date(),
        expiresAt: new Date(Date.now() + 3600000), // 1 hour
      }
    })
  }
}