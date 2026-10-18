<script lang="ts">
  import {
    Clipboard as ClipboardPrimitive,
    type ClipboardRootProps,
  } from "@ark-ui/svelte";

  let { children, ...rest }: ClipboardRootProps = $props();
</script>

<ClipboardPrimitive.Root {...rest}>
  {@render children?.()}
</ClipboardPrimitive.Root>
