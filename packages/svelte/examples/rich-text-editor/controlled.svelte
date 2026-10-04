<script lang="ts">
import { RichTextEditor } from "@pisagor/svelte/rich-text-editor";

let value = $state("<p>Controlled content</p>");
</script>

<div class="flex w-full flex-col gap-3">
  <RichTextEditor onValueChange={(v) => (value = v)} {value} />
  <pre class="overflow-auto rounded-lg bg-muted p-3 text-xs">{value}</pre>
</div>
