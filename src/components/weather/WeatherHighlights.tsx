import HighlightCard from "./HighlightCard";

interface WeatherHighlightsProps {
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  precipitation: number;
}

function WeatherHighlights({
  feelsLike,
  humidity,
  windSpeed,
  precipitation,
}: WeatherHighlightsProps) {
  return (
    <section aria-label="Weather highlights" className="grid grid-cols-2 gap-4">
      <HighlightCard
        label="Feels Like"
        value={`${Math.round(feelsLike)}°`}
        icon="🌡️"
      />

      <HighlightCard label="Humidity" value={`${humidity}%`} icon="💧" />

      <HighlightCard label="Wind Speed" value={`${windSpeed} km/h`} icon="🌬️" />

      <HighlightCard
        label="Precipitation"
        value={`${precipitation} mm`}
        icon="🌧️"
      />
    </section>
  );
}

export default WeatherHighlights;
