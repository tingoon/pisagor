<script lang="ts">
  import {
    Drawer as DrawerPrimitive,
    type DrawerPositionerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./drawer.context";

  let { children, ...rest }: DrawerPositionerProps = $props();
  const part = withContext(() => rest, { name: "Positioner" });
</script>

<DrawerPrimitive.Positioner {...part.props}>
  {@render children?.()}
</DrawerPrimitive.Positioner>
