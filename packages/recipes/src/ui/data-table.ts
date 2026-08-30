import { tv, type VariantProps } from "tailwind-variants";

export const dataTableRecipe = tv({
  slots: {
    base: ["flex w-full flex-col gap-3"],
    empty: ["py-6 text-center text-muted-foreground"],
    footer: ["flex flex-col gap-3"],
    toolbar: ["flex flex-col gap-3"],
  },
});

export type DataTableVariantProps = VariantProps<typeof dataTableRecipe>;
export type DataTableRecipe = ReturnType<typeof dataTableRecipe>;
export type DataTableRecipeSlot = keyof DataTableRecipe;
