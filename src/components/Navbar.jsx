import React from 'react';
import { ShoppingCart, User, Search } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/60 border-b border-neutral-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 shadow-inner shadow-emerald-800/20" />
          <span className="font-semibold text-lg tracking-tight">NourishNow</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-600">
          <a href="#menu" className="hover:text-neutral-900 transition-colors">Menu</a>
          <a href="#how" className="hover:text-neutral-900 transition-colors">How it works</a>
          <a href="#deals" className="hover:text-neutral-900 transition-colors">Deals</a>
          <a href="#contact" className="hover:text-neutral-900 transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-full border border-neutral-200 bg-white">
            <Search size={18} className="text-neutral-500" />
            <input
              type="text"
              placeholder="Search dishes"
              className="w-40 outline-none text-sm placeholder-neutral-400"
            />
          </div>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-neutral-200 bg-white hover:shadow-md transition">
            <ShoppingCart size={18} />
            <span className="hidden sm:inline text-sm">Cart</span>
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition">
            <User size={18} />
            <span className="hidden sm:inline text-sm">Sign in</span>
          </button>
        </div>
      </div>
    </header>
  );
}
