"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ClientPage() {
  const days = [
    { title: "Day 1 — Manhattan", items: ["Times Square", "Central Park", "Broadway"] },
    { title: "Day 2 — Culture", items: ["Statue of Liberty", "SoHo", "Museums"] },
    { title: "Day 3 — Views", items: ["Brooklyn Bridge", "DUMBO", "Skyline"] },
  ];

  return (
    <div className="bg-black text-white p-10 min-h-screen">
      <h1 className="text-5xl text-center mb-10">3 Day NYC Itinerary</h1>
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