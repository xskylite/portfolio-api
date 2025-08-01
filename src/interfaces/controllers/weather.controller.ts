import { getWeatherUseCase } from "../../core/use-cases/get-weather.use-case";
import { WeatherRepository } from "../../infrastructure/repositories/weather.repository";
import { WeatherService } from "../../infrastructure/services/weather.service";
import { WeatherEntity } from "../../core/entities/weather.entity";
import { WeatherConfig } from "../../shared/config/weather.config";

const config = WeatherConfig();

const weatherUseCase = new getWeatherUseCase(
  new WeatherRepository(),
  new WeatherService(config.key, config.url),
);

export const WeatherController = {
  getWeather: async ({
    query,
  }: {
    query: {
      location: string;
      lang?: string;
    };
  }): Promise<WeatherEntity | { error: string }> => {
    const location = query.location
    const lang = query.lang || "en"


    const weather = await weatherUseCase.execute(location, lang)
    return weather;
  }
}