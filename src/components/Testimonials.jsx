"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TESTIMONIALS = [
  { name: "Aarav & Diya", text: "Every emotion was captured beautifully. The team blended right in and delivered beyond expectations!", date: "Feb 2025" },
  { name: "Rahul & Ananya", text: "Professional, creative, and super friendly. Our families keep replaying the film!", date: "Dec 2024" },
  { name: "Ishaan & Meera", text: "From pre-wedding to reception, they nailed every moment. Highly recommended.", date: "Oct 2024" },
];

export default function Testimonials() {
  const [tIndex, setTIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTIndex((i) => (i + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-neutral-50 border-y border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Testimonials</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm ${tIndex === i ? "ring-2 ring-neutral-900" : ""}`}
            >
              <p className="text-neutral-800">“{t.text}”</p>
              <footer className="mt-4 text-sm text-neutral-600">— {t.name} · {t.date}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
