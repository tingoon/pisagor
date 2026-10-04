import type { TextareaRecipeFn } from "@pisagor/recipes";

/** Textarea props. */
export interface TextareaProps {
  /**
   * Style recipe override.
   * @defaultValue textareaRecipe
   */
  recipe?: TextareaRecipeFn;
}
