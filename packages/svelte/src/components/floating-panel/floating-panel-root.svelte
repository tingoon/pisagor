<script lang="ts">
  import {
    FloatingPanel as FloatingPanelPrimitive,
    type FloatingPanelRootProps,
  } from "@ark-ui/svelte";
  import type { FloatingPanelRootContract } from "@pisagor/contracts";
  import { withProvider } from "./floating-panel.context";

  type Props = FloatingPanelRootProps & FloatingPanelRootContract;

  let { children, ...rest }: Props = $props();
  // The root renders no element; `base` is an empty slot.
  const root = withProvider(() => rest, { name: "Root", slot: "base" });
</script>

<FloatingPanelPrimitive.Root {...root.props}>
  {@render children?.()}
</FloatingPanelPrimitive.Root>
