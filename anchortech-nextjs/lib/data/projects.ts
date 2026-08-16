export type Project = {
  name: string;
  description: string;
  href?: string;
  status?: string;
};

export const projects: Project[] = [
  {
    name: "Speech Innovation NC",
    description:
      "Full site and brand package for a bilingual speech therapy practice, from logo to launch.",
    href: "https://speechinnovationnc.org/",
  },
  {
    name: "Mickey Herring Taxidermy",
    description:
      "Rebuilt on Next.js and Tailwind. He's now the top-ranked taxidermist in his area.",
    href: "https://www.mickeyherringtaxidermy.org/",
  },
  {
    name: "Foundry & Fur",
    description:
      "A custom Wix storefront for a pet-inspired keepsake brand, structured by category and linked to the maker's Etsy shop.",
    href: "https://www.foundryandfur.com/",
  },
  {
    name: "Branches",
    description:
      "A prayer app for small groups, so requests get followed up instead of lost in a group chat.",
    status: "coming soon to the App Store",
  },
];
