import { tv, type VariantProps } from "tailwind-variants";

export const sortableRecipe = tv({
  base: ["m-0 flex list-none gap-2 p-0"],
  defaultVariants: {
    /**
     * Layout orientation.
     */
    orientation: "vertical",
  },
  variants: {
    orientation: {
      horizontal: "flex-row flex-wrap",
      vertical: "flex-col",
    },
  },
});

export const sortableItemRecipe = tv({
  slots: {
    base: [
      "list-none",
      "relative",
      "rounded-2xl border border-border/50 bg-card",
      "outline-hidden focus-visible:border-primary focus-visible:ring-0.75 focus-visible:ring-ring/32",
      "data-[dragging=true]:opacity-50",
      "data-[drop-target=true]:border-primary data-[drop-target=true]:ring-2 data-[drop-target=true]:ring-primary/24",
    ],
    content: ["flex min-w-0 flex-1 items-center gap-3 p-3"],
    handle: [
      "inline-flex size-8 shrink-0 items-center justify-center",
      "cursor-grab touch-none text-muted-foreground",
      "appearance-none border-0 bg-transparent p-0",
      "rounded-lg",
      "transition-[color,background-color,transform] duration-fast ease-out",
      "hover:bg-muted hover:text-foreground",
      "active:scale-[0.97] active:cursor-grabbing",
      "motion-reduce:transition-none! motion-reduce:active:scale-100",
    ],
  },
});

export type SortableRecipeFn = typeof sortableRecipe;
export type SortableVariantProps = VariantProps<SortableRecipeFn>;
export type SortableRecipe = ReturnType<SortableRecipeFn>;
export type SortableRecipeSlot = keyof SortableRecipe;

export type SortableItemRecipeFn = typeof sortableItemRecipe;
export type SortableItemRecipe = ReturnType<SortableItemRecipeFn>;
export type SortableItemRecipeSlot = keyof SortableItemRecipe;
