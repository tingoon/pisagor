<script lang="ts">
import type { FloatingPanelTriggerProps } from "@ark-ui/svelte/floating-panel";
import { FloatingPanel as FloatingPanelPrimitive } from "@ark-ui/svelte/floating-panel";

let { children, ...rest }: FloatingPanelTriggerProps = $props();
</script>

<FloatingPanelPrimitive.Trigger {...rest}> {@render children?.()} </FloatingPanelPrimitive.Trigger>
