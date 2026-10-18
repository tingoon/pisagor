<script lang="ts">
  import {
    Dialog as DialogPrimitive,
    type DialogCloseTriggerProps,
  } from "@ark-ui/svelte";

  let { children, ...rest }: DialogCloseTriggerProps = $props();
</script>

<DialogPrimitive.CloseTrigger {...rest}>
  {@render children?.()}
</DialogPrimitive.CloseTrigger>
