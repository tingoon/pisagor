import { tv, type VariantProps } from "tailwind-variants";

export const carouselVariants = tv({
  base: [
    "relative",
    "flex flex-col",
    "data-[orientation=vertical]:w-max data-[orientation=vertical]:flex-row",
  ],
});

export const carouselControlVariants = tv({
  base: ["flex items-center justify-between gap-2", "data-[orientation=vertical]:flex-col"],
});

export const carouselPrevTriggerVariants = tv({
  base: [
    "absolute",
    "data-[orientation=horizontal]:-inset-s-12 data-[orientation=horizontal]:top-1/2 data-[orientation=horizontal]:-translate-y-1/2",
    "data-[orientation=vertical]:-top-12 data-[orientation=vertical]:left-1/2 data-[orientation=vertical]:-translate-x-1/2 data-[orientation=vertical]:rotate-90",
  ],
});

export const carouselNextTriggerVariants = tv({
  base: [
    "absolute",
    "data-[orientation=horizontal]:-inset-e-12 data-[orientation=horizontal]:top-1/2 data-[orientation=horizontal]:-translate-y-1/2",
    "data-[orientation=vertical]:-bottom-12 data-[orientation=vertical]:left-1/2 data-[orientation=vertical]:-translate-x-1/2 data-[orientation=vertical]:rotate-90",
  ],
});

export const carouselIndicatorGroupVariants = tv({
  base: ["flex justify-center gap-2", "data-[orientation=vertical]:flex-col"],
});

export const carouselIndicatorVariants = tv({
  base: [
    "size-2",
    "shrink-0",
    "bg-foreground",
    "opacity-64 data-current:opacity-100",
    "overflow-hidden",
    "[&_img]:size-full [&_img]:rounded-lg [&_img]:object-cover",
    "rounded-full",
  ],
});

export const carouselItemGroupVariants = tv({
  base: ["min-w-0", "-my-4 py-4", "flex flex-1 gap-4", "overflow-hidden rounded-lg"],
});

export const carouselItemVariants = tv({
  base: [
    "min-w-0",
    "shrink-0 grow-0 basis-full",
    "[&_img]:size-full [&_img]:rounded-lg [&_img]:object-cover",
  ],
});

export type CarouselVariantProps = VariantProps<typeof carouselVariants>;
export type CarouselVariants = ReturnType<typeof carouselVariants>;

export type CarouselControlVariantProps = VariantProps<typeof carouselControlVariants>;
export type CarouselControlVariants = ReturnType<typeof carouselControlVariants>;

export type CarouselPrevTriggerVariantProps = VariantProps<typeof carouselPrevTriggerVariants>;
export type CarouselPrevTriggerVariants = ReturnType<typeof carouselPrevTriggerVariants>;

export type CarouselNextTriggerVariantProps = VariantProps<typeof carouselNextTriggerVariants>;
export type CarouselNextTriggerVariants = ReturnType<typeof carouselNextTriggerVariants>;

export type CarouselIndicatorGroupVariantProps = VariantProps<
  typeof carouselIndicatorGroupVariants
>;
export type CarouselIndicatorGroupVariants = ReturnType<typeof carouselIndicatorGroupVariants>;

export type CarouselIndicatorVariantProps = VariantProps<typeof carouselIndicatorVariants>;
export type CarouselIndicatorVariants = ReturnType<typeof carouselIndicatorVariants>;

export type CarouselItemGroupVariantProps = VariantProps<typeof carouselItemGroupVariants>;
export type CarouselItemGroupVariants = ReturnType<typeof carouselItemGroupVariants>;

export type CarouselItemVariantProps = VariantProps<typeof carouselItemVariants>;
export type CarouselItemVariants = ReturnType<typeof carouselItemVariants>;
