<script lang="ts">
  import {
    Drawer as DrawerPrimitive,
    type DrawerDescriptionProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./drawer.context";

  let { children, ...rest }: DrawerDescriptionProps = $props();
  const part = withContext(() => rest, { name: "Description" });
</script>

<DrawerPrimitive.Description {...part.props}>
  {@render children?.()}
</DrawerPrimitive.Description>
