<script lang="ts">
  import {
    Drawer as DrawerPrimitive,
    type DrawerGrabberIndicatorProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./drawer.context";

  let { children, ...rest }: DrawerGrabberIndicatorProps = $props();
  const part = withContext(() => rest, {
    name: "GrabberIndicator",
    slot: "grabber",
  });
</script>

<DrawerPrimitive.GrabberIndicator {...part.props}>
  {@render children?.()}
</DrawerPrimitive.GrabberIndicator>
