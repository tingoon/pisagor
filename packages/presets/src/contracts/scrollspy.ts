import { tv } from "tailwind-variants";

/**
 * Scrollspy root — behavior-first; no default visual styles.
 * Consumed so all className merging goes through `@pisagor/recipes`.
 */
export const scrollspyRecipe = tv({
  base: "",
});

export type ScrollspyRecipeFn = typeof scrollspyRecipe;
export type ScrollspyRecipe = ReturnType<ScrollspyRecipeFn>;
export type ScrollspyRecipeSlot = keyof ScrollspyRecipe;
