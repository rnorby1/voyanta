"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ClientPage() {
  const days = [
    { title: "Day 1 — Gaudí", items: ["Sagrada Familia", "Park Güell", "Casa Batlló"] },
    { title: "Day 2 — City Life", items: ["La Rambla", "Boqueria Market", "Gothic Quarter"] },
    { title: "Day 3 — Relax", items: ["Beach", "Tapas tour", "Sunset views"] },
  ];

  return (
    <div className="bg-black text-white min-h-screen p-10">
      <h1 className="text-5xl text-center mb-10">3 Day Barcelona Itinerary</h1>

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