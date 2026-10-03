import { tv } from "tailwind-variants";

export const passwordStrengthBlock = tv({
  defaultVariants: {
    met: false,
    tone: "idle",
  },
  slots: {
    control: "relative",
    count: "text-muted-foreground text-xs",
    field: "flex flex-col gap-1.5",
    input: [
      "h-8 w-full rounded-lg border border-input bg-transparent px-3 pe-9 text-sm shadow-xs/5",
      "outline-hidden focus-visible:border-primary focus-visible:ring-0.75 focus-visible:ring-ring/32",
    ],
    item: "flex items-center gap-1.5",
    label: "font-medium text-sm",
    list: "space-y-1.5",
    meter: "mt-3 mb-4 flex gap-1",
    metIcon: "size-3.5 text-emerald-500",
    requirement: "text-xs transition-colors",
    root: "w-full",
    rootNarrow: "w-full max-w-xs",
    segment: "h-1 flex-1 rounded-full transition-colors duration-500",
    srOnly: "sr-only",
    summary: "mb-3 flex items-center justify-between",
    summaryLabel: "font-medium text-foreground text-sm",
    toggle: [
      "absolute inset-y-0 inset-e-0 flex items-center px-2.5 text-muted-foreground",
      "hover:text-foreground",
    ],
    toggleIcon: "size-4",
    unmetIcon: "size-3.5 text-muted-foreground/60",
  },
  variants: {
    met: {
      false: {
        requirement: "text-muted-foreground",
      },
      true: {
        requirement: "text-emerald-600",
      },
    },
    tone: {
      amber: { segment: "bg-amber-500" },
      emerald: { segment: "bg-emerald-500" },
      green: { segment: "bg-green-500" },
      idle: { segment: "bg-border" },
      orange: { segment: "bg-orange-500" },
      red: { segment: "bg-red-500" },
    },
  },
});

/** Active meter color for a met-requirement count. Idle segments stay `tone: "idle"`. */
export function passwordStrengthTone(score: number) {
  if (score <= 1) return "red" as const;
  if (score <= 2) return "orange" as const;
  if (score <= 3) return "amber" as const;
  if (score <= 4) return "green" as const;
  return "emerald" as const;
}
