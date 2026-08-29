import { tv, type VariantProps } from "tailwind-variants";

export const chartRecipe = tv({
  slots: {
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
    indicator: ["shrink-0 rounded-[2px] border-border bg-(--color-bg)"],
    label: "font-medium",
    legend: ["flex items-center justify-center gap-4"],
    legendItem: [
      "flex items-center gap-1.5",
      "[&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground",
    ],
    swatch: ["size-2 shrink-0 rounded-[2px]"],
    tooltip: [
      "min-w-32",
      "grid items-start gap-1.5",
      "px-2.5 py-1.5",
      "bg-background",
      "text-xs",
      "rounded-lg border border-border/50 shadow-xl",
    ],
    tooltipItem: [
      "w-full",
      "flex flex-wrap items-stretch gap-2",
      "[&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
    ],
    tooltipLabel: "text-muted-foreground",
    tooltipRow: ["flex flex-1 justify-between leading-none"],
    tooltipStack: ["grid gap-1.5"],
    tooltipValue: ["font-medium font-mono text-foreground tabular-nums"],
  },
});

export type ChartVariantProps = VariantProps<typeof chartRecipe>;
export type ChartSlots = ReturnType<typeof chartRecipe>;
