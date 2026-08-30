import { tv, type VariantProps } from "tailwind-variants";

export const statRecipe = tv({
  defaultVariants: {
    variant: "outline",
  },
  slots: {
    base: [
      "group/stat",
      "flex w-full flex-col gap-1.5",
      "rounded-xl border p-4",
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
    trend: "neutral",
  },
  variants: {
    trend: {
      down: "bg-destructive/10 text-destructive dark:text-destructive-foreground",
      neutral: "bg-muted text-muted-foreground",
      up: "bg-success/12 text-success",
    },
  },
});

export type StatVariantProps = VariantProps<typeof statRecipe>;
export type StatRecipe = ReturnType<typeof statRecipe>;
export type StatRecipeSlot = keyof StatRecipe;

export type StatTrendVariantProps = VariantProps<typeof statTrendRecipe>;
export type StatTrendRecipe = ReturnType<typeof statTrendRecipe>;
export type StatTrendRecipeSlot = keyof StatTrendRecipe;
