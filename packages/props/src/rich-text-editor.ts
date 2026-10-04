import type { RichTextEditorRecipeFn } from "@pisagor/recipes";

/** RichTextEditor props. */
export interface RichTextEditorProps {
  /**
   * Style recipe override.
   * @defaultValue richTextEditorRecipe
   */
  recipe?: RichTextEditorRecipeFn;
}
