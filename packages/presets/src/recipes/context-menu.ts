import { tv } from "tailwind-variants";

export const contextMenuRecipe = tv({
  base: "cursor-default",
});

export type ContextMenuRecipeFn = typeof contextMenuRecipe;
export type ContextMenuRecipe = ReturnType<ContextMenuRecipeFn>;
export type ContextMenuRecipeSlot = keyof ContextMenuRecipe;
