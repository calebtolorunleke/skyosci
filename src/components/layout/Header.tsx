import LocationSearch from "../location/LocationSearch";

interface HeaderProps {
  onSearch: (location: string) => void;
}

function Header({ onSearch }: HeaderProps) {
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
      <LocationSearch onSearch={onSearch} />
    </header>
  );
}

export default Header;
