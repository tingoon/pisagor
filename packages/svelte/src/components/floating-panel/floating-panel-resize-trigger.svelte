<script lang="ts">
  import {
    FloatingPanel as FloatingPanelPrimitive,
    type FloatingPanelResizeTriggerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./floating-panel.context";

  let { children, ...rest }: FloatingPanelResizeTriggerProps = $props();
  const part = withContext(() => rest, { name: "ResizeTrigger" });
</script>

<FloatingPanelPrimitive.ResizeTrigger {...part.props}>
  {@render children?.()}
</FloatingPanelPrimitive.ResizeTrigger>
