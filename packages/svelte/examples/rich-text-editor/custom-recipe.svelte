<script lang="ts">
import { richTextEditorRecipe } from "@pisagor/recipes";
import { RichTextEditor } from "@pisagor/svelte/rich-text-editor";
import { tv } from "tailwind-variants";

const brandRichTextEditorRecipe = tv({
  extend: richTextEditorRecipe,
  slots: {
    base: "focus-within:border-emerald-600",
    toolbar: "bg-emerald-500/5",
  },
  variants: {},
});
</script>

<RichTextEditor
  defaultValue="<p>Start writing…</p>"
  recipe={brandRichTextEditorRecipe}
/>
