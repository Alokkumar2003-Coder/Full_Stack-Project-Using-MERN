import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-gray-900 text-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-bold text-white">
            <Link to="/" className="text-white">
              iNotebook
            </Link>
          </div>

          {/* Hamburger */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === "/" ? "bg-gray-800 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === "/about" ? "bg-gray-800 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              About
            </Link>

            {!localStorage.getItem("token") ? (
              <>
                {location.pathname !== "/login" && (
                  <Link
                    to="/login"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium"
                  >
                    Login
                  </Link>
                )}
                {location.pathname !== "/signup" && (
                  <Link
                    to="/signup"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium"
                  >
                    Signup
                  </Link>
                )}
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm font-medium"
              >
                Logout
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden flex flex-col space-y-2 mt-2">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === "/" ? "bg-gray-800 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === "/about" ? "bg-gray-800 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              About
            </Link>

            {!localStorage.getItem("token") ? (
              <>
                {location.pathname !== "/login" && (
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 mb-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium"
                  >
                    Login
                  </Link>
                )}
                {location.pathname !== "/signup" && (
                  <Link
                    to="/signup"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 mb-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium"
                  >
                    Signup
                  </Link>
                )}
              </>
            ) : (
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="px-4 py-2 mb-3 bg-red-600 hover:bg-red-700 text-white rounded-3 text-sm font-medium"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
