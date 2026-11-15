export interface CurrentWeatherResponse {
  time: string;
  temperature_2m: number;
  relative_humidity_2m: number;
  apparent_temperature: number;
  is_day: 0 | 1;
  precipitation: number;
  weather_code: number;
  wind_speed_10m: number;
}

export interface DailyWeatherResponse {
  time: string[];
  weather_code: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
}

export interface WeatherResponse {
  timezone: string;
  current: CurrentWeatherResponse;
  daily: DailyWeatherResponse;
}
