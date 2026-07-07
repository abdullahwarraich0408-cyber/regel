import type { LucideIcon } from "lucide-react";
import {
  Baby,
  Briefcase,
  Cake,
  Calendar,
  Flower2,
  Frame,
  Heart,
  PartyPopper,
  Sparkles,
  Star,
  Utensils,
  Wand2,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  heart: Heart,
  cake: Cake,
  baby: Baby,
  "party-popper": PartyPopper,
  briefcase: Briefcase,
  "wand-2": Wand2,
  sparkles: Sparkles,
  calendar: Calendar,
  star: Star,
  "flower-2": Flower2,
  frame: Frame,
  utensils: Utensils,
};

export function getEventTypeIcon(iconName: string): LucideIcon {
  return iconMap[iconName] ?? Sparkles;
}
