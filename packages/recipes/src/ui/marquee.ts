import { tv, type VariantProps } from "tailwind-variants";

export const marqueeRecipe = tv({
  slots: {
    base: ["group/marquee", "relative", "w-full max-w-full", "isolate"],
    content: [
      "flex",
      "min-w-max",
      "delay-(--marquee-delay)",
      "data-[orientation=vertical]:animate-marquee-y data-[orientation=vertical]:flex-col",
      "data-[orientation=horizontal]:animate-marquee-x data-[orientation=horizontal]:flex-row",
      "data-reverse:direction-[reverse]!",
      "group-data-paused/marquee:paused!",
    ],
    edge: [
      "absolute z-10",
      "group-data-[orientation=horizontal]/marquee:h-full group-data-[orientation=horizontal]/marquee:w-1/4",
      "group-data-[orientation=vertical]/marquee:h-1/4 group-data-[orientation=vertical]/marquee:w-full",
      "pointer-events-none",
      "from-background to-transparent",
      "data-[side=start]:bg-linear-to-r",
      "data-[side=end]:bg-linear-to-l",
      "data-[side=top]:bg-linear-to-b",
      "data-[side=bottom]:bg-linear-to-t",
    ],
    item: ["w-full text-nowrap"],
    viewport: ["flex overflow-hidden"],
  },
});

export type MarqueeVariantProps = VariantProps<typeof marqueeRecipe>;
export type MarqueeSlots = ReturnType<typeof marqueeRecipe>;
