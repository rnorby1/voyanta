"use client";

import { useEffect, useState } from "react";

export default function SuccessPage() {
  const [plan, setPlan] = useState<any>(null);

  useEffect(() => {
    const stored = localStorage.getItem("voyanta_plan");

    if (stored) {
      setPlan(JSON.parse(stored));
    }
  }, []);

  if (!plan) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading your itinerary...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 max-w-3xl mx-auto">

      <h1 className="text-4xl mb-6 text-center">
        Your Full Itinerary ✈️
      </h1>

      {plan.days.map((day: any[], i: number) => (
        <div key={i} className="mb-6">
          <h2 className="text-xl mb-2">Day {i + 1}</h2>

          {day.map((item: any, j: number) => (
            <div key={j} className="mb-2">
              <b>{item.name}</b>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      ))}

      <button
        onClick={() => window.print()}
        className="mt-6 bg-white text-black px-6 py-3 rounded"
      >
        Download PDF
      </button>

    </div>
  );
}