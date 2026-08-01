import {
  Building2,
  Flower2,
  PartyPopper,
  type LucideIcon,
} from "lucide-react";

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
    icon: Flower2,
  },
  {
    to: "/event-management",
    label: "Private Events",
    description: "Birthdays & celebrations",
    icon: PartyPopper,
  },
  {
    to: "/corporate-events",
    label: "Corporate",
    description: "Brand launches & galas",
    icon: Building2,
  },
] as const;

export const utilityLinks = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/booking", label: "Plan My Event" },
  { to: "/contact", label: "Contact" },
] as const;
