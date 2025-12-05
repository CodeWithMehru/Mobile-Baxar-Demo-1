import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";

export const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-40">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <h1 className="text-xl font-bold text-primary">MOBILE BAZAR</h1>
        </Link>

        {/* Desktop Search Bar */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex flex-1 max-w-xs mx-4"
        >
          <div className="relative w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by brand, model..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            />
            <button
              type="submit"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary"
            >
              <Search size={18} />
            </button>
          </div>
        </form>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {/* Desktop Login */}
          <Link
            to="/profile"
            className="hidden md:flex items-center gap-1 text-gray-700 hover:text-primary transition"
          >
            <User size={18} />
            <span className="text-sm">Login</span>
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="flex items-center gap-1 text-gray-700 hover:text-primary transition relative"
          >
            <ShoppingCart size={18} />
            <span className="text-sm hidden md:inline">Cart</span>
          </Link>

          {/* Mobile Search Icon */}
          <button className="md:hidden text-gray-700 hover:text-primary transition">
            <Search size={18} />
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <form
        onSubmit={handleSearch}
        className="md:hidden px-4 py-2 border-t border-gray-200 bg-white"
      >
        <div className="relative w-full">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by brand, model..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          />
          <button
            type="submit"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary"
          >
            <Search size={18} />
          </button>
        </div>
      </form>
    </header>
  );
};
