import Link from "next/link";

export const metadata = {
  title: "3 Day Paris Itinerary (2026) — Luxury Travel Guide | Voyanta",
  description:
    "Plan the perfect 3 day Paris itinerary with AI. Luxury experiences, hidden gems, and a complete travel plan in seconds.",
};

export default function ParisItinerary() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 40 }}>
      <h1>3 Day Paris Itinerary (Luxury Travel Guide)</h1>

      <p>
        Planning a trip to Paris? This 3 day Paris itinerary gives you the perfect mix of iconic landmarks, luxury experiences, and hidden gems.
      </p>

      <h2>Day 1: Iconic Paris</h2>
      <ul>
        <li>Eiffel Tower (morning visit)</li>
        <li>Seine River Cruise</li>
        <li>Champs-Élysées walk</li>
        <li>Arc de Triomphe sunset</li>
      </ul>

      <h2>Day 2: Culture & Art</h2>
      <ul>
        <li>Louvre Museum</li>
        <li>Lunch in Saint-Germain</li>
        <li>Montmartre exploration</li>
        <li>Sacré-Cœur views</li>
      </ul>

      <h2>Day 3: Hidden Gems & Luxury</h2>
      <ul>
        <li>Le Marais district</li>
        <li>Luxury shopping</li>
        <li>Versailles day trip</li>
      </ul>

      <h2>✨ Want a Personalized Itinerary?</h2>
      <p>
        This is just a sample. Voyanta creates a fully customized luxury itinerary based on your travel style, budget, and preferences.
      </p>

      <Link href="/">
        <button style={{ padding: 15, fontSize: 18 }}>
          Generate Your AI Travel Plan ✈️
        </button>
      </Link>
    </div>
  );
}