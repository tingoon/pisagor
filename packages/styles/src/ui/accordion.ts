import { tv, type VariantProps } from "tailwind-variants";

export const accordionItemVariants = tv({
  base: "flex flex-col border-b last:border-b-0",
});

export const accordionItemTriggerVariants = tv({
  slots: {
    base: [
      "flex flex-1 items-center justify-between gap-3",
      "py-4",
      "text-left font-medium text-sm",
      "rounded-md border border-transparent",
      "outline-hidden",
      "transition-all",
      "disabled:pointer-events-none disabled:opacity-64 disabled:grayscale",
      "focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/32",
      "[&_[data-state=open]>svg]:rotate-180",
      "motion-reduce:transition-none!",
    ],
    indicator: [
      "translate-y-0.5",
      "size-4",
      "shrink-0",
      "text-muted-foreground",
      "pointer-events-none",
      "transition-transform duration-300",
      "motion-reduce:transition-none!",
    ],
  },
});

export const accordionItemContentVariants = tv({
  slots: {
    base: [
      "overflow-hidden rounded-md text-sm",
      "data-[state=open]:animate-slide-down",
      "data-[state=closed]:animate-slide-up",
      "motion-reduce:animate-none!",
    ],
    body: "pt-0 pb-4",
  },
});

export type AccordionItemVariantProps = VariantProps<typeof accordionItemVariants>;
export type AccordionItemVariants = ReturnType<typeof accordionItemVariants>;

export type AccordionItemTriggerVariantProps = VariantProps<typeof accordionItemTriggerVariants>;
export type AccordionItemTriggerVariants = ReturnType<typeof accordionItemTriggerVariants>;
export type AccordionItemTriggerSlots = keyof AccordionItemTriggerVariants;

export type AccordionItemContentVariantProps = VariantProps<typeof accordionItemContentVariants>;
export type AccordionItemContentVariants = ReturnType<typeof accordionItemContentVariants>;
export type AccordionItemContentSlots = keyof AccordionItemContentVariants;
