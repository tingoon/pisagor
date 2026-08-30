import { tv, type VariantProps } from "tailwind-variants";

export const sortableRecipe = tv({
  base: ["flex gap-2"],
  defaultVariants: {
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
      "relative",
      "rounded-xl border bg-card",
      "outline-hidden focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/32",
      "data-[dragging=true]:opacity-50",
      "data-[drop-target=true]:border-primary data-[drop-target=true]:ring-2 data-[drop-target=true]:ring-primary/24",
    ],
    content: ["flex min-w-0 flex-1 items-center gap-3 p-3"],
    handle: [
      "inline-flex size-8 shrink-0 items-center justify-center",
      "cursor-grab touch-none text-muted-foreground",
      "rounded-lg",
      "hover:bg-muted hover:text-foreground",
      "active:cursor-grabbing",
    ],
  },
});

export type SortableVariantProps = VariantProps<typeof sortableRecipe>;
export type SortableRecipe = ReturnType<typeof sortableRecipe>;
export type SortableRecipeSlot = keyof SortableRecipe;

export type SortableItemVariantProps = VariantProps<typeof sortableItemRecipe>;
export type SortableItemRecipe = ReturnType<typeof sortableItemRecipe>;
export type SortableItemRecipeSlot = keyof SortableItemRecipe;
