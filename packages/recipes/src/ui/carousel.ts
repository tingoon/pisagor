import { tv, type VariantProps } from "tailwind-variants";

export const carouselVariants = tv({
  slots: {
    base: [
      "relative",
      "flex flex-col",
      "data-[orientation=vertical]:w-max data-[orientation=vertical]:flex-row",
    ],
    control: ["flex items-center justify-between gap-2", "data-[orientation=vertical]:flex-col"],
    indicator: [
      "size-2",
      "shrink-0",
      "bg-foreground",
      "opacity-64 data-current:opacity-100",
      "overflow-hidden",
      "[&_img]:size-full [&_img]:rounded-lg [&_img]:object-cover",
      "rounded-full",
    ],
    indicatorGroup: ["flex justify-center gap-2", "data-[orientation=vertical]:flex-col"],
    item: [
      "min-w-0",
      "shrink-0 grow-0 basis-full",
      "[&_img]:size-full [&_img]:rounded-lg [&_img]:object-cover",
    ],
    itemGroup: ["min-w-0", "-my-4 py-4", "flex flex-1 gap-4", "overflow-hidden rounded-lg"],
    nextTrigger: [
      "absolute",
      "data-[orientation=horizontal]:-inset-e-12 data-[orientation=horizontal]:top-1/2 data-[orientation=horizontal]:-translate-y-1/2",
      "data-[orientation=vertical]:-bottom-12 data-[orientation=vertical]:left-1/2 data-[orientation=vertical]:-translate-x-1/2 data-[orientation=vertical]:rotate-90",
    ],
    prevTrigger: [
      "absolute",
      "data-[orientation=horizontal]:-inset-s-12 data-[orientation=horizontal]:top-1/2 data-[orientation=horizontal]:-translate-y-1/2",
      "data-[orientation=vertical]:-top-12 data-[orientation=vertical]:left-1/2 data-[orientation=vertical]:-translate-x-1/2 data-[orientation=vertical]:rotate-90",
    ],
  },
});

export type CarouselVariantProps = VariantProps<typeof carouselVariants>;
export type CarouselVariants = ReturnType<typeof carouselVariants>;
export type CarouselSlots = keyof CarouselVariants;
