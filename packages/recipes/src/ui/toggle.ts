import { tv, type VariantProps } from "tailwind-variants";

export const toggleRecipe = tv({
  base: [
    "relative",
    "data-[state=on]:bg-card data-[state=on]:shadow-sm dark:data-[state=on]:bg-input/64",
    "transition-transform duration-fast ease-out",
    "active:scale-[0.97]",
    "pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11",
    "motion-reduce:transition-none! motion-reduce:active:scale-100",
  ],
  defaultVariants: {
    size: "md",
  },
  variants: {
    size: {
      lg: "h-9 min-w-9 px-2.5",
      md: "h-8 min-w-8 px-2",
      sm: "h-7 min-w-7 px-1.5",
    },
  },
});

export type ToggleVariantProps = VariantProps<typeof toggleRecipe>;
export type ToggleRecipe = ReturnType<typeof toggleRecipe>;
export type ToggleRecipeSlot = keyof ToggleRecipe;
