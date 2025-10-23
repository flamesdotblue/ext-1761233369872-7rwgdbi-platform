import React from 'react';
import { Search, Bike, Clock } from 'lucide-react';

const steps = [
  {
    icon: <Search className="h-5 w-5 text-emerald-700" />,
    title: 'Discover',
    desc: 'Browse hand-picked menus from top-rated restaurants near you.'
  },
  {
    icon: <Clock className="h-5 w-5 text-emerald-700" />,
    title: 'Order & Track',
    desc: 'Secure checkout with real-time status updates for your order.'
  },
  {
    icon: <Bike className="h-5 w-5 text-emerald-700" />,
    title: 'Delivered Fast',
    desc: 'Fresh, hot, and on-time delivery straight to your door.'
  }
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">How it works</h2>
          <p className="mt-2 text-neutral-600">Simple steps to get your favorites quickly</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {steps.map((s, idx) => (
            <div key={idx} className="rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-emerald-50 ring-1 ring-emerald-200">
                {s.icon}
              </div>
              <h3 className="mt-4 font-semibold text-neutral-900">{s.title}</h3>
              <p className="mt-1 text-sm text-neutral-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
