<script lang="ts">
import type { FloatingPanelStageTriggerProps } from "@ark-ui/svelte/floating-panel";
import { FloatingPanel as FloatingPanelPrimitive } from "@ark-ui/svelte/floating-panel";

let { children, ...rest }: FloatingPanelStageTriggerProps = $props();
</script>

<FloatingPanelPrimitive.StageTrigger {...rest}>
  {@render children?.()}
</FloatingPanelPrimitive.StageTrigger>
