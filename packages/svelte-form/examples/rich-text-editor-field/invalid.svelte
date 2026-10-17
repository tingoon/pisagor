<script module lang="ts">
  import source from "./invalid.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { RichTextEditorField } from "@pisagor/svelte-form";
</script>

<RichTextEditorField
  error="Please enter some content."
  id="rich-text-editor-field-body-invalid"
  invalid
  label="Body"
/>
