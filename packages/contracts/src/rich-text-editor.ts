import type { RichTextEditorRecipeFn } from "@pisagor/recipes";

/**
 * Shared RichTextEditor root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface RichTextEditorRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue richTextEditorRecipe
   */
  recipe?: RichTextEditorRecipeFn;
}
