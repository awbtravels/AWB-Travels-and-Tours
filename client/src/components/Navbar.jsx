export function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-xl font-bold">AWB Travels & Tours</span>
        <div className="space-x-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/flights" className="hover:underline">Flights</a>
          <a href="/hotels" className="hover:underline">Hotels</a>
          <a href="/booking" className="hover:underline">Booking</a>
          <a href="/login" className="hover:underline">Login</a>
        </div>
      </div>
    </nav>
  );
}