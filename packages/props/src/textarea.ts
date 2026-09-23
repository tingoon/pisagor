import type { TextareaRecipeFn } from "@pisagor/recipes/textarea";

/** Textarea props. */
export interface TextareaProps {
  /**
   * Style recipe override.
   * @defaultValue textareaRecipe
   */
  recipe?: TextareaRecipeFn;
}
