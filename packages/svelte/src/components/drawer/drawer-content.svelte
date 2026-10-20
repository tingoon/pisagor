<script lang="ts">
  import {
    Drawer as DrawerPrimitive,
    type DrawerContentProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./drawer.context";

  let { children, ...rest }: DrawerContentProps = $props();
  const part = withContext(() => rest, { name: "Content" });
</script>

<DrawerPrimitive.Content {...part.props}>
  {@render children?.()}
</DrawerPrimitive.Content>
