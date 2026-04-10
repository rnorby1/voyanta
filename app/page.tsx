"use client";

import { useState } from "react";

export default function Voyanta() {
  const [location, setLocation] = useState("");
  const [preferences, setPreferences] = useState("");
  const [email, setEmail] = useState("");
  const [preview, setPreview] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // ✈️ Generate Trip
  const generateTrip = async () => {
    setLoading(true);
    setPreview([]);

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ location, preferences, mode: "luxury" }),
    });

    const data = await res.json();
    setPreview(data.days?.[0] || []);
    setLoading(false);
  };

  // 💳 UPDATED CHECKOUT (SAVES DATA FOR EMAIL)
  const handleCheckout = async () => {
    // Save everything needed for success page + email
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
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        location,
        preferences,
        email,
        mode: "luxury",
      }),
    });

    const data = await res.json();
    window.location.href = data.url;
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">

      {/* HERO */}
      <div
        className="h-[90vh] flex flex-col justify-center items-center text-center px-6"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1493558103817-58b2924bce98)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black/70 p-10 rounded-3xl backdrop-blur-xl border border-white/10 max-w-xl w-full">

          <h1 className="text-6xl font-serif mb-4 tracking-wide">
            Voyanta
          </h1>

          <p className="text-gray-300 mb-6 text-lg">
            Luxury travel planning — powered by AI, refined like a concierge.
          </p>

          <div className="flex flex-col gap-3">
            <input
              placeholder="Where do you want to go?"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="p-3 rounded bg-white/10 border border-white/20"
            />

            <input
              placeholder="Email (receive your itinerary)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 rounded bg-white/10 border border-white/20"
            />

            <textarea
              placeholder="Preferences (luxury hotels, food, adventure...)"
              value={preferences}
              onChange={(e) => setPreferences(e.target.value)}
              className="p-3 rounded bg-white/10 border border-white/20"
            />

            <button
              onClick={generateTrip}
              className="bg-white text-black py-3 rounded-lg font-semibold hover:opacity-90"
            >
              Design My Luxury Trip ✨
            </button>

            {loading && (
              <p className="text-sm text-gray-400">
                Crafting your experience...
              </p>
            )}
          </div>
        </div>
      </div>

      {/* PREVIEW */}
      {preview.length > 0 && (
        <div className="max-w-4xl mx-auto px-6 py-10">

          <h2 className="text-3xl mb-6 text-center">
            Your Personalized Experience
          </h2>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
            {preview.map((item, i) => (
              <div
                key={i}
                className={`mb-5 ${i >= 2 ? "blur-sm opacity-50" : ""}`}
              >
                <p className="text-xl font-semibold">{item.name}</p>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>

          {/* HOTEL SECTION */}
          <div className="mt-10">
            <h3 className="text-xl mb-4">Recommended Luxury Stays</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["Luxury Hotel", "Boutique Stay", "5-Star Resort"].map(
                (hotel, i) => (
                  <div
                    key={i}
                    className="bg-white/5 p-4 rounded-xl border border-white/10"
                  >
                    <p className="font-semibold">{hotel}</p>
                    <p className="text-gray-400 text-sm mb-2">
                      Top-rated stay in {location}
                    </p>

                    <a
                      href={`https://www.booking.com/searchresults.html?ss=${location}`}
                      target="_blank"
                      className="text-sm underline"
                    >
                      View Deal →
                    </a>
                  </div>
                )
              )}
            </div>
          </div>

          {/* PAYWALL */}
          <div className="text-center mt-10">
            <p className="text-gray-400 mb-2">
              Unlock your full concierge itinerary
            </p>

            <p className="text-sm text-gray-500 mb-4">
              Includes full 3-day plan, hidden gems, hotel picks & PDF export
            </p>

            <button
              onClick={handleCheckout}
              className="bg-white text-black px-8 py-4 rounded-xl text-lg font-semibold hover:opacity-90"
            >
              Unlock Full Plan ($9)
            </button>
          </div>

        </div>
      )}
    </div>
  );
}