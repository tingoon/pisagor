<script lang="ts">
  import {
    Clipboard as ClipboardPrimitive,
    type ClipboardControlProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./clipboard.context";

  let { children, ...rest }: ClipboardControlProps = $props();
  const part = withContext(() => rest, { name: "Control" });
</script>

<ClipboardPrimitive.Control {...part.props}>
  {@render children?.()}
</ClipboardPrimitive.Control>
