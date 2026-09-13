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
};
