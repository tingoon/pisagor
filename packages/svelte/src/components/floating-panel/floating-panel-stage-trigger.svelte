<script lang="ts">
import {
  FloatingPanel as FloatingPanelPrimitive,
  type FloatingPanelStageTriggerProps,
} from "@ark-ui/svelte/floating-panel";

let { children, ...rest }: FloatingPanelStageTriggerProps = $props();
</script>

<FloatingPanelPrimitive.StageTrigger {...rest}>
  {@render children?.()}
</FloatingPanelPrimitive.StageTrigger>
