<script lang="ts">
  import {
    Clipboard as ClipboardPrimitive,
    type ClipboardLabelProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./clipboard.context";

  let { children, ...rest }: ClipboardLabelProps = $props();
  const part = withContext(() => rest, { name: "Label" });
</script>

<ClipboardPrimitive.Label {...part.props}>
  {@render children?.()}
</ClipboardPrimitive.Label>
