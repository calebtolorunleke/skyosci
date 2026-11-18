import Header from "./components/layout/Header";
import CurrentWeather from "./components/weather/CurrentWeather";
import WeatherHighlights from "./components/weather/WeatherHighlights";

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
      </div>
    </main>
  );
}

export default App;
