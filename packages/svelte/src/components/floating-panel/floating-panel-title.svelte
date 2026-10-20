<script lang="ts">
  import {
    FloatingPanel as FloatingPanelPrimitive,
    type FloatingPanelTitleProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./floating-panel.context";

  let { children, ...rest }: FloatingPanelTitleProps = $props();
  const part = withContext(() => rest, { name: "Title" });
</script>

<FloatingPanelPrimitive.Title {...part.props}>
  {@render children?.()}
</FloatingPanelPrimitive.Title>
