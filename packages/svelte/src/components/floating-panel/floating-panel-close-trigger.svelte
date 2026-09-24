<script lang="ts">
import type { FloatingPanelCloseTriggerProps } from "@ark-ui/svelte/floating-panel";
import { FloatingPanel as FloatingPanelPrimitive } from "@ark-ui/svelte/floating-panel";

let { children, ...rest }: FloatingPanelCloseTriggerProps = $props();
</script>

<FloatingPanelPrimitive.CloseTrigger {...rest}>
  {@render children?.()}
</FloatingPanelPrimitive.CloseTrigger>
