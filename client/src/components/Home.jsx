// Home.js
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="relative z-10 container mx-auto px-4 py-20 text-center">
      <h1 className="mb-6 text-3xl md:text-5xl font-bold leading-tight text-yellow-300">
        Autofill Your Applications <br className="hidden md:block" /> with Ease!
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
  );
}
