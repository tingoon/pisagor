<script lang="ts">
  import {
    Dialog as DialogPrimitive,
    type DialogCloseTriggerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./dialog.context";

  let { children, ...rest }: DialogCloseTriggerProps = $props();
  const part = withContext(() => rest, {
    name: "CloseTrigger",
    slot: "inline",
  });
</script>

<DialogPrimitive.CloseTrigger {...part.props}>
  {@render children?.()}
</DialogPrimitive.CloseTrigger>
