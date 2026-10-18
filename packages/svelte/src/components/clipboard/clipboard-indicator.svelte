<script lang="ts">
  import {
    Clipboard as ClipboardPrimitive,
    type ClipboardIndicatorProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./clipboard.context";

  let { children, ...rest }: ClipboardIndicatorProps = $props();
  const part = withContext(() => rest, { name: "Indicator" });
</script>

<ClipboardPrimitive.Indicator {...part.props}>
  {@render children?.()}
</ClipboardPrimitive.Indicator>
