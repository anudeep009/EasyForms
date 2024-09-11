import React from "react";
import { Menu, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-md dark:bg-gray-800">
      <div className="flex h-14 items-center px-4 md:px-6 max-w-screen-2xl mx-auto">
        {/* Logo and Name */}
        <div
          className="mr-4 flex items-center space-x-2 cursor-pointer"
          onClick={() => handleNavigation("/")}
          aria-label="Navigate to Home"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-teal-500"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
          <span className="text-xl font-bold text-teal-500">EasyForms</span>
        </div>

        <div className="flex-1 flex items-center justify-end space-x-4">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <button
              className={`text-teal-600 hover:text-teal-800 transition-colors focus:outline-none ${
                isActive("/Jobsform") ? "border-b-2 border-teal-600" : ""
              }`}
              onClick={() => handleNavigation("/Jobsform")}
              aria-label="Navigate to Jobs Form"
            >
              Jobs Form
            </button>
            <button
              className={`text-teal-600 hover:text-teal-800 transition-colors focus:outline-none ${
                isActive("/Scholarshipsform")
                  ? "border-b-2 border-teal-600"
                  : ""
              }`}
              onClick={() => handleNavigation("/Scholarshipsform")}
              aria-label="Navigate to Scholarships Form"
            >
              Scholarships Form
            </button>
            {/* Profile Option */}
            <button
              className={`flex items-center space-x-1 text-teal-600 hover:text-teal-800 transition-colors focus:outline-none ${
                isActive("/Profile") ? "border-b-2 border-teal-600" : ""
              }`}
              onClick={() => handleNavigation("/Profile")}
              aria-label="Navigate to Profile"
            >
              <User className="h-5 w-5" />
              <span>Profile</span>
            </button>
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden relative">
            <button
              className="p-2 text-teal-600 focus:outline-none rounded hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              <Menu className="h-6 w-6" />
            </button>

            {isOpen && (
              <div className="absolute top-full right-0 w-48 mt-2 bg-white dark:bg-gray-700 rounded-lg shadow-lg transition-all duration-200">
                <nav className="flex flex-col space-y-2 py-2 px-3">
                  <button
                    className={`text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded p-2 text-left transition-all duration-150 ${
                      isActive("/Jobsform") ? "border-l-4 border-teal-500" : ""
                    }`}
                    onClick={() => handleNavigation("/Jobsform")}
                    aria-label="Navigate to Jobs Form"
                  >
                    Jobs Form
                  </button>
                  <button
                    className={`text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded p-2 text-left transition-all duration-150 ${
                      isActive("/Scholarshipsform")
                        ? "border-l-4 border-teal-500"
                        : ""
                    }`}
                    onClick={() => handleNavigation("/Scholarshipsform")}
                    aria-label="Navigate to Scholarships Form"
                  >
                    Scholarships Form
                  </button>
                  {/* Profile Option in Mobile Menu */}
                  <button
                    className={`text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded p-2 text-left transition-all duration-150 flex items-center space-x-1 ${
                      isActive("/Profile") ? "border-l-4 border-teal-500" : ""
                    }`}
                    onClick={() => handleNavigation("/Profile")}
                    aria-label="Navigate to Profile"
                  >
                    <User className="h-5 w-5" />
                    <span>Profile</span>
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
