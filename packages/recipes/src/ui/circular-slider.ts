import { tv, type VariantProps } from "tailwind-variants";

export const circularSliderRecipe = tv({
  slots: {
    base: [
      "relative",
      "flex flex-col items-center justify-center",
      "data-disabled:pointer-events-none data-disabled:opacity-64",
    ],
    control: ["group/circular-slider-control absolute inset-0"],
    marker: [
      "absolute inset-s-[calc(50%-1px)] top-0 bottom-0 w-0.5",
      "before:absolute before:inset-s-1/2 before:top-(--marker-offset) before:-translate-x-1/2",
      "before:h-(--marker-height) before:w-(--marker-width) before:rounded-md before:bg-border",
      "data-[state=at-value]:before:bg-primary",
      "data-[state=under-value]:before:bg-primary",
    ],
    markerGroup: ["absolute inset-0 z-0", "rounded-full", "pointer-events-none"],
    ring: ["pointer-events-none -rotate-90"],
    ringRange: ["stroke-primary [stroke-linecap:round]"],
    ringTrack: ["stroke-muted"],
    thumb: [
      "absolute inset-0 z-10 flex items-center justify-center",
      "outline-hidden",
      "focus-visible:[&_span]:outline-hidden focus-visible:[&_span]:ring-2 focus-visible:[&_span]:ring-ring/32",
      "active:[&_span]:scale-110 active:[&_span]:ring-[3px] active:[&_span]:ring-ring/32",
    ],
    thumbHandle: [
      "absolute",
      "shrink-0",
      "bg-white",
      "size-(--size)",
      "rounded-full shadow-xs/5 ring-2 ring-border",
      "transition-all",
      "hover:cursor-grab hover:ring-[3px]",
      "motion-reduce:transition-none!",
    ],
    value: ["gap-1", "tabular-nums", "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"],
  },
});

export type CircularSliderVariantProps = VariantProps<typeof circularSliderRecipe>;
export type CircularSliderSlots = ReturnType<typeof circularSliderRecipe>;
