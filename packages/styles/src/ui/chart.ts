import { tv } from "tailwind-variants";

export const chartVariants = tv({
  base: [
    "flex justify-center",
    "aspect-video",
    "text-xs",
    "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground",
    "[&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50",
    "[&_.recharts-curve.recharts-tooltip-cursor]:stroke-border",
    "[&_.recharts-dot[stroke='#fff']]:stroke-transparent",
    "[&_.recharts-layer]:outline-hidden",
    "[&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border",
    "[&_.recharts-radial-bar-background-sector]:fill-muted",
    "[&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted",
  ],
});

export const chartInlineVariants = tv({
  base: "font-medium",
});

export const chartInline2Variants = tv({
  base: "font-medium",
});

export const chartInline3Variants = tv({
  base: [
    "min-w-32",
    "grid items-start gap-1.5",
    "px-2.5 py-1.5",
    "bg-background",
    "text-xs",
    "rounded-lg border border-border/50 shadow-xl",
  ],
});

export const chartInline4Variants = tv({
  base: [
    "w-full",
    "flex flex-wrap items-stretch gap-2",
    "[&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
  ],
});

export const chartInline5Variants = tv({
  base: ["shrink-0 rounded-[2px] border-border bg-(--color-bg)"],
});

export const chartInline6Variants = tv({
  base: ["flex flex-1 justify-between leading-none"],
});

export const chartInline7Variants = tv({
  base: ["flex items-center justify-center gap-4"],
});

export const chartInline8Variants = tv({
  base: ["flex items-center gap-1.5", "[&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"],
});

export const chartInline9Variants = tv({
  base: ["grid gap-1.5"],
});

export const chartInline10Variants = tv({
  base: ["grid gap-1.5"],
});

export const chartInline11Variants = tv({
  base: "text-muted-foreground",
});

export const chartInline12Variants = tv({
  base: ["font-medium font-mono text-foreground tabular-nums"],
});

export const chartInline13Variants = tv({
  base: ["size-2 shrink-0 rounded-[2px]"],
});
