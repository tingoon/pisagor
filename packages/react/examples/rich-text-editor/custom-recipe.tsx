import { RichTextEditor } from "@pisagor/react/rich-text-editor";
import { richTextEditorRecipe } from "@pisagor/recipes";
import { tv } from "tailwind-variants";

const brandRichTextEditorRecipe = tv({
  extend: richTextEditorRecipe,
  slots: {
    base: "focus-within:border-emerald-600",
    toolbar: "bg-emerald-500/5",
  },
  variants: {},
});

export function CustomRecipe() {
  return (
    <RichTextEditor
      defaultValue="<p>Start writing…</p>"
      recipe={brandRichTextEditorRecipe}
    />
  );
}
