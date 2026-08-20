import { tv, type VariantProps } from "tailwind-variants";

export const collapsibleVariants = tv({
  base: "group/collapsible",
});

export const collapsibleTriggerVariants = tv({
  base: [
    "cursor-pointer",
    "data-disabled:pointer-events-none data-disabled:opacity-64",
    "has-[[data-scope=collapsible][data-part=indicator]]:[button]:justify-between",
  ],
});

export const collapsibleContentVariants = tv({
  base: [
    "h-(--collapsed-height)",
    "group-data-partial-collapse/collapsible:h-full",
    "transition-[height] duration-200",
    "overflow-hidden",
    "data-[state=open]:animate-expand",
    "data-[state=closed]:animate-collapse",
    "motion-reduce:animate-none! motion-reduce:transition-none!",
  ],
});

export const collapsibleIndicatorVariants = tv({
  slots: {
    base: "data-[state=open]:[&_svg]:rotate-180",
    icon: ["transition-transform duration-200 motion-reduce:transition-none!"],
  },
});

export type CollapsibleVariantProps = VariantProps<typeof collapsibleVariants>;
export type CollapsibleVariants = ReturnType<typeof collapsibleVariants>;

export type CollapsibleTriggerVariantProps = VariantProps<typeof collapsibleTriggerVariants>;
export type CollapsibleTriggerVariants = ReturnType<typeof collapsibleTriggerVariants>;

export type CollapsibleContentVariantProps = VariantProps<typeof collapsibleContentVariants>;
export type CollapsibleContentVariants = ReturnType<typeof collapsibleContentVariants>;

export type CollapsibleIndicatorVariantProps = VariantProps<typeof collapsibleIndicatorVariants>;
export type CollapsibleIndicatorVariants = ReturnType<typeof collapsibleIndicatorVariants>;
export type CollapsibleIndicatorSlots = keyof CollapsibleIndicatorVariants;
