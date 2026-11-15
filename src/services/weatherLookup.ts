import type { CurrentWeather } from "../interfaces/weather";
import type { DailyForecast } from "../interfaces/forecast";
import type { WeatherResponse } from "../interfaces/weatherResponse";

const WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast";

export const weatherLookup = {
  /**
   * Fetch weather conditions for given coordinates
   */
  async getWeather(latitude: number, longitude: number) {
    try {
      // Build URL

      const url = `${WEATHER_API_URL}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`;

      // Fetch data

      const response = await fetch(url);
      // Check response

      if (!response.ok) {
        throw new Error("Failed to fetch current weather data");
      }
      // Parse response

      const data: WeatherResponse = await response.json();
      //  Map current weather

      const currentWeather: CurrentWeather = {
        time: data.current.time,
        temperature: data.current.temperature_2m,
        relativeHumidity: data.current.relative_humidity_2m,
        apparentTemperature: data.current.apparent_temperature,
        isDay: data.current.is_day,
        precipitation: data.current.precipitation,
        weatherCode: data.current.weather_code,
        windSpeed: data.current.wind_speed_10m,
      };
      // Map daily forecast

      const dailyForecast: DailyForecast[] = data.daily.time.map(
        (date, index) => ({
          date,
          weatherCode: data.daily.weather_code[index],
          temperatureMax: data.daily.temperature_2m_max[index],
          temperatureMin: data.daily.temperature_2m_min[index],
        }),
      );
      return {
        currentWeather,
        dailyForecast,
      };
    } catch (error) {
      console.error("Error in getWeather:", error);
      throw error;
    }
  },
};
