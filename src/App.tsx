import { useEffect } from "react";
import { locationLookup } from "./services/locationLookup";

function App() {
  useEffect(() => {
    const testGeoCoding = async () => {
      try {
        const locations = await locationLookup.searchLocations("Vancouver");

        console.log("Geocoding results:", locations);
      } catch (error) {
        console.log("Geocoding test failed: ", error);
      }
    };
    testGeoCoding();
  }, []);
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white">SkyOsci</h1>

        <p className="mt-3 text-lg text-sky-400">
          Real-Time Weather Intelligence
        </p>

        <button className="mt-6 rounded-lg bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-600">
          Get Started
        </button>
      </div>
    </main>
  );
}

export default App;
