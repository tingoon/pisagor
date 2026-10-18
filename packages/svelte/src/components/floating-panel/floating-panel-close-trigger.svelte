<script lang="ts">
  import {
    FloatingPanel as FloatingPanelPrimitive,
    type FloatingPanelCloseTriggerProps,
  } from "@ark-ui/svelte";

  let { children, ...rest }: FloatingPanelCloseTriggerProps = $props();
</script>

<FloatingPanelPrimitive.CloseTrigger {...rest}>
  {@render children?.()}
</FloatingPanelPrimitive.CloseTrigger>
