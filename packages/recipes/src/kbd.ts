import { tv, type VariantProps } from "tailwind-variants";

export const kbdRecipe = tv({
  base: [
    "h-5 min-w-5",
    "px-1",
    "inline-flex items-center justify-center gap-1",
    "select-none font-medium font-sans text-foreground text-xs",
    "rounded-xs border border-transparent",
    "pointer-events-none",
    "in-[[data-scope=tooltip][data-part=content]]:bg-background/20 in-[[data-scope=tooltip][data-part=content]]:text-background",
    "[&_svg:not([class*='size-'])]:size-3",
  ],
  defaultVariants: {
    /**
     * Visual emphasis.
     */
    variant: "default",
  },
  variants: {
    variant: {
      default: "bg-muted",
      outline: "border border-border",
    },
  },
});

export const kbdGroupRecipe = tv({
  base: ["inline-flex items-center gap-1"],
});

export type KbdRecipeFn = typeof kbdRecipe;
export type KbdVariantProps = VariantProps<KbdRecipeFn>;
export type KbdRecipe = ReturnType<KbdRecipeFn>;
export type KbdRecipeSlot = keyof KbdRecipe;

export type KbdGroupRecipeFn = typeof kbdGroupRecipe;
export type KbdGroupRecipe = ReturnType<KbdGroupRecipeFn>;
export type KbdGroupRecipeSlot = keyof KbdGroupRecipe;
