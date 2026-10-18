<script lang="ts">
  import {
    Editable as EditablePrimitive,
    type EditableCancelTriggerProps,
  } from "@ark-ui/svelte";

  let { children, ...rest }: EditableCancelTriggerProps = $props();
</script>

<EditablePrimitive.CancelTrigger {...rest}>
  {@render children?.()}
</EditablePrimitive.CancelTrigger>
