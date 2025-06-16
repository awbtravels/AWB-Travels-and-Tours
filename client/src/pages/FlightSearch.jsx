import { useState } from "react";
export function FlightSearch() {
  const [flights, setFlights] = useState([]);
  const handleSearch = async () => {
    const res = await fetch("/api/flights/search?from=LOS&to=LHR&date=2025-07-01");
    const data = await res.json();
    setFlights(data);
  };
  return (
    <div className="p-4">
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleSearch}>
        Search Flights
      </button>
      <ul>{flights.map((f, i) => <li key={i}>{f.airline} - {f.price}</li>)}</ul>
    </div>
  );
}