<script module lang="ts">
  import source from "./compound.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { RichTextEditor } from "@pisagor/svelte/rich-text-editor";
</script>

<RichTextEditor.Root
  defaultValue="<p>Compose the toolbar and content yourself.</p>"
>
  <RichTextEditor.Toolbar />
  <RichTextEditor.Content />
</RichTextEditor.Root>
