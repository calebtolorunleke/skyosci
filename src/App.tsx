import { useState } from "react";
import { weatherLookup } from "./services/weatherLookup";
import { getWeatherInfo } from "./utils/weatherUtils";
import type { Location } from "./interfaces/location";
import type { CurrentWeather as CurrentWeatherData } from "./interfaces/weather";
import type { DailyForecast } from "./interfaces/forecast";
import CurrentWeather from "./components/weather/CurrentWeather";
import WeatherHighlights from "./components/weather/WeatherHighlights";
import WeatherForecast from "./components/weather/WeatherForecast";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null,
  );

  const [currentWeather, setCurrentWeather] =
    useState<CurrentWeatherData | null>(null);

  const [forecasts, setForecasts] = useState<DailyForecast[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (location: Location) => {
    setIsLoading(true);
    setError(null);

    try {
      // Fetch weather using the selected location's coordinates
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

  const handleUseCurrentLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    setIsLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;

          const weatherData = await weatherLookup.getWeather(
            latitude,
            longitude,
          );

          const location: Location = {
            id: 0,
            name: "Your Current Location",
            latitude,
            longitude,
            country: "",
            timezone: "auto",
          };

          setSelectedLocation(location);
          setCurrentWeather(weatherData.currentWeather);
          setForecasts(weatherData.dailyForecast);
        } catch (error) {
          setError(
            error instanceof Error
              ? error.message
              : "Unable to retrieve weather for your location.",
          );
        } finally {
          setIsLoading(false);
        }
      },
      (error) => {
        if (error.code === error.PERMISSION_DENIED) {
          setError("Location permission denied. Please allow location access.");
        } else if (error.code === error.TIMEOUT) {
          setError("Location request timed out. Please try again.");
        } else {
          setError("Unable to determine your location. Please try again.");
        }

        setIsLoading(false);
      },
      {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 300000,
      },
    );
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#080F1E] px-4 py-6 sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col">
        <Header
          onSearch={handleSearch}
          onUseCurrentLocation={handleUseCurrentLocation}
        />
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
      <Footer />
    </main>
  );
}

export default App;
