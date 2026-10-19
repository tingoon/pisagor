<script lang="ts">
  import {
    FloatingPanel as FloatingPanelPrimitive,
    type FloatingPanelControlProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./floating-panel.context";

  let { children, ...rest }: FloatingPanelControlProps = $props();
  const part = withContext(() => rest, { name: "Control" });
</script>

<FloatingPanelPrimitive.Control {...part.props}>
  {@render children?.()}
</FloatingPanelPrimitive.Control>
