<script lang="ts">
  import {
    FloatingPanel as FloatingPanelPrimitive,
    type FloatingPanelBodyProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./floating-panel.context";

  let { children, ...rest }: FloatingPanelBodyProps = $props();
  const part = withContext(() => rest, { name: "Body" });
</script>

<FloatingPanelPrimitive.Body {...part.props}>
  {@render children?.()}
</FloatingPanelPrimitive.Body>
