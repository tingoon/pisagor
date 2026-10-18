import type { TextareaRecipeFn, TextareaVariantProps } from "@pisagor/recipes";

/** Textarea props. */
export interface TextareaProps extends TextareaVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue textareaRecipe
   */
  recipe?: TextareaRecipeFn;
}
