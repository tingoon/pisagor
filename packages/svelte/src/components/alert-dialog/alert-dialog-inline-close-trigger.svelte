<script lang="ts">
  import {
    Dialog as AlertDialogPrimitive,
    type DialogCloseTriggerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./alert-dialog.context";

  let { children, ...rest }: DialogCloseTriggerProps = $props();
  const part = withContext(() => rest, {
    name: "CloseTrigger",
    slot: "inline",
  });
</script>

<AlertDialogPrimitive.CloseTrigger {...part.props}>
  {@render children?.()}
</AlertDialogPrimitive.CloseTrigger>
