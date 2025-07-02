export interface WeatherEntity {
  id: string;
  location: string;
  lang?: string;
  temp_c: number;
  temp_f: number;
  condition: {
    text: string;
    icon: string;
    code: number;
  }
  humidity?: number;
  windSpeed?: number;
  cachedAt: Date;
  expiresAt: Date;
}