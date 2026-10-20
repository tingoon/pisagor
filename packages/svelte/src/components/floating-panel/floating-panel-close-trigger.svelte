<script lang="ts">
  import {
    FloatingPanel as FloatingPanelPrimitive,
    type FloatingPanelCloseTriggerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./floating-panel.context";

  let { children, ...rest }: FloatingPanelCloseTriggerProps = $props();
  const part = withContext(() => rest, { name: "CloseTrigger" });
</script>

<FloatingPanelPrimitive.CloseTrigger {...part.props}>
  {@render children?.()}
</FloatingPanelPrimitive.CloseTrigger>
