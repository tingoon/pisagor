<script lang="ts">
  import {
    Drawer as DrawerPrimitive,
    type DrawerCloseTriggerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./drawer.context";

  let { children, ...rest }: DrawerCloseTriggerProps = $props();
  const part = withContext(() => rest, { name: "CloseTrigger" });
</script>

<DrawerPrimitive.CloseTrigger {...part.props}>
  {@render children?.()}
</DrawerPrimitive.CloseTrigger>
