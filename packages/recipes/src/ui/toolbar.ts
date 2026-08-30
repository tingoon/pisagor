import { tv, type VariantProps } from "tailwind-variants";

export const toolbarRecipe = tv({
  slots: {
    actions: ["flex shrink-0 flex-wrap items-center justify-end gap-2"],
    base: ["group/toolbar", "flex w-full flex-wrap items-start justify-between gap-3"],
    description: ["text-muted-foreground text-sm"],
    heading: ["flex min-w-0 flex-1 flex-col gap-0.5"],
    title: ["font-medium text-foreground text-lg/6"],
  },
});

export type ToolbarVariantProps = VariantProps<typeof toolbarRecipe>;
export type ToolbarRecipe = ReturnType<typeof toolbarRecipe>;
export type ToolbarRecipeSlot = keyof ToolbarRecipe;
