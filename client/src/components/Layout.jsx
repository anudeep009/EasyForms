import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <Header />
      <main className="relative z-10 container mx-auto px-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}