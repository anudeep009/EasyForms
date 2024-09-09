import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Login,Signup } from "../../exports.js"

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="w-full h-full opacity-20">
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 600"
          >
            {[...Array(30)].map((_, i) => (
              <line
                key={i}
                x1="0"
                y1={i * 20}
                x2="800"
                y2={i * 20}
                stroke="#555"
                strokeWidth="0.5"
              />
            ))}
          </svg>
        </div>
      </div>

      <header className="relative z-10 container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            <span className="text-xl font-bold text-teal-400">EasyForms</span>
          </div>
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M3 6h18M3 12h18m-10 6h10" />
            </svg>
          </button>

          <ul className="hidden md:flex md:space-x-4">
            <li>
              <Link
                to={'/Jobsform'}
                className="block px-4 py-2 text-sm md:text-base hover:bg-teal-500 md:hover:bg-transparent"
              >
                Jobs Form         
             </Link>
            </li>
            <li>
              <Link
                to={'/Scholarshipsform'}
                className="block px-4 py-2 text-sm md:text-base hover:bg-teal-500 md:hover:bg-transparent"
              >
                Scholarships Form
              </Link>
            </li>
          </ul>
        </nav>

        {isOpen && (
          <div className="absolute top-full right-4 w-40 bg-black rounded-lg  transition transform duration-300 ease-out z-20">
            <ul className="flex flex-col">
              <li>
                <Link
                  to={'/Jobsform'}
                  className="block px-4 py-2 text-sm hover:bg-teal-500"
                >
                  Jobs Form
                </Link>
              </li>
              <li>
                <Link
                  to={'/Scholarshipsform'}
                  className="block px-4 py-2 text-sm hover:bg-teal-500"
                >
                  Scholarships Form
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>

      <main className="relative z-10 container mx-auto px-4 py-20 text-center">
        <h1 className="mb-6 text-3xl md:text-5xl font-bold leading-tight text-yellow-300">
          Autofill Your Applications <br className="hidden md:block" /> with
          Ease!
        </h1>
        <p className="mb-8 text-lg md:text-xl text-gray-300">
          Streamline your job and scholarship application process with our
          intelligent autofill technology.
        </p>
        <Link to={"/Signup"}>
          <button className="bg-teal-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-teal-600 transition">
            Get Started
          </button>
        </Link>
      </main>
    </div>
  );
}
