import { tv, type VariantProps } from "tailwind-variants";

export const sliderRecipe = tv({
  defaultVariants: {
    /** Visual emphasis. */
    variant: "primary",
  },
  slots: {
    base: [
      "flex flex-col gap-3",
      "data-[orientation=horizontal]:w-full",
      "data-[orientation=vertical]:h-full",
    ],
    control: [
      "relative",
      "w-full",
      "flex items-center",
      "touch-none select-none",
      "data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-40 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
      "data-disabled:pointer-events-none data-disabled:opacity-64",
    ],
    header: ["flex items-center justify-between"],
    marker: [
      "group/marker",
      "flex w-0 flex-col items-center justify-center gap-2",
      "data-[state=at-value]:text-foreground data-[state=under-value]:text-foreground",
    ],
    markerGroup: [
      "w-full",
      "flex items-center justify-between gap-1",
      "mt-3 px-2.5",
      "text-muted-foreground text-xs font-medium",
      "data-[orientation=vertical]:hidden",
      "pointer-events-none",
    ],
    markerLabel: ["group-data-interval/marker:opacity-0"],
    markerTick: [
      "h-1 w-px",
      "bg-muted-foreground/70 group-data-[state=at-value]/marker:bg-foreground group-data-[state=under-value]/marker:bg-foreground",
      "group-data-interval/marker:h-0.5",
    ],
    range: [
      "absolute",
      "bg-primary",
      "select-none",
      "data-[orientation=horizontal]:h-full",
      "data-[orientation=vertical]:w-full data-[orientation=vertical]:not-[[class^='h-']]:not-[[class*='_h-']]:self-stretch",
    ],
    thumb: [
      "relative",
      "shrink-0",
      "size-4.5",
      "bg-background",
      "border-input rounded-full border shadow-xs/5",
      "cursor-grab select-none",
      "duration-fast transition ease-out",
      "focus-visible:border-primary focus-visible:ring-0.75 focus-visible:ring-ring/32 focus-visible:outline-hidden",
      "data-dragging:border-primary data-dragging:ring-0.75 data-dragging:ring-ring/32 origin-center data-dragging:scale-110 data-dragging:cursor-grabbing",
      "pointer-coarse:after:absolute pointer-coarse:after:h-full pointer-coarse:after:min-h-11",
      "motion-reduce:transition-none!",
    ],
    track: [
      "grow",
      "rounded-full",
      "overflow-hidden select-none",
      "data-[orientation=horizontal]:h-2 data-[orientation=horizontal]:w-full",
      "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2",
    ],
    value: ["ms-auto tabular-nums"],
  },
  variants: {
    variant: {
      primary: {
        track: "bg-input/64",
      },
      secondary: {
        thumb: "shadow-none",
        track: "bg-muted/40",
      },
    },
  },
});

export type SliderRecipeFn = typeof sliderRecipe;
export type SliderVariantProps = VariantProps<SliderRecipeFn>;
export type SliderRecipe = ReturnType<SliderRecipeFn>;
export type SliderRecipeSlot = keyof SliderRecipe;
