import { Briefcase, Cake, Heart, type LucideIcon } from "lucide-react";

export const serviceLinks: readonly {
  to: "/wedding-planning" | "/event-management" | "/corporate-events";
  label: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    to: "/wedding-planning",
    label: "Weddings",
    description: "Ceremony & reception styling",
    icon: Heart,
  },
  {
    to: "/event-management",
    label: "Private Events",
    description: "Birthdays & celebrations",
    icon: Cake,
  },
  {
    to: "/corporate-events",
    label: "Corporate",
    description: "Brand launches & galas",
    icon: Briefcase,
  },
] as const;

export const utilityLinks = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/booking", label: "Plan My Event" },
  { to: "/contact", label: "Contact" },
] as const;
