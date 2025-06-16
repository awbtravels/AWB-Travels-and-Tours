import { useState } from "react";
export function HotelSearch() {
  const [hotels, setHotels] = useState([]);
  const handleSearch = async () => {
    const res = await fetch("/api/hotels/search?city=London");
    const data = await res.json();
    setHotels(data);
  };
  return (
    <div className="p-4">
      <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={handleSearch}>
        Search Hotels
      </button>
      <ul>{hotels.map((h, i) => <li key={i}>{h.name} - {h.price}</li>)}</ul>
    </div>
  );
}