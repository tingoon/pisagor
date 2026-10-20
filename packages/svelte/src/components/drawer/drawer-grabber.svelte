<script lang="ts">
  import {
    Drawer as DrawerPrimitive,
    type DrawerGrabberProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./drawer.context";

  let { children, ...rest }: DrawerGrabberProps = $props();
  const part = withContext(() => rest, {
    name: "Grabber",
    slot: "grabberWrapper",
  });
</script>

<DrawerPrimitive.Grabber {...part.props}>
  {@render children?.()}
</DrawerPrimitive.Grabber>
