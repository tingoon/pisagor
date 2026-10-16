import { tv, type VariantProps } from "tailwind-variants";

export const statusRecipe = tv({
  base: [
    "shrink-0 rounded-full",
    "flex items-center justify-center",
    "text-xs font-medium",
    "ring-background ring-2",
  ],
  defaultVariants: {
    /** Control size. */
    size: "md",
    /** Visual emphasis. */
    variant: "default",
  },
  variants: {
    size: {
      lg: "size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-2.5",
      md: "size-2.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-2",
      sm: "size-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-1.5",
    },
    variant: {
      default: "bg-foreground text-background",
      destructive: "bg-destructive text-destructive-foreground",
      info: "bg-info text-info-foreground",
      success: "bg-success text-success-foreground",
      warning: "bg-warning text-warning-foreground",
    },
  },
});

export type StatusRecipeFn = typeof statusRecipe;
export type StatusVariantProps = VariantProps<StatusRecipeFn>;
export type StatusRecipe = ReturnType<StatusRecipeFn>;
export type StatusRecipeSlot = keyof StatusRecipe;
