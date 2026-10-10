import { tv } from "tailwind-variants";

export const paginationRecipe = tv({
  slots: {
    base: ["mx-auto", "w-full", "flex justify-center gap-1"],
    ellipsis: [
      "h-8 w-12",
      "flex items-end justify-center",
      "text-muted-foreground",
      "pointer-events-none select-none",
      "[&_svg]:size-4",
    ],
    item: [
      "tabular-nums",
      "data-selected:not-[hover]:bg-transparent dark:data-selected:not-[hover]:bg-input/30",
      "data-selected:not-[hover]:text-foreground",
      "data-selected:not-[hover]:border-input",
    ],
  },
});

export type PaginationRecipeFn = typeof paginationRecipe;
export type PaginationRecipe = ReturnType<PaginationRecipeFn>;
export type PaginationRecipeSlot = keyof PaginationRecipe;
