<script lang="ts">
  import {
    FloatingPanel as FloatingPanelPrimitive,
    type FloatingPanelDragTriggerProps,
  } from "@ark-ui/svelte";

  let { children, ...rest }: FloatingPanelDragTriggerProps = $props();
</script>

<FloatingPanelPrimitive.DragTrigger {...rest}>
  {@render children?.()}
</FloatingPanelPrimitive.DragTrigger>
