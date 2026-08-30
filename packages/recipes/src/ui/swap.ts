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
        "[&>span]:data-[state=closed]:fade-out-0 [&>span]:data-[state=closed]:zoom-out-50 [&>span]:data-[state=closed]:animate-out [&>span]:data-[state=closed]:blur-out-sm [&>span]:data-[state=closed]:duration-150",
      ],
      fade: [
        "[&>span]:data-[state=open]:fade-in-0 [&>span]:data-[state=open]:animate-in [&>span]:data-[state=open]:duration-200",
        "[&>span]:data-[state=closed]:fade-out-0 [&>span]:data-[state=closed]:animate-out [&>span]:data-[state=closed]:duration-100",
      ],
      flip: [
        "[&>span]:backface-hidden",
        "[&>span]:data-[state=open]:animate-[flip-in_400ms_ease]",
        "[&>span]:data-[state=closed]:animate-[flip-out_200ms_ease]",
      ],
      rotate: [
        "[&>span]:data-[state=open]:spin-in-[-90deg] [&>span]:data-[state=open]:fade-in-0 [&>span]:data-[state=open]:animate-in [&>span]:data-[state=open]:duration-normal",
        "[&>span]:data-[state=closed]:spin-out-[90deg] [&>span]:data-[state=closed]:fade-out-0 [&>span]:data-[state=closed]:animate-out [&>span]:data-[state=closed]:duration-100",
      ],
      scale: [
        "[&>span]:data-[state=open]:zoom-in-0 [&>span]:data-[state=open]:fade-in-0 [&>span]:data-[state=open]:animate-in [&>span]:data-[state=open]:duration-200",
        "[&>span]:data-[state=closed]:zoom-out-100 [&>span]:data-[state=closed]:fade-out-0 [&>span]:data-[state=closed]:animate-out [&>span]:data-[state=closed]:duration-100",
      ],
    },
  },
});

export type SwapVariantProps = VariantProps<typeof swapRecipe>;
export type SwapRecipe = ReturnType<typeof swapRecipe>;
export type SwapRecipeSlot = keyof SwapRecipe;
