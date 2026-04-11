"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ClientPage() {
  const days = [
    {
      title: "Day 1 — Ancient Rome",
      items: ["Colosseum", "Roman Forum", "Palatine Hill"],
    },
    {
      title: "Day 2 — Vatican & Culture",
      items: ["Vatican Museums", "Sistine Chapel", "St. Peter’s Basilica"],
    },
    {
      title: "Day 3 — Food & Exploration",
      items: ["Trastevere", "Pantheon", "Trevi Fountain"],
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <h1 className="text-5xl text-center py-20">3 Day Rome Itinerary</h1>
      <div className="max-w-4xl mx-auto space-y-8 px-6">
        {days.map((d, i) => (
          <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-2xl">{d.title}</h2>
            <ul>{d.items.map((x, i) => <li key={i}>{x}</li>)}</ul>
          </motion.div>
        ))}
        <Link href="/"><button className="bg-white text-black p-4 rounded-xl">Generate My Plan</button></Link>
      </div>
    </div>
  );
}