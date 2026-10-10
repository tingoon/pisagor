import { tv, type VariantProps } from "tailwind-variants";

export const statRecipe = tv({
  defaultVariants: {
    /**
     * Visual emphasis.
     */
    variant: "outline",
  },
  slots: {
    base: [
      "group/stat",
      "flex w-full flex-col gap-1.5",
      "rounded-2xl border border-border/50 p-4",
      "bg-card text-card-foreground",
      "shadow-xs/5",
    ],
    description: ["text-muted-foreground text-sm"],
    label: ["text-muted-foreground text-sm"],
    value: ["font-semibold text-2xl leading-none tracking-tight"],
  },
  variants: {
    variant: {
      default: {
        base: "border-transparent bg-transparent p-0 shadow-none",
      },
      muted: {
        base: "border-transparent bg-muted/48",
      },
      outline: {
        base: "border-border bg-card",
      },
    },
  },
});

export const statTrendRecipe = tv({
  base: [
    "inline-flex w-fit items-center gap-1 rounded-md px-2 py-0.5",
    "font-medium text-xs",
    "[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  defaultVariants: {
    /**
     * Trend.
     */
    trend: "neutral",
  },
  variants: {
    trend: {
      down: "bg-destructive/10 text-destructive",
      neutral: "bg-muted text-muted-foreground",
      up: "bg-success/12 text-success",
    },
  },
});

export type StatRecipeFn = typeof statRecipe;
export type StatVariantProps = VariantProps<StatRecipeFn>;
export type StatRecipe = ReturnType<StatRecipeFn>;
export type StatRecipeSlot = keyof StatRecipe;

export type StatTrendRecipeFn = typeof statTrendRecipe;
export type StatTrendVariantProps = VariantProps<StatTrendRecipeFn>;
export type StatTrendRecipe = ReturnType<StatTrendRecipeFn>;
export type StatTrendRecipeSlot = keyof StatTrendRecipe;
