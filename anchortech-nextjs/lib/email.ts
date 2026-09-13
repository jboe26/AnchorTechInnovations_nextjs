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
