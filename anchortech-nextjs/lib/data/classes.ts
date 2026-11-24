// Technology classes: the topic menu and the scheduled class list.
//
// Scheduled classes live here, edited by hand when a partner books one.
// Each entry becomes a card on /classes and a detail page at
// /classes/<slug> with its own register form. Registrations themselves
// are stored in Supabase (class_registrations), never in this file.

export type ClassTopic = {
  title: string;
  blurb: string;
  learn: string[];
};

export const classTopics: ClassTopic[] = [
  {
    title: "Your Phone, Made Simple",
    blurb:
      "The everyday things your phone can do that nobody showed you: settings, apps, photos, messages, and making it behave the way you want.",
    learn: [
      "The settings that matter, in plain language",
      "Sending photos and messages without the struggle",
      "Making text bigger and your phone easier to read",
    ],
  },
  {
    title: "Staying Safe Online",
    blurb:
      "Learn to spot scams before they cost you: fake emails and texts, phone scams, strong passwords, and what to do when something looks off. No experience needed.",
    learn: [
      "The 5 signs of a scam message",
      "Passwords that actually protect you",
      "What to do if you already clicked",
    ],
  },
  {
    title: "Everyday AI Tips and Tricks",
    blurb:
      "What AI tools like ChatGPT actually do, shown on real everyday tasks: writing a letter, planning a trip, understanding a bill, and asking better questions.",
    learn: [
      "What AI is good at, and what to never trust it with",
      "Asking questions that get useful answers",
      "Trying it yourself, guided, on your own phone",
    ],
  },
  {
    title: "How Websites Work: A First Look at Coding",
    blurb:
      "A friendly first look behind the screen: what a website is made of, how the pages you visit every day are built, and a small taste of writing real code yourself.",
    learn: [
      "The three building blocks of every web page",
      "How a site gets from a computer to your phone",
      "Writing your first lines of HTML, guided",
    ],
  },
];

export type ScheduledClass = {
  slug: string;
  title: string;
  description: string;
  learn: string[];
  venue: string;
  room?: string;
  address: string;
  // ISO date (YYYY-MM-DD) plus display labels, so nothing formats wrong.
  dateISO: string;
  dateLabel: string;
  timeLabel: string;
  capacity: number;
};

// Booked classes, soonest first. Empty until the first partner schedules.
export const scheduledClasses: ScheduledClass[] = [
  {
    slug: "test-phone-class",
    title: "TEST: Your Phone, Made Simple",
    description:
      "Test listing only, used to check the registration flow. Not a real session.",
    learn: [
      "The settings that matter, in plain language",
      "Sending photos and messages without the struggle",
      "Making text bigger and your phone easier to read",
    ],
    venue: "Belle Johnston Community Center",
    address: "1000 Johnston Drive, Pineville, NC 28134",
    dateISO: "2026-12-14",
    dateLabel: "Monday, December 14, 2026 (test date)",
    timeLabel: "10:00 AM, one hour",
    capacity: 20,
  },
];

export function getScheduledClass(slug: string) {
  return scheduledClasses.find((c) => c.slug === slug);
}

export function directionsUrl(c: ScheduledClass) {
  const q = encodeURIComponent(`${c.venue}, ${c.address}`);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

// The one Stripe payment link used for every paid class registration.
// Created once in Stripe; the register API adds the registrant's email
// and registration id to it per signup.
export const CLASS_PRICE_LABEL = "$15";
