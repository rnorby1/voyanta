"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ClientPage() {
  const days = [
    { title: "Day 1 — Ancient Rome", items: ["Colosseum", "Roman Forum", "Palatine Hill"] },
    { title: "Day 2 — Vatican", items: ["Vatican Museums", "Sistine Chapel", "St. Peter’s Basilica"] },
    { title: "Day 3 — Explore", items: ["Pantheon", "Trevi Fountain", "Trastevere"] },
  ];

  return (
    <div className="bg-black text-white min-h-screen p-10">
      <h1 className="text-5xl text-center mb-10">3 Day Rome Itinerary</h1>
      {days.map((d, i) => (
        <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-6">
          <h2 className="text-2xl">{d.title}</h2>
          <ul>{d.items.map((x, idx) => <li key={idx}>{x}</li>)}</ul>
        </motion.div>
      ))}
      <Link href="/"><button className="bg-white text-black px-6 py-3 rounded-xl">Generate My Plan</button></Link>
    </div>
  );
}