<script lang="ts">
import {
  FloatingPanel as FloatingPanelPrimitive,
  type FloatingPanelTriggerProps,
} from "@ark-ui/svelte/floating-panel";

let { children, ...rest }: FloatingPanelTriggerProps = $props();
</script>

<FloatingPanelPrimitive.Trigger {...rest}>
  {@render children?.()}
</FloatingPanelPrimitive.Trigger>
