import { tv } from "tailwind-variants";

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
  base: "data-[state=open]:[&_svg]:rotate-180",
});

export const collapsibleInlineVariants = tv({
  base: ["transition-transform duration-200 motion-reduce:transition-none!"],
});
