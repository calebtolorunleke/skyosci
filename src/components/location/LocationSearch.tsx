import { useState } from "react";
import { locationLookup } from "../../services/locationLookup";
import type { Location } from "../../interfaces/location";

interface LocationSearchProps {
  onSearch: (location: Location) => void;
}
function LocationSearch({ onSearch }: LocationSearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [locations, setLocations] = useState<Location[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (query: string) => {
    if (query.trim().length < 2) {
      setLocations([]);
      setError(null);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const results = await locationLookup.searchLocations(query);

      setLocations(results);

      if (results.length === 0) {
        setError("No locations found. Try another city.");
      }
    } catch {
      setError("Unable to search locations. Please try again.");
      setLocations([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLocationSelect = (location: Location) => {
    onSearch(location);
    setSearchQuery(`${location.name}, ${location.country}`);
    setLocations([]);
    setError(null);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSearch(searchQuery);
  };

  return (
    <div className="relative h-full ">
      <form
        className="flex h-full items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
        onSubmit={handleSubmit}
      >
        <span className="text-sky-400">⌕</span>

        <input
          type="text"
          name="location"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Search for a city..."
          className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500 sm:w-64"
        />

        <button
          type="submit"
          className="text-sm font-medium text-sky-400 transition hover:text-sky-300"
        >
          Search
        </button>
      </form>
      {isLoading && (
        <p className="absolute z-20 mt-2 w-full rounded-lg bg-slate-900 px-4 py-3 text-sm text-sky-400">
          Searching locations...
        </p>
      )}
      {error && (
        <p className="absolute z-20 mt-2 w-full rounded-lg bg-slate-900 px-4 py-3 text-sm text-red-400">
          {error}
        </p>
      )}
      {locations.length > 0 && (
        <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-white/10 bg-slate-900 shadow-xl">
          {locations.map((location) => (
            <button
              key={location.id}
              type="button"
              onClick={() => handleLocationSelect(location)}
              className="block w-full px-4 py-3 text-left text-sm text-white transition hover:bg-white/10"
            >
              {location.name}
              {location.admin1 ? `, ${location.admin1}` : ""}
              {`, ${location.country}`}
            </button>
          ))}
        </div>
      )}
      .{" "}
    </div>
  );
}

export default LocationSearch;
