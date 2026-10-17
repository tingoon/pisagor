<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { RichTextEditorField } from "@pisagor/svelte-form";
</script>

<RichTextEditorField
  description="Shown on the product page. Use headings and lists to structure it."
  id="rich-text-editor-field-description"
  label="Product description"
/>
