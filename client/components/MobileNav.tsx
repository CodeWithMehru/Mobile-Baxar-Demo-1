import { Link, useLocation } from "react-router-dom";
import { Home, Grid3X3, Store, User } from "lucide-react";

export const MobileNav = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 md:hidden bg-blue-50 border-t border-gray-200 shadow-lg z-40">
      <div className="flex justify-around items-center h-16">
        <Link
          to="/"
          className={`flex flex-col items-center gap-1 py-2 px-3 transition ${
            isActive("/")
              ? "text-primary"
              : "text-gray-700 hover:text-primary"
          }`}
        >
          <Home size={22} />
          <span className="text-xs">Home</span>
        </Link>

        <Link
          to="/products"
          className={`flex flex-col items-center gap-1 py-2 px-3 transition ${
            isActive("/products")
              ? "text-primary"
              : "text-gray-700 hover:text-primary"
          }`}
        >
          <Grid3X3 size={22} />
          <span className="text-xs">Explore</span>
        </Link>

        <Link
          to="/stores"
          className={`flex flex-col items-center gap-1 py-2 px-3 transition ${
            isActive("/stores")
              ? "text-primary"
              : "text-gray-700 hover:text-primary"
          }`}
        >
          <Store size={22} />
          <span className="text-xs">Stores</span>
        </Link>

        <Link
          to="/profile"
          className={`flex flex-col items-center gap-1 py-2 px-3 transition ${
            isActive("/profile")
              ? "text-primary"
              : "text-gray-700 hover:text-primary"
          }`}
        >
          <User size={22} />
          <span className="text-xs">Profile</span>
        </Link>
      </div>
    </nav>
  );
};
