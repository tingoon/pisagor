<script lang="ts">
  import {
    FloatingPanel as FloatingPanelPrimitive,
    type FloatingPanelPositionerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./floating-panel.context";

  let { children, ...rest }: FloatingPanelPositionerProps = $props();
  const part = withContext(() => rest, { name: "Positioner" });
</script>

<FloatingPanelPrimitive.Positioner {...part.props}>
  {@render children?.()}
</FloatingPanelPrimitive.Positioner>
