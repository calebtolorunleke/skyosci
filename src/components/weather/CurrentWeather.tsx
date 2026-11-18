interface CurrentWeatherProps {
  city: string;
  country: string;
  temperature: number;
  condition: string;
  feelsLike: number;
  temperatureMax: number;
  temperatureMin: number;
  weatherIcon: string;
}

function CurrentWeather({
  city,
  country,
  temperature,
  condition,
  feelsLike,
  temperatureMax,
  temperatureMin,
  weatherIcon,
}: CurrentWeatherProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#15345B] via-[#102442] to-[#101A30] p-7 sm:p-10">
      {/* Decorative background glow */}
      <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl" />

      <div className="relative">
        {/* Location */}
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-300">
          {country ? `${city}, ${country}` : city}
        </p>

        {/* Weather information */}
        <div className="mt-8 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-7xl font-light tracking-tighter text-white sm:text-8xl">
              {Math.round(temperature)}°
            </h2>

            <p className="mt-3 text-lg font-medium text-white">{condition}</p>

            <p className="mt-2 text-sm text-slate-300">
              Feels like {Math.round(feelsLike)}°
            </p>
          </div>

          {/* Weather icon */}
          <div className="text-7xl sm:text-8xl" aria-hidden="true">
            {weatherIcon}
          </div>
        </div>

        {/* Today's temperature range */}
        <div className="mt-10 flex items-center gap-5 border-t border-white/10 pt-5 text-sm">
          <p className="text-slate-300">
            H:{" "}
            <span className="font-semibold text-white">
              {Math.round(temperatureMax)}°
            </span>
          </p>

          <p className="text-slate-300">
            L:{" "}
            <span className="font-semibold text-white">
              {Math.round(temperatureMin)}°
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default CurrentWeather;
