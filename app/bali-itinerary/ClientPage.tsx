"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ClientPage() {
  const days = [
    { title: "Day 1 — Ubud", items: ["Rice terraces", "Monkey Forest", "Temples"] },
    { title: "Day 2 — Beaches", items: ["Seminyak", "Beach clubs", "Sunset"] },
    { title: "Day 3 — Adventure", items: ["Waterfalls", "ATV ride", "Spa"] },
  ];

  return (
    <div className="bg-black text-white min-h-screen p-10">
      <h1 className="text-5xl text-center mb-10">3 Day Bali Itinerary</h1>
      {days.map((d,i)=>(
        <motion.div key={i} initial={{opacity:0}} animate={{opacity:1}}>
          <h2>{d.title}</h2>
          <ul>{d.items.map((x,i)=><li key={i}>{x}</li>)}</ul>
        </motion.div>
      ))}
      <Link href="/"><button className="bg-white text-black p-3 rounded-xl">Generate Plan</button></Link>
    </div>
  );
}