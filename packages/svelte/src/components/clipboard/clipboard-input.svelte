<script lang="ts">
  import {
    Clipboard as ClipboardPrimitive,
    type ClipboardInputProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./clipboard.context";

  let { ...rest }: ClipboardInputProps = $props();
  const part = withContext(() => rest, { name: "Input" });
</script>

<ClipboardPrimitive.Input {...part.props} />
