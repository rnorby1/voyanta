import OpenAI from "openai";

export async function POST(req: Request) {
  try {
    const { location, preferences, mode } = await req.json();

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY!,
    });

    const prompt = `
Create a ${mode || "luxury"} 3-day travel itinerary for ${location}.

Preferences: ${preferences || "general travel"}.

Return ONLY JSON in this exact format:
{
  "days": [
    [
      { "name": "Place name", "description": "Short description" }
    ],
    [
      { "name": "Place name", "description": "Short description" }
    ],
    [
      { "name": "Place name", "description": "Short description" }
    ]
  ]
}
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    const raw = completion.choices[0].message.content || "";

    // ✅ CLEAN MARKDOWN (```json ... ```)
    const cleaned = raw
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    let data;

    try {
      data = JSON.parse(cleaned);
    } catch (err) {
      console.error("JSON parse failed:", cleaned);

      data = {
        days: [
          [
            {
              name: "AI Response",
              description: cleaned.slice(0, 200),
            },
          ],
        ],
      };
    }

    return Response.json(data);

  } catch (error) {
    console.error("Generate API error:", error);

    return Response.json(
      { error: "Failed to generate itinerary" },
      { status: 500 }
    );
  }
}