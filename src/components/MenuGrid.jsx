import React, { useMemo, useState } from 'react';
import { Star, ShoppingCart } from 'lucide-react';

const DISHES = [
  {
    id: '1',
    title: 'Spicy Ramen Bowl',
    price: 12.5,
    rating: 4.8,
    img: 'https://images.unsplash.com/photo-1604908812771-8f47b71b2a88?q=80&w=1200&auto=format&fit=crop',
    tag: 'Popular'
  },
  {
    id: '2',
    title: 'Classic Margherita Pizza',
    price: 14.0,
    rating: 4.9,
    img: 'https://images.unsplash.com/photo-1548365328-9f547fb09530?q=80&w=1200&auto=format&fit=crop',
    tag: 'Chef special'
  },
  {
    id: '3',
    title: 'Vegan Buddha Bowl',
    price: 11.0,
    rating: 4.7,
    img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1200&auto=format&fit=crop',
    tag: 'Healthy'
  },
  {
    id: '4',
    title: 'Sushi Assortment',
    price: 18.0,
    rating: 4.9,
    img: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=1200&auto=format&fit=crop',
    tag: 'Trending'
  },
  {
    id: '5',
    title: 'Butter Chicken Curry',
    price: 15.5,
    rating: 4.8,
    img: 'https://images.unsplash.com/photo-1604908554049-1e4f2c0222b4?q=80&w=1200&auto=format&fit=crop',
    tag: 'New'
  },
  {
    id: '6',
    title: 'Avocado Toast Deluxe',
    price: 9.5,
    rating: 4.6,
    img: 'https://images.unsplash.com/photo-1548907040-4bea8b00d26f?q=80&w=1200&auto=format&fit=crop',
    tag: 'Brunch'
  }
];

export default function MenuGrid() {
  const [query, setQuery] = useState('');
  const [cart, setCart] = useState({});

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return DISHES;
    return DISHES.filter(d => d.title.toLowerCase().includes(q) || d.tag.toLowerCase().includes(q));
  }, [query]);

  function addToCart(item) {
    setCart(prev => ({ ...prev, [item.id]: (prev[item.id] || 0) + 1 }));
  }

  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <section id="menu" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Today's menu</h2>
            <p className="text-neutral-600 mt-1">Handpicked dishes you will love</p>
          </div>
          <div className="flex items-center gap-3">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search dishes or tags"
              className="w-full sm:w-72 px-4 py-2.5 rounded-xl border border-neutral-200 bg-white outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 transition">
              <ShoppingCart size={18} />
              <span className="text-sm">{cartCount}</span>
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((dish) => (
            <article key={dish.id} className="group rounded-2xl overflow-hidden border border-neutral-200 bg-white flex flex-col">
              <div className="relative h-44">
                <img
                  src={dish.img}
                  alt={dish.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs bg-white/90 border border-neutral-200">{dish.tag}</span>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-neutral-900">{dish.title}</h3>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star size={16} fill="#f59e0b" stroke="#f59e0b" />
                    <span className="text-sm font-medium text-neutral-700">{dish.rating}</span>
                  </div>
                </div>
                <p className="mt-1 text-sm text-neutral-600">Fresh ingredients, chef-crafted flavor.</p>
                <div className="mt-auto flex items-center justify-between pt-4">
                  <p className="font-semibold">${'{'}dish.price.toFixed(2){'}'}</p>
                  <button onClick={() => addToCart(dish)} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-neutral-200 bg-white hover:bg-neutral-50 transition">
                    <ShoppingCart size={18} />
                    <span className="text-sm">Add</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
