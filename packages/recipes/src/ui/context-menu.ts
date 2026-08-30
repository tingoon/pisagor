import { tv, type VariantProps } from "tailwind-variants";

export const contextMenuRecipe = tv({
  base: "cursor-default",
});

export type ContextMenuVariantProps = VariantProps<typeof contextMenuRecipe>;
export type ContextMenuRecipe = ReturnType<typeof contextMenuRecipe>;
export type ContextMenuRecipeSlot = keyof ContextMenuRecipe;
