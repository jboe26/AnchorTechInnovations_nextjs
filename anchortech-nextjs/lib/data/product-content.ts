// Marketing copy for each product, keyed by slug. Kept separate from the
// Product database row because this is presentational content, not
// transactional data -- nothing here affects price, delivery, or checkout.

export type ProductContent = {
  slug: string;
  tagline: string;
  includes: string[];
  whoItsFor: string[];
  refundPolicy: string;
};

export const productContent: Record<string, ProductContent> = {
  "schema-markup-reference-library": {
    slug: "schema-markup-reference-library",
    tagline:
      "An interactive tool that builds your schema markup, backed by real templates for when you'd rather edit by hand.",
    includes: [
      "An offline, interactive schema builder tool: fill in the business details once, tick every schema type a page needs, and it generates one linked JSON-LD block ready to paste in",
      "20 ready-to-edit JSON-LD templates (Article, Product, LocalBusiness, FAQPage, HowTo, Review, Organization, BreadcrumbList, Event, JobPosting, and more)",
      "A validation checklist for catching the mistakes that pass a quick glance but fail in practice",
      "A one-page cheat sheet mapping page type to schema type",
    ],
    whoItsFor: [
      "Freelance web developers who need structured data done correctly without re-reading schema.org docs on every project",
      "SEO contractors adding schema to client sites who want a tool instead of a rebuild",
      "Anyone who bills by the project and wants schema markup to stop eating an afternoon",
    ],
    refundPolicy:
      "Not what you needed? Email me within 14 days of purchase and I'll refund it, no questions asked.",
  },

  "digital-declutter-kit": {
    slug: "digital-declutter-kit",
    tagline: "A guided system for cleaning up your devices without the overwhelm.",
    includes: [
      "A digital audit worksheet to see exactly what's taking up space and slowing you down",
      "Phase-by-phase checklists covering your phone, computer, cloud storage, email, and daily habits",
      "A before-and-after snapshot to track your progress",
      "A phase completion log to stay accountable",
      "A curated list of tools and settings to support the reset",
    ],
    whoItsFor: [
      "Anyone who feels digitally overloaded and doesn't know where to start",
      "Minimalists and productivity-focused people ready for a clean slate",
      "Students, professionals, creators, and busy parents",
    ],
    refundPolicy:
      "Not what you needed? Email me within 14 days of purchase and I'll refund it, no questions asked.",
  },

  "password-account-cleanup-checklist": {
    slug: "password-account-cleanup-checklist",
    tagline: "Find every account you've forgotten about, then keep it from getting messy again.",
    includes: [
      "An account discovery process for finding logins you've long forgotten",
      "An editable account tracker template",
      "A five-phase cleanup plan with time estimates for each step",
      "A red-flags checklist for spotting weak security before it's a problem",
      "Maintenance habits for staying on top of it long term",
    ],
    whoItsFor: [
      "Anyone with 100+ online accounts and no idea what half of them are",
      "People who've reused the same password more times than they'd like to admit",
      "Anyone who wants a real system instead of a one-time cleanup",
    ],
    refundPolicy:
      "Not what you needed? Email me within 14 days of purchase and I'll refund it, no questions asked.",
  },

  "ai-resume-cover-letter-prompts-kit": {
    slug: "ai-resume-cover-letter-prompts-kit",
    tagline: "40 prompts built around real job search situations, not generic advice.",
    includes: [
      "12 resume prompts for rewriting bullets, career changes, and tightening summaries",
      "10 cover letter prompts for openings, tailoring to a posting, and cutting length",
      "10 interview prep prompts, including mock interviews and salary conversations",
      "8 LinkedIn and networking prompts for headlines, posts, and outreach messages",
    ],
    whoItsFor: [
      "Job seekers who use AI tools but keep getting generic, unusable output",
      "Anyone changing careers who needs to reframe their experience honestly",
      "Freelancers and professionals prepping for interviews or building their LinkedIn presence",
    ],
    refundPolicy:
      "Not what you needed? Email me within 14 days of purchase and I'll refund it, no questions asked.",
  },

  "brand-style-guide-template": {
    slug: "brand-style-guide-template",
    tagline: "A complete visual identity system so your business looks consistent everywhere.",
    includes: [
      "9 fully structured sections: overview, color palette, typography, logo usage, voice and tone, imagery, target audience, asset checklist, and how to use the kit",
      "A color palette table with a starter structure, ready for your own hex codes",
      "Typography examples with space for your heading, body, and accent fonts",
      "A brand assets checklist to track what exists and what's still needed",
    ],
    whoItsFor: [
      "Small business owners ready to look more professional",
      "Freelancers and creatives building a personal brand",
      "Anyone starting a business who wants structure without hiring a designer",
    ],
    refundPolicy:
      "Not what you needed? Email me within 14 days of purchase and I'll refund it, no questions asked.",
  },

  "freelancer-client-onboarding-kit": {
    slug: "freelancer-client-onboarding-kit",
    tagline: "A repeatable system for the first two weeks with a new client.",
    includes: [
      "A day-by-day onboarding timeline from contract signed through the first status update",
      "A welcome email template ready to send the moment a contract is signed",
      "An 8-question client intake form",
      "A timed, 5-part kickoff call agenda",
      "A project scope confirmation email template",
      "A weekly status update template",
    ],
    whoItsFor: [
      "Freelancers who either overwhelm new clients or leave them guessing what happens next",
      "Anyone who wants client onboarding to stop being improvised every time",
      "Freelancers who bill by the project and want the first two weeks to run themselves",
    ],
    refundPolicy:
      "Not what you needed? Email me within 14 days of purchase and I'll refund it, no questions asked.",
  },
};
