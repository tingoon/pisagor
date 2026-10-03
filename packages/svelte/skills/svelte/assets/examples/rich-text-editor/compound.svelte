<script lang="ts">
import { RichTextEditor } from "@pisagor/svelte/rich-text-editor";
</script>

<RichTextEditor.Root defaultValue="<p>Compose the toolbar and content yourself.</p>">
      <RichTextEditor.Toolbar />
      <RichTextEditor.Content />
    </RichTextEditor.Root>
