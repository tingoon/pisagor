<script lang="ts">
  import {
    FloatingPanel as FloatingPanelPrimitive,
    type FloatingPanelDragTriggerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./floating-panel.context";

  let { children, ...rest }: FloatingPanelDragTriggerProps = $props();
  const part = withContext(() => rest, { name: "DragTrigger" });
</script>

<FloatingPanelPrimitive.DragTrigger {...part.props}>
  {@render children?.()}
</FloatingPanelPrimitive.DragTrigger>
