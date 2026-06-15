export interface PackageTier {
  name: string;
  tagline: string;
  bestFor: string;
  includes: string[];
  featured?: boolean;
}

export const packages: PackageTier[] = [
  {
    name: "Essential Styling",
    tagline: "A considered foundation for smaller, intimate gatherings.",
    bestFor: "Intimate birthdays, baby showers, dinner parties",
    includes: [
      "Initial styling consultation",
      "One signature focal piece (backdrop or balloon installation)",
      "Coordinated table styling for one feature table",
      "Setup and pack-down on the day",
    ],
  },
  {
    name: "Signature Celebration",
    tagline: "Our most-requested tier for fully styled celebrations.",
    bestFor: "Engagements, milestone birthdays, mid-size weddings",
    featured: true,
    includes: [
      "Full styling consultation and mood board",
      "Custom backdrop and statement balloon installation",
      "Full guest-table styling with linens, florals & candlelight",
      "Entrance styling and signage",
      "On-site styling team for setup & breakdown",
    ],
  },
  {
    name: "Regal Full Styling",
    tagline: "End-to-end art direction for landmark events.",
    bestFor: "Weddings, large private events, bespoke themed celebrations",
    includes: [
      "Concept development & full creative direction",
      "Bespoke installations, florals, and lighting design",
      "Complete reception, ceremony, and lounge styling",
      "Entrance, stage, and focal-point design",
      "Dedicated lead stylist & full styling team on the day",
    ],
  },
];
