<script lang="ts">
  import {
    FloatingPanel as FloatingPanelPrimitive,
    type FloatingPanelStageTriggerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./floating-panel.context";

  let { children, ...rest }: FloatingPanelStageTriggerProps = $props();
  const part = withContext(() => rest, { name: "StageTrigger" });
</script>

<FloatingPanelPrimitive.StageTrigger {...part.props}>
  {@render children?.()}
</FloatingPanelPrimitive.StageTrigger>
