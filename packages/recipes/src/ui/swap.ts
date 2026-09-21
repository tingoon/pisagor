import { tv, type VariantProps } from "tailwind-variants";

export const swapRecipe = tv({
  base: ["[&>span]:motion-reduce:animate-none!"],
  defaultVariants: {
    variant: "fade",
  },
  variants: {
    variant: {
      blur: [
        "[&>span]:data-[state=open]:fade-in-0 [&>span]:data-[state=open]:zoom-in-50 [&>span]:data-[state=open]:animate-in [&>span]:data-[state=open]:blur-in-sm [&>span]:data-[state=open]:duration-normal",
        "[&>span]:data-[state=closed]:fade-out-0 [&>span]:data-[state=closed]:zoom-out-50 [&>span]:data-[state=closed]:animate-out [&>span]:data-[state=closed]:blur-out-sm [&>span]:data-[state=closed]:duration-fast",
      ],
      fade: [
        "[&>span]:data-[state=open]:fade-in-0 [&>span]:data-[state=open]:animate-in [&>span]:data-[state=open]:duration-normal",
        "[&>span]:data-[state=closed]:fade-out-0 [&>span]:data-[state=closed]:animate-out [&>span]:data-[state=closed]:duration-fast",
      ],
      flip: [
        "[&>span]:backface-hidden",
        "[&>span]:data-[state=open]:animate-[flip-in_var(--duration-slow)_ease-out]",
        "[&>span]:data-[state=closed]:animate-[flip-out_var(--duration-normal)_ease-out]",
      ],
      rotate: [
        "[&>span]:data-[state=open]:spin-in-[-90deg] [&>span]:data-[state=open]:fade-in-0 [&>span]:data-[state=open]:animate-in [&>span]:data-[state=open]:duration-normal",
        "[&>span]:data-[state=closed]:spin-out-[90deg] [&>span]:data-[state=closed]:fade-out-0 [&>span]:data-[state=closed]:animate-out [&>span]:data-[state=closed]:duration-fast",
      ],
      scale: [
        "[&>span]:data-[state=open]:zoom-in-0 [&>span]:data-[state=open]:fade-in-0 [&>span]:data-[state=open]:animate-in [&>span]:data-[state=open]:duration-normal",
        "[&>span]:data-[state=closed]:zoom-out-100 [&>span]:data-[state=closed]:fade-out-0 [&>span]:data-[state=closed]:animate-out [&>span]:data-[state=closed]:duration-fast",
      ],
    },
  },
});

export type SwapVariantProps = VariantProps<typeof swapRecipe>;
export type SwapRecipe = ReturnType<typeof swapRecipe>;
export type SwapRecipeSlot = keyof SwapRecipe;
