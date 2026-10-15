import { tv, type VariantProps } from "tailwind-variants";

export const accordionItemRecipe = tv({
  defaultVariants: {
    /**
     * Size scale.
     */
    size: "md",
  },
  slots: {
    base: "flex flex-col border-b last:border-b-0",
    body: "pt-0 pb-4",
    content: [
      "overflow-hidden rounded-md text-sm",
      "data-[state=open]:animate-slide-down",
      "data-[state=closed]:animate-slide-up",
      "motion-reduce:animate-none!",
    ],
    indicator: [
      "translate-y-0.5",
      "size-4",
      "shrink-0",
      "text-muted-foreground",
      "pointer-events-none",
      "transition-transform duration-slow ease-out",
      "motion-reduce:transition-none!",
    ],
    trigger: [
      "flex flex-1 items-center justify-between gap-3",
      "py-4",
      "text-start font-medium text-sm",
      "rounded-md border border-transparent",
      "outline-hidden",
      "transition duration-fast ease-out",
      "disabled:pointer-events-none disabled:opacity-64 disabled:grayscale",
      "focus-visible:border-primary focus-visible:ring-0.75 focus-visible:ring-ring/32",
      "[&_[data-state=open]>svg]:rotate-180",
      "motion-reduce:transition-none!",
    ],
  },
  variants: {
    size: {
      lg: {
        body: "pb-5",
        content: "text-base",
        trigger: "py-5 text-base",
      },
      md: {},
      sm: {
        body: "pb-3",
        content: "text-xs",
        trigger: "py-3 text-xs",
      },
    },
  },
});

export type AccordionItemRecipeFn = typeof accordionItemRecipe;
export type AccordionItemRecipe = ReturnType<AccordionItemRecipeFn>;
export type AccordionItemRecipeSlot = keyof AccordionItemRecipe;
export type AccordionItemVariantProps = VariantProps<AccordionItemRecipeFn>;
