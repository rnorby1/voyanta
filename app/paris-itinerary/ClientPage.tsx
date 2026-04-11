"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ClientPage() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center text-center px-6">
        <img
          src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="relative z-10 max-w-2xl">
          <h1 className="text-5xl font-serif mb-4">
            3 Day Paris Itinerary
          </h1>
          <p className="text-gray-300 text-lg">
            A luxury travel plan for your perfect Paris experience.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-10">

        {[
          {
            title: "Day 1 — Iconic Paris",
            items: ["Eiffel Tower", "Seine River Cruise", "Champs-Élysées", "Arc de Triomphe"],
          },
          {
            title: "Day 2 — Art & Culture",
            items: ["Louvre Museum", "Saint-Germain cafés", "Montmartre", "Sacré-Cœur"],
          },
          {
            title: "Day 3 — Hidden Gems",
            items: ["Le Marais", "Luxury shopping", "Versailles"],
          },
        ].map((day, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <h2 className="text-2xl mb-3">{day.title}</h2>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <ul className="space-y-2 text-gray-300">
                {day.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}

        {/* CTA */}
        <div className="text-center mt-16">
          <h2 className="text-3xl mb-4">
            Want a personalized version of this trip?
          </h2>

          <p className="text-gray-400 mb-6">
            Voyanta creates a custom luxury itinerary tailored to you.
          </p>

          <Link href="/">
            <button className="bg-white text-black px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition">
              Generate My AI Travel Plan ✈️
            </button>
          </Link>

          <div className="mt-6 text-sm text-gray-500 space-y-1">
            <p>✔ Used by travelers worldwide</p>
            <p>✔ Instant itinerary generation</p>
            <p>✔ One-time payment — no subscription</p>
          </div>
        </div>

      </section>

      <footer className="text-center text-gray-500 py-10 text-sm">
        © {new Date().getFullYear()} Voyanta
      </footer>

    </div>
  );
}