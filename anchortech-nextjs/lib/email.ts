import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendDeliveryEmail({
  to,
  productName,
  version,
  downloadUrl,
}: {
  to: string;
  productName: string;
  version: string;
  downloadUrl: string;
}) {
  await resend.emails.send({
    from: "Josh Boepple <products@anchortech.org>",
    to,
    subject: `Your download: ${productName}`,
    text: `Thanks for picking up ${productName}.

Download it here: ${downloadUrl}

Version: ${version}

This link doesn't expire, so keep this email and come back to it whenever you need to redownload.

Not what you needed? Email me at joshboepple@anchortech.org within 14 days and I'll refund it, no questions asked.

Josh Boepple
AnchorTech Innovations`,
  });
}

export async function sendPricingInquiryEmails({
  name,
  email,
  planName,
  priceLabel,
}: {
  name: string;
  email: string;
  planName: string;
  priceLabel: string;
}) {
  await resend.emails.send({
    from: "AnchorTech Innovations <pricing@anchortech.org>",
    to: "joshboepple@anchortech.org",
    replyTo: email,
    subject: `New pricing inquiry: ${planName}`,
    text: `New inquiry from the pricing page.

Package: ${planName} (${priceLabel})
Name: ${name}
Email: ${email}

Reply directly to this email to respond to them.`,
  });

  await resend.emails.send({
    from: "Josh Boepple <joshboepple@anchortech.org>",
    to: email,
    subject: "Got your message — AnchorTech Innovations",
    text: `Hi ${name},

Thanks for reaching out about ${planName}. I got your message and will follow up within 1 business day with next steps and a clear quote before any work begins.

If anything's urgent in the meantime, you can reach me directly at joshboepple@anchortech.org.

Josh Boepple
AnchorTech Innovations`,
  });
}

export async function sendClassConfirmationEmail({
  to,
  name,
  classTitle,
  dateLabel,
  timeLabel,
  venue,
  room,
  address,
  directions,
  paid,
}: {
  to: string;
  name: string;
  classTitle: string;
  dateLabel: string;
  timeLabel: string;
  venue: string;
  room?: string;
  address: string;
  directions: string;
  paid: boolean;
}) {
  const where = `${venue}${room ? `, ${room}` : ""}\n${address}`;
  const moneyLine = paid
    ? "Payment received: $15. Stripe emailed your receipt separately."
    : "This class is free for you. Nothing to pay.";
  await resend.emails.send({
    from: "Josh Boepple <joshboepple@anchortech.org>",
    to,
    subject: `You are registered: ${classTitle}, ${dateLabel}`,
    text: `You are registered for this class. Your seat is saved.

${classTitle}
${dateLabel} · ${timeLabel}
${where}
Directions: ${directions}

${moneyLine}

What to bring: your phone or tablet, and any questions you have been saving up.

Plans change? Just reply to this email and I will take care of it.

Josh Boepple · AnchorTech Innovations
joshboepple@anchortech.org · (803) 331-0716 · anchortech.org/classes`,
  });

  await resend.emails.send({
    from: "AnchorTech Innovations <joshboepple@anchortech.org>",
    to: "joshboepple@anchortech.org",
    replyTo: to,
    subject: `Class registration: ${classTitle} (${paid ? "paid" : "free"})`,
    text: `New registration for ${classTitle} on ${dateLabel} at ${venue}.

Name: ${name}
Email: ${to}
Type: ${paid ? "Paid ($15 via Stripe)" : "Free first class"}`,
  });
}

export async function sendTopicRequestEmails({
  name,
  email,
  topic,
  location,
}: {
  name: string;
  email: string;
  topic: string;
  location: string;
}) {
  await resend.emails.send({
    from: "AnchorTech Innovations <joshboepple@anchortech.org>",
    to: "joshboepple@anchortech.org",
    replyTo: email,
    subject: `Class topic request: ${topic}`,
    text: `New topic request from the classes page.

Name: ${name}
Email: ${email}
Topic: ${topic}
Town or center: ${location}`,
  });

  await resend.emails.send({
    from: "Josh Boepple <joshboepple@anchortech.org>",
    to: email,
    subject: "Got your topic request — AnchorTech Innovations",
    text: `Thanks for the suggestion. I read every request myself, and when enough people in one place ask for the same topic, that becomes the next class scheduled there.

Your request: ${topic}

New class dates are posted at anchortech.org/classes as they are scheduled.

Josh Boepple
AnchorTech Innovations`,
  });
}
