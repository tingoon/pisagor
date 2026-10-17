<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { RichTextEditor } from "@pisagor/svelte/rich-text-editor";
</script>

<RichTextEditor defaultValue="<p>Hello <strong>world</strong></p>" />
