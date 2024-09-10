import React from "react";

export default function Footer() {
  return (
    <footer className="relative z-10 container mx-auto px-4 py-6 text-center text-gray-400">
      <p>&copy; {new Date().getFullYear()} EasyForms. All rights reserved.</p>
    </footer>
  );
}
