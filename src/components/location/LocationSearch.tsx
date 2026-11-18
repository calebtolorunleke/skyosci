interface LocationSearchProps {
  onSearch: (location: string) => void;
}

function LocationSearch({ onSearch }: LocationSearchProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const location = formData.get("location")?.toString().trim();

    if (location) {
      onSearch(location);
    }
  };

  return (
    <form
      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
      onSubmit={handleSubmit}
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
  );
}

export default LocationSearch;
