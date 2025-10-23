import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import MenuGrid from './components/MenuGrid';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-neutral-50 text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <MenuGrid />
      </main>
    </div>
  );
}
