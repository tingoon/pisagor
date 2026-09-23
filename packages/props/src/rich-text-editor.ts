import type { RichTextEditorRecipeFn } from "@pisagor/recipes/rich-text-editor";

/** RichTextEditor props. */
export interface RichTextEditorProps {
  /**
   * Style recipe override.
   * @defaultValue richTextEditorRecipe
   */
  recipe?: RichTextEditorRecipeFn;
}
