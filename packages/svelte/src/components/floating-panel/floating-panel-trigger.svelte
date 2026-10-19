<script lang="ts">
  import {
    FloatingPanel as FloatingPanelPrimitive,
    type FloatingPanelTriggerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./floating-panel.context";

  let { children, ...rest }: FloatingPanelTriggerProps = $props();
  const part = withContext(() => rest, { name: "Trigger" });
</script>

<FloatingPanelPrimitive.Trigger {...part.props}>
  {@render children?.()}
</FloatingPanelPrimitive.Trigger>
