import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { sendTopicRequestEmails } from "@/lib/email";

const RATE_LIMIT_WINDOW_MINUTES = 2;

export async function POST(request: NextRequest) {
  const { name, email, topic, location, website } = await request.json();

  // Honeypot, same pattern as the other forms.
  if (typeof website === "string" && website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof topic !== "string" ||
    typeof location !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !topic.trim() ||
    !location.trim() ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
  ) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
  const windowStart = new Date(
    Date.now() - RATE_LIMIT_WINDOW_MINUTES * 60 * 1000
  ).toISOString();

  const { data: recent } = await supabaseAdmin
    .from("topic_requests")
    .select("id")
    .eq("email", email.trim().toLowerCase())
    .gte("created_at", windowStart)
    .limit(1)
    .maybeSingle();

  if (recent) {
    return NextResponse.json(
      { error: "Please wait a moment before submitting again." },
      { status: 429 }
    );
  }

  const { error: insertError } = await supabaseAdmin.from("topic_requests").insert({
    name: name.trim(),
    email: email.trim().toLowerCase(),
    topic: topic.trim(),
    location: location.trim(),
    ip,
  });

  if (insertError) {
    return NextResponse.json({ error: "Failed to record request" }, { status: 500 });
  }

  try {
    await sendTopicRequestEmails({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      topic: topic.trim(),
      location: location.trim(),
    });
  } catch (err) {
    console.error("Failed to send topic request emails:", err);
  }

  return NextResponse.json({ ok: true });
}
