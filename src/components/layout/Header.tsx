import LocationSearch from "../location/LocationSearch";
import type { Location } from "../../interfaces/location";

interface HeaderProps {
  onSearch: (location: Location) => void;
  onUseCurrentLocation: () => void;
}

function Header({ onSearch, onUseCurrentLocation }: HeaderProps) {
  return (
    <header className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
      {/* SkyOsci branding */}
      <div>
        <div className="flex items-center gap-1">
          <img src="/skyosci.svg" alt="SkyOsci logo" className="h-13 w-13" />

          <h3 className="text-xl font-bold tracking-tight text-white">
            Sky<span className="text-sky-400">Osci</span>
          </h3>
        </div>

        <p className="mt-1 text-xs text-slate-400">
          Weather intelligence, simplified.
        </p>
      </div>

      {/* Location search component */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch ">
        <LocationSearch onSearch={onSearch} />
        <button
          type="button"
          onClick={onUseCurrentLocation}
          className="rounded-xl border border-sky-400/30 bg-sky-400/10 px-4 py-3 text-sm font-medium text-sky-300 transition hover:bg-sky-400/20"
        >
          Use my current location
        </button>
      </div>
    </header>
  );
}

export default Header;
