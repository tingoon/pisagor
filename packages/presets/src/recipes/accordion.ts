import { tv, type VariantProps } from "tailwind-variants";

export const accordionRecipe = tv({
  slots: {
    base: [
      "flex",
      "data-[orientation=horizontal]:h-80 data-[orientation=horizontal]:flex-row",
      "data-[orientation=vertical]:flex-col",
    ],
  },
});

export const accordionItemRecipe = tv({
  defaultVariants: {
    /** Size scale. */
    size: "md",
  },
  slots: {
    base: [
      "[overflow-anchor:none]",
      "data-[orientation=vertical]:border-b data-[orientation=vertical]:last:border-b-0",
      "data-[orientation=horizontal]:flex data-[orientation=horizontal]:border-e",
      "data-[orientation=horizontal]:last:border-e-0",
    ],
    itemBody: [
      "text-sm",
      "in-data-[orientation=vertical]:pt-0 in-data-[orientation=vertical]:pb-4",
      "in-data-[orientation=horizontal]:flex in-data-[orientation=horizontal]:h-full in-data-[orientation=horizontal]:items-center in-data-[orientation=horizontal]:px-4",
    ],
    itemContent: [
      "overflow-hidden rounded-md",
      "data-[orientation=horizontal]:will-change-[width]",
      "data-[state=open]:data-[orientation=vertical]:animate-slide-down",
      "data-[state=closed]:data-[orientation=vertical]:animate-slide-up",
      "data-[state=open]:data-[orientation=horizontal]:animate-slide-right",
      "data-[state=closed]:data-[orientation=horizontal]:animate-slide-left",
      "motion-reduce:animate-none!",
    ],
    itemIndicator: [
      "inline-flex size-4 shrink-0 items-center justify-center",
      "translate-y-0.5",
      "text-muted-foreground",
      "pointer-events-none",
      "duration-slow transition-transform ease-out",
      "data-[state=open]:rotate-180",
      "motion-reduce:transition-none!",
    ],
    itemTrigger: [
      "flex items-center justify-between gap-3",
      "text-start text-sm font-medium",
      "rounded-md border border-transparent",
      "outline-hidden",
      "duration-fast transition ease-out",
      "disabled:pointer-events-none disabled:opacity-64 disabled:grayscale",
      "focus-visible:border-primary focus-visible:ring-0.75 focus-visible:ring-ring/32",
      "motion-reduce:transition-none!",
      "data-[orientation=vertical]:w-full data-[orientation=vertical]:flex-1 data-[orientation=vertical]:py-4",
      "data-[orientation=horizontal]:h-full data-[orientation=horizontal]:min-w-10",
      "data-[orientation=horizontal]:[writing-mode:sideways-lr]",
    ],
  },
  variants: {
    size: {
      lg: {
        itemBody:
          "text-base in-data-[orientation=horizontal]:px-5 in-data-[orientation=vertical]:pb-5",
        itemTrigger:
          "text-base data-[orientation=horizontal]:min-w-11 data-[orientation=vertical]:py-5",
      },
      md: {},
      sm: {
        itemBody:
          "text-xs in-data-[orientation=horizontal]:px-3 in-data-[orientation=vertical]:pb-3",
        itemTrigger:
          "text-xs data-[orientation=horizontal]:min-w-9 data-[orientation=vertical]:py-3",
      },
    },
  },
});

export type AccordionRecipeFn = typeof accordionRecipe;
export type AccordionRecipe = ReturnType<AccordionRecipeFn>;
export type AccordionRecipeSlot = keyof AccordionRecipe;
export type AccordionVariantProps = VariantProps<AccordionRecipeFn>;

export type AccordionItemRecipeFn = typeof accordionItemRecipe;
export type AccordionItemRecipe = ReturnType<AccordionItemRecipeFn>;
export type AccordionItemRecipeSlot = keyof AccordionItemRecipe;
export type AccordionItemVariantProps = VariantProps<AccordionItemRecipeFn>;
