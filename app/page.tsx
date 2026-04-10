"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Voyanta() {
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [preview, setPreview] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const generateTrip = async () => {
    setLoading(true);
    setPreview([]);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ location, mode: "luxury" }),
      });

      const data = await res.json();
      setPreview(data.days?.[0] || []);
    } catch (err) {
      alert("Something went wrong");
    }

    setLoading(false);
  };

  const handleCheckout = async () => {
    localStorage.setItem(
      "voyanta_checkout",
      JSON.stringify({
        email,
        location,
        plan: { days: [preview] },
      })
    );

    const res = await fetch("/api/checkout", {
      method: "POST",
    });

    const data = await res.json();
    window.location.href = data.url;
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 max-w-xl w-full text-center shadow-2xl"
        >
          <h1 className="text-6xl font-serif mb-4 tracking-tight">
            Voyanta
          </h1>

          <p className="text-gray-300 mb-6 text-lg">
            AI-crafted luxury travel — instantly.
          </p>

          <div className="flex flex-col gap-3">

            <input
              placeholder="Where to?"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="p-3 rounded bg-white/10 border border-white/20"
            />

            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 rounded bg-white/10 border border-white/20"
            />

            <button
              onClick={generateTrip}
              className="bg-white text-black py-3 rounded-lg font-semibold hover:scale-[1.02] transition"
            >
              Design My Trip ✨
            </button>

            {loading && (
              <p className="text-sm text-gray-400">
                Crafting your experience...
              </p>
            )}
          </div>
        </motion.div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-16 text-center text-gray-400">
        <p>Used by travelers in 30+ countries</p>
      </section>

      {/* PREVIEW */}
      {preview.length > 0 && (
        <section className="max-w-4xl mx-auto px-6 py-12">

          <h2 className="text-3xl mb-6 text-center">
            Your Personalized Experience
          </h2>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
            {preview.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`mb-5 ${i >= 2 ? "blur-sm opacity-40" : ""}`}
              >
                <p className="text-xl font-semibold">{item.name}</p>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* VALUE + CTA */}
          <div className="mt-10 text-center">
            <p className="text-sm text-gray-400 mb-2">
              Join 1,000+ travelers using Voyanta
            </p>

            <h3 className="text-xl mb-4">
              Unlock your full concierge itinerary
            </h3>

            <ul className="text-sm text-gray-400 mb-6 space-y-1">
              <li>✔ Full 3-day luxury plan</li>
              <li>✔ Hidden gems & local spots</li>
              <li>✔ Premium hotel recommendations</li>
              <li>✔ PDF download</li>
              <li>✔ Delivered instantly to your email</li>
            </ul>

            <button
              onClick={handleCheckout}
              className="bg-white text-black px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition"
            >
              Unlock Full Plan — Limited Offer ($9)
            </button>

            {/* TRUST BADGES */}
            <div className="mt-6 text-xs text-gray-500 space-y-2">
              <p>🔒 Secure payment powered by Stripe</p>
              <p>⚡ Instant delivery after checkout</p>
              <p>💳 One-time payment — no subscription</p>
            </div>
          </div>

        </section>
      )}

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl mb-10">
          Loved by travelers worldwide
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Sophie L.",
              text: "This saved me HOURS. The itinerary was better than what I usually plan myself.",
            },
            {
              name: "James R.",
              text: "Felt like having a personal travel concierge. Worth way more than $9.",
            },
            {
              name: "Elena M.",
              text: "Discovered places I would have never found on my own.",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <p className="text-gray-300 mb-4">“{t.text}”</p>
              <p className="text-sm text-gray-500">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        {[
          ["⚡ Instant Planning", "No more hours of research"],
          ["💎 Luxury Experiences", "Curated premium itineraries"],
          ["📄 Smart Delivery", "Email + downloadable PDF"],
        ].map((f, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 p-6 rounded-2xl"
          >
            <h3 className="text-xl mb-2">{f[0]}</h3>
            <p className="text-gray-400">{f[1]}</p>
          </div>
        ))}
      </section>

      {/* FINAL CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl mb-4">
          Stop planning. Start traveling.
        </h2>

        <button
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
        >
          Start Planning ✈️
        </button>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 py-10 text-sm">
        © {new Date().getFullYear()} Voyanta
      </footer>
    </div>
  );
}