import type { LucideIcon } from "lucide-react";

interface ServiceNavIconProps {
  icon: LucideIcon;
  className?: string;
  iconClassName?: string;
}

/** Shared gold badge used in desktop Services dropdown + mobile menu */
export function ServiceNavIcon({
  icon: Icon,
  className = "",
  iconClassName = "",
}: ServiceNavIconProps) {
  return (
    <span
      className={`relative grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-gold text-midnight shadow-soft ${className}`}
    >
      <Icon
        className={`h-5 w-5 ${iconClassName}`}
        strokeWidth={1.75}
        absoluteStrokeWidth
        aria-hidden
      />
    </span>
  );
}
