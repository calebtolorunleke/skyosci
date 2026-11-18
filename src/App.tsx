import Header from "./components/layout/Header";
import CurrentWeather from "./components/weather/CurrentWeather";
import WeatherHighlights from "./components/weather/WeatherHighlights";
import WeatherForecast from "./components/weather/WeatherForecast";
import type { DailyForecast } from "./interfaces/forecast";

const sampleForecasts: DailyForecast[] = [
  { date: "Wed", weatherCode: 2, temperatureMax: 19, temperatureMin: 12 },
  { date: "Thu", weatherCode: 3, temperatureMax: 17, temperatureMin: 11 },
  { date: "Fri", weatherCode: 0, temperatureMax: 21, temperatureMin: 13 },
  { date: "Sat", weatherCode: 61, temperatureMax: 16, temperatureMin: 10 },
  { date: "Sun", weatherCode: 2, temperatureMax: 18, temperatureMin: 12 },
];

function App() {
  return (
    <main className="min-h-screen bg-[#080F1E] px-4 py-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Header />

        <section className="mt-10 grid gap-5 lg:grid-cols-[1.5fr_1fr]">
          <CurrentWeather
            city="Vancouver"
            country="Canada"
            temperature={18}
            condition="Partly Cloudy"
            feelsLike={17}
            temperatureMax={20}
            temperatureMin={13}
            weatherIcon="⛅"
          />

          <WeatherHighlights
            feelsLike={17}
            humidity={65}
            windSpeed={12}
            precipitation={0.2}
          />
        </section>

        <WeatherForecast forecasts={sampleForecasts} />
      </div>
    </main>
  );
}

export default App;
