import type { ReactNode } from "react";
import { Label } from "@/components/ui/label";

interface FieldProps {
  label: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
}

export function Field({ label, error, required, className = "", children }: FieldProps) {
  return (
    <div className={className}>
      <Label className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </Label>
      <div className="mt-2">{children}</div>
      {error && <p className="mt-1.5 text-sm text-destructive">{error}</p>}
    </div>
  );
}
