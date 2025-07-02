import { v4 as uuidv4 } from "uuid"
import { WeatherEntity } from "../../core/entities/weather.entity";

export class WeatherService {
  private apiKey: string = process.env.WEATHER_API_KEY || '';
  private baseUrl: string = process.env.WEATHER_API_URL || 'https://api.weatherapi.com/v1';

  constructor(apiKey?: string, baseUrl?: string) {
    if (apiKey) this.apiKey = apiKey;
    if (baseUrl) this.baseUrl = baseUrl;
  }
  async getCurrentWeather(location: string, lang: string): Promise<WeatherEntity> {
    const url = `${this.baseUrl}/current.json?key=${this.apiKey}&q=${encodeURIComponent(location)}&lang=${lang}&aqi=no`

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    const current = data.current;

    return {
      id: uuidv4(),
      location,
      lang,
      temp_c: current.temp_c,
      temp_f: current.temp_f,
      condition: {
        text: current.condition.text,
        icon: current.condition.icon,
        code: current.condition.code
      },
      humidity: current.humidity,
      windSpeed: current.wind_kph,
      cachedAt: new Date(),
      expiresAt: new Date(Date.now() + 3600 * 1000), // 1 hour
    }
  }
}
