<script lang="ts">
  import {
    Drawer as DrawerPrimitive,
    type DrawerCloseTriggerProps,
  } from "@ark-ui/svelte";

  let { children, ...rest }: DrawerCloseTriggerProps = $props();
</script>

<DrawerPrimitive.CloseTrigger {...rest}>
  {@render children?.()}
</DrawerPrimitive.CloseTrigger>
