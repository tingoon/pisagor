import { tv, type VariantProps } from "tailwind-variants";

export const skipNavRecipe = tv({
  slots: {
    content: "outline-hidden",
    link: [
      "focus:fixed focus:inset-s-4 focus:top-4 focus:z-9999",
      "focus:px-4 focus:py-2",
      "focus:bg-primary",
      "focus:text-primary-foreground focus:text-sm",
      "sr-only focus:not-sr-only",
      "focus:rounded-lg",
      "focus:outline-hidden focus:ring-2 focus:ring-ring",
    ],
  },
});

export type SkipNavVariantProps = VariantProps<typeof skipNavRecipe>;
export type SkipNavRecipe = ReturnType<typeof skipNavRecipe>;
export type SkipNavRecipeSlot = keyof SkipNavRecipe;
