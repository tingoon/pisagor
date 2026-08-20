import { tv, type VariantProps } from "tailwind-variants";

export const marqueeVariants = tv({
  base: ["group/marquee", "relative", "w-full max-w-full", "isolate"],
});

export const marqueeContentVariants = tv({
  slots: {
    base: [
      "flex",
      "min-w-max",
      "delay-(--marquee-delay)",
      "data-[orientation=vertical]:animate-marquee-y data-[orientation=vertical]:flex-col",
      "data-[orientation=horizontal]:animate-marquee-x data-[orientation=horizontal]:flex-row",
      "data-reverse:direction-[reverse]!",
      "group-data-paused/marquee:paused!",
    ],
    viewport: ["flex overflow-hidden"],
  },
});

export const marqueeItemVariants = tv({
  base: ["w-full text-nowrap"],
});

export const marqueeEdgeVariants = tv({
  base: [
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
});

export type MarqueeVariantProps = VariantProps<typeof marqueeVariants>;
export type MarqueeVariants = ReturnType<typeof marqueeVariants>;

export type MarqueeContentVariantProps = VariantProps<typeof marqueeContentVariants>;
export type MarqueeContentVariants = ReturnType<typeof marqueeContentVariants>;
export type MarqueeContentSlots = keyof MarqueeContentVariants;

export type MarqueeItemVariantProps = VariantProps<typeof marqueeItemVariants>;
export type MarqueeItemVariants = ReturnType<typeof marqueeItemVariants>;

export type MarqueeEdgeVariantProps = VariantProps<typeof marqueeEdgeVariants>;
export type MarqueeEdgeVariants = ReturnType<typeof marqueeEdgeVariants>;
