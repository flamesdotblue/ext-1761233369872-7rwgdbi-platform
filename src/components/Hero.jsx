import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[70vh] py-10">
          <div className="relative order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900">Order delicious food, delivered fast</h1>
            <p className="mt-4 text-neutral-600 text-lg max-w-prose">Discover curated dishes from top-rated restaurants near you. Transparent pricing, secure checkout, and real-time tracking for a seamless dining experience.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#menu" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition">Browse Menu</a>
              <button className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-neutral-300 bg-white font-medium hover:bg-neutral-50 transition">View Deals</button>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4 text-sm text-neutral-600">
              <div>
                <p className="font-semibold text-neutral-900">4.9/5</p>
                <p>Customer rating</p>
              </div>
              <div>
                <p className="font-semibold text-neutral-900">3500+</p>
                <p>Restaurants</p>
              </div>
              <div>
                <p className="font-semibold text-neutral-900">30 min</p>
                <p>Avg. delivery</p>
              </div>
            </div>
          </div>
          <div className="relative h-[420px] sm:h-[520px] lg:h-[560px] order-1 lg:order-2">
            <div className="absolute inset-0 rounded-3xl overflow-hidden border border-neutral-200 bg-white">
              <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-emerald-200/20 via-transparent to-teal-300/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
