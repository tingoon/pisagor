import { tv, type VariantProps } from "tailwind-variants";

export const scrollAreaRecipe = tv({
  defaultVariants: {
    /** Scroll fade. */
    scrollFade: false,
  },
  slots: {
    base: ["size-full min-h-0 [--fade-size:1.5rem]"],
    content: [],
    corner: [],
    scrollbar: [
      "flex",
      "m-1",
      "bg-transparent",
      "opacity-0 transition-opacity delay-300",
      "data-[orientation=vertical]:w-1.5",
      "data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:flex-col",
      "data-hover:duration-fast data-hover:opacity-100 data-hover:delay-0",
      "data-scrolling:duration-fast data-scrolling:opacity-100 data-scrolling:delay-0",
      "data-[orientation=vertical]:in-[[data-scope=scroll-area][data-part=root]:not([data-overflow-y])]:hidden",
      "data-[orientation=horizontal]:in-[[data-scope=scroll-area][data-part=root]:not([data-overflow-x])]:hidden",
      "motion-reduce:transition-none!",
    ],
    thumb: ["bg-foreground/20 relative flex-1 rounded-full"],
    viewport: ["h-full", "rounded-inherit", "outline-hidden", "scrollbar-none"],
  },
  variants: {
    scrollFade: {
      true: {
        viewport: [
          "mask-t-from-[calc(100%-var(--fade-size))]",
          "mask-b-from-[calc(100%-var(--fade-size))]",
          "data-at-top:mask-t-from-100%",
          "data-at-bottom:mask-b-from-100%",
          "transition-shadow",
          "motion-reduce:transition-none!",
        ],
      },
    },
  },
});

export type ScrollAreaRecipeFn = typeof scrollAreaRecipe;
export type ScrollAreaVariantProps = VariantProps<ScrollAreaRecipeFn>;
export type ScrollAreaRecipe = ReturnType<ScrollAreaRecipeFn>;
export type ScrollAreaRecipeSlot = keyof ScrollAreaRecipe;
