import type { Metadata } from "next";
import { Montserrat, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://anchortech.org/#organization",
  name: "AnchorTech Innovations",
  url: "https://anchortech.org",
  logo: "https://anchortech.org/logo2.png",
  description:
    "Affordable web development and tech support for small businesses and organizations in the Charlotte area.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pineville",
    addressRegion: "NC",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "joshboepple@anchortech.org",
    areaServed: "Charlotte area",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AnchorTech Innovations",
  url: "https://anchortech.org",
  description:
    "Website design, tech support, and ongoing digital support for small businesses and organizations.",
  publisher: {
    "@id": "https://anchortech.org/#organization",
  },
};

export const metadata: Metadata = {
  title: "AnchorTech Innovations",
  description:
    "Affordable web development and tech support for small businesses and organizations in the Charlotte area.",
  verification: {
    google: "AxqYMeMe0yO5CUlVnu1RWmmqdPzxBrdv95Jm5dUMWmQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[var(--font-montserrat)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]),
          }}
        />
        <MotionProvider>
          <Navbar />
          {children}
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
