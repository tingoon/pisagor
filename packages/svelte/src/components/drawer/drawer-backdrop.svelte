<script lang="ts">
  import {
    Drawer as DrawerPrimitive,
    type DrawerBackdropProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./drawer.context";

  let { children, ...rest }: DrawerBackdropProps = $props();
  const part = withContext(() => rest, { name: "Backdrop" });
</script>

<DrawerPrimitive.Backdrop {...part.props}>
  {@render children?.()}
</DrawerPrimitive.Backdrop>
