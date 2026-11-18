import ForecastCard from "./ForecastCard";
import type { DailyForecast } from "../../interfaces/forecast";

interface WeatherForecastProps {
  forecasts: DailyForecast[];
}

function WeatherForecast({ forecasts }: WeatherForecastProps) {
  return (
    <section className="mt-8">
      {/* Section heading */}
      <div className="mb-5">
        <h2 className="text-xl font-semibold text-white">5-Day Forecast</h2>

        <p className="mt-1 text-sm text-slate-400">
          Weather outlook for the coming days
        </p>
      </div>

      {/* Forecast cards */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {forecasts.map((forecast) => (
          <ForecastCard
            key={forecast.date}
            day={forecast.date}
            weatherIcon="⛅"
            temperatureMax={forecast.temperatureMax}
            temperatureMin={forecast.temperatureMin}
          />
        ))}
      </div>
    </section>
  );
}

export default WeatherForecast;
