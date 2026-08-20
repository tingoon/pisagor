import { tv, type VariantProps } from "tailwind-variants";

export const scrollAreaVariants = tv({
  defaultVariants: {
    scrollFade: false,
  },
  slots: {
    root: ["size-full min-h-0 [--fade-size:1.5rem]"],
    scrollbar: [
      "flex",
      "m-1",
      "bg-transparent",
      "opacity-0 transition-opacity delay-300",
      "data-[orientation=vertical]:w-1.5",
      "data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:flex-col",
      "data-hover:opacity-100 data-hover:delay-0 data-hover:duration-100",
      "data-scrolling:opacity-100 data-scrolling:delay-0 data-scrolling:duration-100",
      "data-[orientation=vertical]:in-[[data-scope=scroll-area][data-part=root]:not([data-overflow-y])]:hidden",
      "data-[orientation=horizontal]:in-[[data-scope=scroll-area][data-part=root]:not([data-overflow-x])]:hidden",
      "motion-reduce:transition-none!",
    ],
    thumb: ["relative flex-1 rounded-full bg-foreground/20"],
    viewport: ["h-full", "rounded-[inherit]", "outline-hidden", "scrollbar-none"],
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
export type ScrollAreaVariantProps = VariantProps<typeof scrollAreaVariants>;
