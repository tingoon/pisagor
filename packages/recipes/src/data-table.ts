import { tv } from "tailwind-variants";

export const dataTableRecipe = tv({
  slots: {
    base: ["flex w-full flex-col gap-3"],
    empty: ["py-6 text-center text-muted-foreground"],
    footer: ["flex flex-col gap-3"],
    toolbar: ["flex flex-col gap-3"],
  },
});

export type DataTableRecipeFn = typeof dataTableRecipe;
export type DataTableRecipe = ReturnType<DataTableRecipeFn>;
export type DataTableRecipeSlot = keyof DataTableRecipe;
