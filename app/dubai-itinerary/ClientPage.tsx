"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ClientPage() {
  const days = [
    { title: "Day 1 — City Icons", items: ["Burj Khalifa", "Dubai Mall", "Fountain show"] },
    { title: "Day 2 — Adventure", items: ["Desert safari", "Camel ride", "Sandboarding"] },
    { title: "Day 3 — Luxury", items: ["Beach clubs", "Dubai Marina", "Yacht experience"] },
  ];

  return (
    <div className="bg-black text-white min-h-screen p-10">
      <h1 className="text-5xl text-center mb-10">3 Day Dubai Itinerary</h1>

      {days.map((d, i) => (
        <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-6">
          <h2 className="text-2xl">{d.title}</h2>
          <ul className="list-disc ml-6">
            {d.items.map((x, idx) => <li key={idx}>{x}</li>)}
          </ul>
        </motion.div>
      ))}

      <Link href="/">
        <button className="mt-10 bg-white text-black px-6 py-3 rounded-xl">
          Generate My Custom Plan ✈️
        </button>
      </Link>
    </div>
  );
}