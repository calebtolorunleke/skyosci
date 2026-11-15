export interface CurrentWeather {
  time: string;
  temperature: number;
  relativeHumidity: number;
  apparentTemperature: number;
  isDay: 0 | 1;
  precipitation: number;
  weatherCode: number;
  windSpeed: number;
}
