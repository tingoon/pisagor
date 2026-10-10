import { tv } from "tailwind-variants";

export const proseRecipe = tv({
  base: ["prose prose-neutral dark:prose-invert mx-auto max-w-prose"],
});

export type ProseRecipeFn = typeof proseRecipe;
export type ProseRecipe = ReturnType<ProseRecipeFn>;
export type ProseRecipeSlot = keyof ProseRecipe;
