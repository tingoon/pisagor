<script lang="ts">
import type { FloatingPanelDragTriggerProps } from "@ark-ui/svelte/floating-panel";
import { FloatingPanel as FloatingPanelPrimitive } from "@ark-ui/svelte/floating-panel";

let { children, ...rest }: FloatingPanelDragTriggerProps = $props();
</script>

<FloatingPanelPrimitive.DragTrigger {...rest}>
  {@render children?.()}
</FloatingPanelPrimitive.DragTrigger>
