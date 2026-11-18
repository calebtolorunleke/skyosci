import { useState } from "react";
import { locationLookup } from "./services/locationLookup";
import { weatherLookup } from "./services/weatherLookup";
import { getWeatherInfo } from "./utils/weatherUtils";
import type { Location } from "./interfaces/location";
import type { CurrentWeather as CurrentWeatherData } from "./interfaces/weather";
import type { DailyForecast } from "./interfaces/forecast";
import CurrentWeather from "./components/weather/CurrentWeather";
import WeatherHighlights from "./components/weather/WeatherHighlights";
import WeatherForecast from "./components/weather/WeatherForecast";
import Header from "./components/layout/Header";

function App() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null,
  );

  const [currentWeather, setCurrentWeather] =
    useState<CurrentWeatherData | null>(null);

  const [forecasts, setForecasts] = useState<DailyForecast[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    setError(null);

    try {
      // Search for the city
      const locations = await locationLookup.searchLocations(query);

      // Check whether any locations were found
      if (locations.length === 0) {
        throw new Error("Location not found. Try another city.");
      }

      // Use the first matching location for now
      const location = locations[0];

      // Fetch weather using the location coordinates
      const weatherData = await weatherLookup.getWeather(
        location.latitude,
        location.longitude,
      );

      // Update dashboard data
      setSelectedLocation(location);
      setCurrentWeather(weatherData.currentWeather);
      setForecasts(weatherData.dailyForecast);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#080F1E] px-4 py-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Header onSearch={handleSearch} />

        {/* Loading message */}
        {isLoading && (
          <p className="mt-8 text-center text-sky-400">
            Fetching weather data...
          </p>
        )}

        {/* Error message */}
        {error && (
          <p className="mt-8 rounded-xl border border-red-400/20 bg-red-400/10 p-4 text-sm text-red-300">
            {error}
          </p>
        )}

        {/* Weather dashboard */}
        {currentWeather && selectedLocation && (
          <>
            <section className="mt-10 grid gap-5 lg:grid-cols-[1.5fr_1fr]">
              <CurrentWeather
                city={selectedLocation.name}
                country={selectedLocation.country}
                temperature={currentWeather.temperature}
                condition={
                  getWeatherInfo(currentWeather.weatherCode).description
                }
                feelsLike={currentWeather.apparentTemperature}
                temperatureMax={
                  forecasts[0]?.temperatureMax ?? currentWeather.temperature
                }
                temperatureMin={
                  forecasts[0]?.temperatureMin ?? currentWeather.temperature
                }
                weatherIcon={getWeatherInfo(currentWeather.weatherCode).icon}
              />

              <WeatherHighlights
                feelsLike={currentWeather.apparentTemperature}
                humidity={currentWeather.relativeHumidity}
                windSpeed={currentWeather.windSpeed}
                precipitation={currentWeather.precipitation}
              />
            </section>

            {forecasts.length > 0 && <WeatherForecast forecasts={forecasts} />}
          </>
        )}

        {/* Initial message */}
        {!currentWeather && !isLoading && !error && (
          <p className="mt-16 text-center text-slate-400">
            Search for a city to see its current weather.
          </p>
        )}
      </div>
    </main>
  );
}

export default App;
