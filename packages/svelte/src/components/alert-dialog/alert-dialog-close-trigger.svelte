<script lang="ts">
  import {
    Dialog as AlertDialogPrimitive,
    type DialogCloseTriggerProps,
  } from "@ark-ui/svelte";

  let { children, ...rest }: DialogCloseTriggerProps = $props();
</script>

<AlertDialogPrimitive.CloseTrigger {...rest}>
  {@render children?.()}
</AlertDialogPrimitive.CloseTrigger>
