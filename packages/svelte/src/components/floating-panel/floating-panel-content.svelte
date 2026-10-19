<script lang="ts">
  import {
    FloatingPanel as FloatingPanelPrimitive,
    type FloatingPanelContentProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./floating-panel.context";

  let { children, ...rest }: FloatingPanelContentProps = $props();
  const part = withContext(() => rest, { name: "Content" });
</script>

<FloatingPanelPrimitive.Content {...part.props}>
  {@render children?.()}
</FloatingPanelPrimitive.Content>
