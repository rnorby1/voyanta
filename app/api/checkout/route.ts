import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  try {
    const { location, preferences, mode, email } = await req.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",

      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `Voyanta ${mode || "Premium"} Plan`,
              description: `Custom itinerary for ${location}`,
            },
            unit_amount: 900, // $9
          },
          quantity: 1,
        },
      ],

      customer_email: email || undefined,

      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}?canceled=true`,
    });

    return Response.json({ url: session.url });

  } catch (err) {
    console.error(err);
    return Response.json({ error: "Stripe failed" }, { status: 500 });
  }
}