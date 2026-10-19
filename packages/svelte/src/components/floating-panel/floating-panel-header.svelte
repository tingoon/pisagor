<script lang="ts">
  import {
    FloatingPanel as FloatingPanelPrimitive,
    type FloatingPanelHeaderProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./floating-panel.context";

  let { children, ...rest }: FloatingPanelHeaderProps = $props();
  const part = withContext(() => rest, { name: "Header" });
</script>

<FloatingPanelPrimitive.Header {...part.props}>
  {@render children?.()}
</FloatingPanelPrimitive.Header>
