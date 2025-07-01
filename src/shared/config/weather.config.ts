export const WeatherConfig = () => {
  return {
    key: process.env.WEATHER_API_KEY,
    url: process.env.WEATHER_API_URL,
  }
}