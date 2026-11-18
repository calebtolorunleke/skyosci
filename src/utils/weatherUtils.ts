export function getWeatherInfo(weatherCode: number) {
  switch (weatherCode) {
    case 0:
      return { description: "Clear Sky", icon: "☀️" };

    case 1:
      return { description: "Mainly Clear", icon: "🌤️" };

    case 2:
      return { description: "Partly Cloudy", icon: "⛅" };

    case 3:
      return { description: "Overcast", icon: "☁️" };

    case 45:
    case 48:
      return { description: "Fog", icon: "🌫️" };

    case 51:
    case 53:
    case 55:
      return { description: "Drizzle", icon: "🌦️" };

    case 56:
    case 57:
      return { description: "Freezing Drizzle", icon: "🌧️" };

    case 61:
    case 63:
    case 65:
      return { description: "Rain", icon: "🌧️" };

    case 66:
    case 67:
      return { description: "Freezing Rain", icon: "🌧️" };

    case 71:
    case 73:
    case 75:
    case 77:
      return { description: "Snow", icon: "❄️" };

    case 80:
    case 81:
    case 82:
      return { description: "Rain Showers", icon: "🌦️" };

    case 85:
    case 86:
      return { description: "Snow Showers", icon: "🌨️" };

    case 95:
    case 96:
    case 99:
      return { description: "Thunderstorm", icon: "⛈️" };

    default:
      return { description: "Unknown", icon: "🌡️" };
  }
}

export function formatForecastDay(date: string): string {
  const forecastDate = new Date(`${date}T12:00:00`);

  return forecastDate.toLocaleDateString("en-CA", {
    weekday: "short",
  });
}
