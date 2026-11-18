interface HeaderProps {
  onSearch?: (location: string) => void;
}

function Header({ onSearch }: HeaderProps) {
  return (
    <header className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
      {/* SkyOsci branding */}
      <div>
        <div className="flex items-center gap-1">
          <img src="/public/skyosci.svg" alt="logo" className="h-13 w-13" />
          <h3 className="text-xl font-bold tracking-tight text-white">
            Sky<span className="text-sky-400">Osci</span>
          </h3>
        </div>

        <p className="mt-1 text-xs text-slate-400">
          Weather intelligence, simplified.
        </p>
      </div>

      {/* Location search */}
      <form
        className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
        onSubmit={(event) => {
          event.preventDefault();

          const formData = new FormData(event.currentTarget);
          const location = formData.get("location")?.toString().trim();

          if (location) {
            onSearch?.(location);
          }
        }}
      >
        <span className="text-sky-400">⌕</span>

        <input
          type="text"
          name="location"
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
    </header>
  );
}

export default Header;
