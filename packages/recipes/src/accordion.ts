import { tv } from "tailwind-variants";

export const accordionItemRecipe = tv({
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
      "text-left font-medium text-sm",
      "rounded-md border border-transparent",
      "outline-hidden",
      "transition-[color,background-color,border-color,box-shadow] duration-fast ease-out",
      "disabled:pointer-events-none disabled:opacity-64 disabled:grayscale",
      "focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/32",
      "[&_[data-state=open]>svg]:rotate-180",
      "motion-reduce:transition-none!",
    ],
  },
});

export type AccordionItemRecipeFn = typeof accordionItemRecipe;
export type AccordionItemRecipe = ReturnType<AccordionItemRecipeFn>;
export type AccordionItemRecipeSlot = keyof AccordionItemRecipe;
