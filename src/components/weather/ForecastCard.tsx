interface ForecastCardProps {
  day: string;
  weatherIcon: string;
  temperatureMax: number;
  temperatureMin: number;
}

function ForecastCard({
  day,
  weatherIcon,
  temperatureMax,
  temperatureMin,
}: ForecastCardProps) {
  return (
    <article className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-[#111D31] p-5 transition hover:border-sky-400/30">
      {/* Day of the week */}
      <p className="text-sm font-medium text-slate-300">{day}</p>

      {/* Weather icon */}
      <span className="text-3xl" aria-hidden="true">
        {weatherIcon}
      </span>

      {/* Temperature range */}
      <div className="flex items-center gap-3 text-sm">
        <span className="font-semibold text-white">
          {Math.round(temperatureMax)}°
        </span>

        <span className="text-slate-400">{Math.round(temperatureMin)}°</span>
      </div>
    </article>
  );
}

export default ForecastCard;
