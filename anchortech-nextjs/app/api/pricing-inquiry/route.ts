import { NextRequest, NextResponse } from "next/server";
import { sendPricingInquiryEmails } from "@/lib/email";

export async function POST(request: NextRequest) {
  const { name, email, planName, priceLabel } = await request.json();

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof planName !== "string" ||
    typeof priceLabel !== "string" ||
    !name.trim() ||
    !email.trim()
  ) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    await sendPricingInquiryEmails({ name, email, planName, priceLabel });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
