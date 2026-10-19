import { tv, type VariantProps } from "tailwind-variants";

export const kbdRecipe = tv({
  base: [
    "h-5 min-w-5",
    "px-1",
    "inline-flex items-center justify-center gap-1",
    "text-foreground font-sans text-xs font-medium select-none",
    "rounded-xs border border-transparent",
    "pointer-events-none",
    "in-[[data-scope=tooltip][data-part=content]]:bg-background/20 in-[[data-scope=tooltip][data-part=content]]:text-background",
    "[&_svg:not([class*='size-'])]:size-3",
  ],
  defaultVariants: {
    /** Size scale. */
    size: "md",
    /** Visual emphasis. */
    variant: "default",
  },
  variants: {
    size: {
      lg: "h-6 min-w-6 px-1.5 text-sm",
      md: "",
      sm: "h-4 min-w-4 px-0.5",
    },
    variant: {
      default: "bg-muted",
      outline: "border-border border",
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
