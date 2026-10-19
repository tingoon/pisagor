import type {
  RichTextEditorRecipeFn,
  RichTextEditorVariantProps,
} from "@pisagor/recipes";

/**
 * Shared RichTextEditor root contract: visual variants and recipe override.
 * Used by compound roots; excludes host DOM attributes.
 */
export interface RichTextEditorRootContract extends RichTextEditorVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue richTextEditorRecipe
   */
  recipe?: RichTextEditorRecipeFn;
}
