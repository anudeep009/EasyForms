import * as React from "react";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);


  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="container flex h-14 max-w-screen-2xl items-center px-4">
        {/* Logo and Name */}
        <div className="mr-4 flex items-center space-x-2 cursor-pointer" onClick={() => handleNavigation('/')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-teal-400"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
          <span className="text-xl font-bold text-teal-400">EasyForms</span>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <button
              className="text-teal-500 focus:outline-none"
              onClick={() => handleNavigation('/Jobsform')}
            >
              Jobs Form
            </button>
            <button
              className="text-teal-500 focus:outline-none"
              onClick={() => handleNavigation('/Scholarshipsform')}
            >
              Scholarships Form
            </button>
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden relative">
            <button
              className="text-gray-700 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </button>

            {isOpen && (
              <div className="absolute top-full right-0 w-40 bg-gray-50 rounded-lg shadow-lg">
                <nav className="flex flex-col space-y-4 p-4">
                  <button
                    className="text-gray-700 hover:bg-gray-100 rounded p-2 w-full text-left"
                    onClick={() => {
                      handleNavigation('/Jobsform');
                      setIsOpen(false);
                    }}
                  >
                    Jobs Form
                  </button>
                  <button
                    className="text-gray-700 hover:bg-gray-100 rounded p-2 w-full text-left"
                    onClick={() => {
                      handleNavigation('/Scholarshipsform');
                      setIsOpen(false);
                    }}
                  >
                    Scholarships Form
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
