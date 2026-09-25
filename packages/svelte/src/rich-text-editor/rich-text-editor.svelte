<script lang="ts">
import type { ComponentProps } from "svelte";
import RichTextEditorContent from "./rich-text-editor-content.svelte";
import RichTextEditorRoot from "./rich-text-editor-root.svelte";
import RichTextEditorToolbar from "./rich-text-editor-toolbar.svelte";

type Props = Omit<ComponentProps<typeof RichTextEditorRoot>, "children">;

let props: Props = $props();
</script>

<RichTextEditorRoot {...props}>
  <RichTextEditorToolbar />
  <RichTextEditorContent />
</RichTextEditorRoot>
