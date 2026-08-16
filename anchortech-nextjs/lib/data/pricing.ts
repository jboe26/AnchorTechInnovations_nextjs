export type PricingTier = {
  variant: "tier" | "partnership";
  title: string;
  price: string;
  cadence: string;
  subtitle: string;
  description: string;
  features: string[];
};

export const tiers: PricingTier[] = [
  {
    variant: "tier",
    title: "Anchor Foundation",
    price: "$650",
    cadence: "one-time",
    subtitle: "For those getting started",
    description:
      "A clean, intentional website that gives you a solid, editable foundation online, built on the platform that fits you best.",
    features: [
      "Custom 3-page website",
      "Built for easy editing",
      "Starter SEO setup",
      "1-month support + training",
      "Platform-flexible (WordPress, Squarespace, Wix, Shopify)",
    ],
  },
  {
    variant: "tier",
    title: "Anchor Growth",
    price: "$1,350",
    cadence: "one-time",
    subtitle: "For those strengthening their identity",
    description:
      "A more complete online presence with refined structure, better flow, and tools that help you grow confidently.",
    features: [
      "Includes Anchor Foundation features",
      "Expanded 5-page website",
      "Branding + layout refinement",
      "Contact form + basic automations",
      "2-month support + training",
      "Platform-flexible",
    ],
  },
  {
    variant: "tier",
    title: "Anchor Elevate",
    price: "$2,995",
    cadence: "one-time",
    subtitle: "For those stepping into their full potential",
    description:
      "A fully customized website with strategic structure, marketing tools, and analytics to support real growth.",
    features: [
      "Includes Anchor Growth features",
      "Fully customized 8-10 page website",
      "Template system for long-term consistency",
      "Email marketing integration",
      "Analytics dashboard + insights",
      "4-month support included",
      "Platform-flexible",
    ],
  },
];

export const alliance: PricingTier = {
  variant: "partnership",
  title: "Anchor Alliance",
  price: "$599",
  cadence: "/mo",
  subtitle: "For long-term partnership and ongoing support",
  description:
    "Your website isn't a one-time project. It's a living part of your business. Anchor Alliance is dedicated, ongoing support and strategy built to help your site grow as you grow.",
  features: [
    "Dedicated support relationship",
    "Monthly strategy reviews",
    "Unlimited page updates and content changes",
    "Monthly maintenance, backups, and security monitoring",
    "Ongoing SEO improvements and competitor insights",
    "Client portal access for transparency",
    "Training materials and tech lessons",
    "Priority response to urgent issues",
    "Platform-flexible",
  ],
};

export type AnchorCarePlan = {
  name: string;
  price: string;
  features: string[];
};

export const anchorCare: AnchorCarePlan[] = [
  {
    name: "AnchorCare Monthly",
    price: "$49/mo",
    features: [
      "Unlimited small edits (content, images, wording, tweaks)",
      "Monthly updates + backups",
      "Security + performance monitoring",
      "Priority response",
    ],
  },
  {
    name: "AnchorCare Yearly",
    price: "$429/year",
    features: [
      "Unlimited small edits",
      "Full yearly maintenance + backups",
      "Performance + SEO tune-ups",
      "Minor fixes throughout the year",
      "Optional 30-minute strategy call",
    ],
  },
];
