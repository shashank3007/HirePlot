import { z } from "zod";
import { Resend } from "resend";

const schema = z.object({
  email: z.string().email(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = schema.parse(body);

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "HirePilot <onboarding@resend.dev>",
      to: [email],
      subject: "You're on the list — HirePilot",
      html: `
        <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:40px 24px;background:#141413;color:#faf9f5;">
          <h1 style="font-size:28px;font-weight:900;margin-bottom:16px;color:#faf9f5;">
            You're in. 🎉
          </h1>
          <p style="font-size:16px;line-height:1.7;color:#b0aea5;margin-bottom:24px;">
            We'll reach out within 48 hours to get your first role set up — no credit card, no commitment.
          </p>
          <p style="font-size:14px;color:#b0aea5;">
            — The HirePilot team
          </p>
        </div>
      `,
    });

    // Also notify founder
    if (process.env.NOTIFY_EMAIL) {
      await resend.emails.send({
        from: "HirePilot <onboarding@resend.dev>",
        to: [process.env.NOTIFY_EMAIL],
        subject: `New waitlist signup: ${email}`,
        html: `<p>New signup: <strong>${email}</strong></p>`,
      });
    }

    return Response.json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return Response.json({ error: "Invalid email address" }, { status: 400 });
    }
    console.error("Waitlist error:", err);
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
