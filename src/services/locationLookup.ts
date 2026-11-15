import type { Location } from "../interfaces/location";
import type { GeocodingResult } from "../interfaces/locationResponse";

// Open-Meteo Geocoding API endpoint (free, no API key required)
const GEOCODING_API_URL = "https://geocoding-api.open-meteo.com/v1/search";

export const geocodingService = {
  //    Search for locations by query string (e.g., city name)
  async searchLocations(query: string): Promise<Location[]> {
    if (!query || query.trim().length < 2) {
      return [];
    }

    try {
      const response = await fetch(
        `${GEOCODING_API_URL}?name=${encodeURIComponent(query)}&count=5&language=en&format=json`,
      );

      if (!response.ok) {
        throw new Error(`Geocoding failed with status: ${response.status}`);
      }

      const data = await response.json();

      // If no results are found, return an empty array
      if (!data.results || !Array.isArray(data.results)) {
        return [];
      }

      // Map raw API response items to your clean Location interface
      return data.results.map((item: GeocodingResult) => ({
        id: item.id,
        name: item.name,
        admin1: item.admin1,
        country: item.country,
        latitude: item.latitude,
        longitude: item.longitude,
        timezone: item.timezone,
      }));
    } catch (error) {
      console.error("Error fetching location suggestions:", error);
      throw error;
    }
  },
};
