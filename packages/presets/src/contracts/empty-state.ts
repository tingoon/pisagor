import { tv, type VariantProps } from "tailwind-variants";

export const emptyStateRecipe = tv({
  defaultVariants: {
    /**
     * Size scale.
     */
    size: "md",
  },
  slots: {
    actions: ["mt-2", "flex flex-wrap items-center justify-center gap-2"],
    base: [
      "group/empty-state",
      "flex w-full flex-col items-center justify-center gap-2",
      "rounded-2xl border border-dashed border-border/60 bg-muted/24",
      "p-8 text-center",
    ],
    description: [
      "max-w-prose",
      "text-balance text-muted-foreground text-sm leading-relaxed",
    ],
    media: [
      "mb-2",
      "flex size-12 items-center justify-center",
      "rounded-full bg-muted text-muted-foreground",
      "[&_svg:not([class*='size-'])]:size-5 [&_svg]:pointer-events-none [&_svg]:shrink-0",
    ],
    title: ["font-medium text-foreground text-xl leading-tight tracking-tight"],
  },
  variants: {
    size: {
      lg: {
        base: "gap-3 p-12",
        description: "text-base",
        media: "size-16",
        title: "text-2xl",
      },
      md: {},
      sm: {
        base: "gap-1.5 p-6",
        media: "size-10",
        title: "text-lg",
      },
    },
  },
});

export type EmptyStateRecipeFn = typeof emptyStateRecipe;
export type EmptyStateRecipe = ReturnType<EmptyStateRecipeFn>;
export type EmptyStateRecipeSlot = keyof EmptyStateRecipe;
export type EmptyStateVariantProps = VariantProps<EmptyStateRecipeFn>;
