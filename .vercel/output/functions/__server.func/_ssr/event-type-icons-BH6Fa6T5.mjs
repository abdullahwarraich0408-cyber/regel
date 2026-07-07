import { M as Briefcase, N as Baby, a as Star, b as Frame, d as PartyPopper, i as Utensils, j as Cake, k as Calendar, o as Sparkles, r as WandSparkles, v as Heart, x as Flower2 } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/event-type-icons-BH6Fa6T5.js
var iconMap = {
	heart: Heart,
	cake: Cake,
	baby: Baby,
	"party-popper": PartyPopper,
	briefcase: Briefcase,
	"wand-2": WandSparkles,
	sparkles: Sparkles,
	calendar: Calendar,
	star: Star,
	"flower-2": Flower2,
	frame: Frame,
	utensils: Utensils
};
function getEventTypeIcon(iconName) {
	return iconMap[iconName] ?? Sparkles;
}
//#endregion
export { getEventTypeIcon as t };
