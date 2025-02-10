import { useState, useEffect } from "react";
import { Search, Menu, X, UserCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsAuthenticated(!!user); // Convert user existence to boolean
  }, []);

  const handleSignInClick = () => navigate("/sign-in");

  const handleProfileClick = () => setShowDropdown(!showDropdown);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setShowDropdown(false);
    navigate("/"); // Navigate home after logout
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-900/50 backdrop-blur-md text-white p-4 flex items-center justify-between z-50 shadow-lg">
      {/* Logo */}
      <div className="text-3xl font-bold tracking-wide text-yellow-400 hover:scale-105 transition-transform">
        <Link to="/" className="hover:text-yellow-300">TravelScout✈️</Link>
      </div>

      {/* Search Bar */}
      <div className="hidden md:flex relative items-center w-1/3 max-w-lg">
        <Search className="absolute left-4 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 pl-10 border border-gray-500 rounded-full focus:ring-2 focus:ring-yellow-400 bg-gray-100/20 text-white placeholder-gray-300 shadow-md backdrop-blur-sm"
        />
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-6 text-lg font-semibold">
        <li className="hover:text-yellow-300 transition"><Link to="/discover">Discover</Link></li>
        <li className="hover:text-yellow-300 transition"><Link to="/trips">Trips</Link></li>
        <li className="hover:text-yellow-300 transition"><Link to="/about-us">About Us</Link></li>
      </ul>

      {/* Authentication Section */}
      {isAuthenticated ? (
        <div className="relative">
          {/* Profile Icon */}
          <UserCircle
            size={32}
            className="text-yellow-400 cursor-pointer hover:text-yellow-300 transition"
            onClick={handleProfileClick}
          />
          {/* Profile Dropdown */}
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-md py-2">
              <button
                onClick={() => navigate("/profile")}
                className="block w-full text-left px-4 py-2 hover:bg-gray-200"
              >
                My Profile
              </button>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 hover:bg-gray-200"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={handleSignInClick}
          className="hidden md:block bg-yellow-500 text-white px-5 py-2 rounded-full font-bold shadow-md hover:bg-yellow-600 transition"
        >
          Sign In
        </button>
      )}

      {/* Mobile Menu */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="fixed top-16 left-0 w-full bg-blue-900/80 backdrop-blur-md p-6 flex flex-col items-center gap-5 text-lg shadow-md">
          <Link to="/discover" className="hover:text-yellow-300 transition">Discover</Link>
          <Link to="/trips" className="hover:text-yellow-300 transition">Trips</Link>
          <Link to="/about-us" className="hover:text-yellow-300 transition">About Us</Link>
          {isAuthenticated ? (
            <>
              <button
                onClick={() => navigate("/profile")}
                className="bg-gray-200 text-black px-6 py-2 rounded-full font-bold shadow-md hover:bg-gray-300 transition"
              >
                My Profile
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-6 py-2 rounded-full font-bold shadow-md hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={handleSignInClick}
              className="bg-yellow-500 text-white px-6 py-2 rounded-full font-bold shadow-md hover:bg-yellow-600 transition"
            >
              Sign In
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
