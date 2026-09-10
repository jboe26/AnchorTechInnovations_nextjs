export type PricingTier = {
  title: string;
  price: string;
  cadence: string;
  subtitle: string;
  description: string;
  features: string[];
};

export const tiers: PricingTier[] = [
  {
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

// Ongoing monthly support: AnchorCare, AnchorCare Plus, and Anchor Alliance.
// These are partnership levels, not a tier ladder — never framed as
// "includes [lower plan] features" the way the one-time tiers above are.
export type SupportPlan = {
  id: "anchorcare" | "anchorcare-plus" | "alliance";
  name: string;
  price: string;
  cadence: string;
  yearlyNote?: string;
  theme: "light" | "dark";
  tagline: string;
  description: string;
  // Rendered in the same position on every card so the work-hours
  // progression (none, then capped, then unlimited) is easy to compare.
  includedWork: string;
  features: string[];
};

export const supportPlans: SupportPlan[] = [
  {
    id: "anchorcare",
    name: "AnchorCare",
    price: "$49",
    cadence: "/mo",
    yearlyNote: "$429/year if billed annually",
    theme: "light",
    tagline: "For sites that just need to be kept running",
    description:
      "This is maintenance, not a project. Your site stays backed up, secure, and quickly fixed if something breaks, and small edits get handled as they come up.",
    includedWork: "Unlimited small edits, no dedicated project hours",
    features: [
      "Unlimited small edits (content, images, wording, tweaks)",
      "Monthly updates + backups",
      "Security + performance monitoring",
      "Priority response",
    ],
  },
  {
    id: "anchorcare-plus",
    name: "AnchorCare Plus",
    price: "$249",
    cadence: "/mo",
    theme: "light",
    tagline: "For sites that need a little forward motion each month",
    description:
      "Some months you just need the site looked after. Other months you need a new page, a seasonal update, or a change that has been sitting on your list. AnchorCare Plus covers the upkeep and gives you dedicated hours each month to actually get things done.",
    includedWork: "Up to 2 hours of updates or content changes each month",
    features: [
      "Everything in AnchorCare",
      "Quarterly strategy check-in",
      "Basic SEO upkeep",
      "Response within 2 business days",
      "Platform-flexible",
    ],
  },
  {
    id: "alliance",
    name: "Anchor Alliance",
    price: "$599",
    cadence: "/mo",
    theme: "dark",
    tagline: "For long-term partnership and ongoing support",
    description:
      "Your website isn't a one-time project. It's a living part of your business. Anchor Alliance is dedicated, ongoing support and strategy built to help your site grow as you grow.",
    includedWork: "Unlimited page updates and content changes",
    features: [
      "Dedicated support relationship",
      "Monthly strategy reviews",
      "Monthly maintenance, backups, and security monitoring",
      "Ongoing SEO improvements and competitor insights",
      "Client portal access for transparency",
      "Training materials and tech lessons",
      "Priority response to urgent issues",
      "Platform-flexible",
    ],
  },
];
