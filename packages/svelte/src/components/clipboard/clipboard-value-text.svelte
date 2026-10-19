<script lang="ts">
  import {
    Clipboard as ClipboardPrimitive,
    type ClipboardValueTextProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./clipboard.context";

  let { children, ...rest }: ClipboardValueTextProps = $props();
  const part = withContext(() => rest, { name: "ValueText" });
</script>

<ClipboardPrimitive.ValueText {...part.props}>
  {@render children?.()}
</ClipboardPrimitive.ValueText>
