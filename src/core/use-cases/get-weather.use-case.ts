import { WeatherRepository } from "../../infrastructure/repositories/weather.repository";
import { WeatherService } from "../../infrastructure/services/weather.service";
import { WeatherEntity } from "../entities/weather.entity";

export class getWeatherUseCase {
  private repository: WeatherRepository;
  private service: WeatherService;

  constructor(repository: WeatherRepository, service: WeatherService) {
    this.repository = repository;
    this.service = service;
  }

  async execute(location: string, lang: string): Promise<WeatherEntity> {
    const cached = await this.repository.getWeatherByLocation(location, lang)

    if (cached && cached.expiresAt > new Date()) {
      return cached;
    }

    const fresh = await this.service.getCurrentWeather(location, lang);
    await this.repository.upsertWeather(fresh)

    return fresh;
  }
}