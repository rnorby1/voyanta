import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, plan, location } = await req.json();

    await resend.emails.send({
      from: "Voyanta <onboarding@resend.dev>",
      to: email,
      subject: `Your ${location} Itinerary ✈️`,
      html: `
        <h1>Your Luxury Trip Plan</h1>
        <p>Destination: ${location}</p>
        <pre>${JSON.stringify(plan, null, 2)}</pre>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    return Response.json({ error: "Email failed" }, { status: 500 });
  }
}