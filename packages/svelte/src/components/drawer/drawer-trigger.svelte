<script lang="ts">
  import {
    Drawer as DrawerPrimitive,
    type DrawerTriggerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./drawer.context";

  let { children, ...rest }: DrawerTriggerProps = $props();
  const part = withContext(() => rest, { name: "Trigger" });
</script>

<DrawerPrimitive.Trigger {...part.props}>
  {@render children?.()}
</DrawerPrimitive.Trigger>
