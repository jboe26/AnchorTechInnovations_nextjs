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
