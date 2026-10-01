import { tv, type VariantProps } from "tailwind-variants";

export const dataGridRecipe = tv({
  slots: {
    anchor: "hidden",
    base: ["flex w-full flex-col gap-3"],
    columnResizer: [
      "absolute inset-e-0 top-0 z-10 h-full w-1 cursor-col-resize touch-none select-none",
      "bg-transparent hover:bg-primary/40",
    ],
    empty: ["py-6 text-center text-muted-foreground"],
    filterHead: [
      "h-auto min-h-10 align-top py-2 whitespace-normal",
      "**:data-[scope=select]:data-[part=control]:w-full",
      "**:data-[scope=select]:data-[part=trigger]:h-7 **:data-[scope=select]:data-[part=trigger]:w-full **:data-[scope=select]:data-[part=trigger]:max-w-none",
    ],
    footer: ["flex flex-col gap-3"],
    head: "",
    row: ["data-grouped:bg-muted/40 data-grouped:font-medium"],
    toolbar: ["flex flex-col gap-3"],
  },
  variants: {
    resizing: {
      true: {
        columnResizer: "bg-primary",
      },
    },
    sizing: {
      true: {
        head: "relative",
      },
    },
  },
});

export type DataGridRecipeFn = typeof dataGridRecipe;
export type DataGridVariantProps = VariantProps<DataGridRecipeFn>;
export type DataGridRecipe = ReturnType<DataGridRecipeFn>;
export type DataGridRecipeSlot = keyof DataGridRecipe;
