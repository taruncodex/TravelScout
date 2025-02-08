import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; 

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-900 text-white p-4 flex items-center justify-between z-50 shadow-lg">
      {/* Logo */}
      <div className="text-3xl font-bold tracking-wide text-yellow-400 hover:scale-105 transition-transform">
        <Link to="/" className="hover:text-yellow-300">TravelScout✈️</Link>
      </div>

      {/* Search Bar (Desktop) */}
      <div className="hidden md:flex relative items-center w-1/3 max-w-lg">
        <Search className="absolute left-4 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 pl-10 border border-gray-500 rounded-full focus:ring-2 focus:ring-yellow-400 bg-gray-100 text-gray-800 shadow-md"
        />
      </div>

      {/* Navigation Links (Desktop) */}
      <ul className="hidden md:flex gap-6 text-lg font-semibold">
        <li className="hover:text-yellow-300 transition"><Link to="/discover">Discover</Link></li>
        <li className="hover:text-yellow-300 transition"><Link to="/trips">Trips</Link></li>
        <li className="hover:text-yellow-300 transition"><Link to="/review">Review</Link></li>
        <li className="hover:text-yellow-300 transition"><Link to="/about-us">About Us</Link></li>
      </ul>

      {/* Sign In Button (Desktop) */}
      <button className="hidden md:block bg-yellow-500 text-white px-5 py-2 rounded-full font-bold shadow-md hover:bg-yellow-600 transition">
        <Link to="/sign-in">Sign In</Link>
      </button>

      {/* Mobile Menu Toggle */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-16 left-0 w-full bg-blue-900 p-6 flex flex-col items-center gap-5 text-lg shadow-md">
          <Link to="/discover" className="hover:text-yellow-300 transition">Discover</Link>
          <Link to="/trips" className="hover:text-yellow-300 transition">Trips</Link>
          <Link to="/review" className="hover:text-yellow-300 transition">Review</Link>
          <Link to="/about-us" className="hover:text-yellow-300 transition">About Us</Link>
          <Link to="/sign-in">
            <button className="bg-yellow-500 text-white px-6 py-2 rounded-full font-bold shadow-md hover:bg-yellow-600 transition">
              Sign In
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
