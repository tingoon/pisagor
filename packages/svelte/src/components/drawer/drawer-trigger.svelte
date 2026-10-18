<script lang="ts">
  import {
    Drawer as DrawerPrimitive,
    type DrawerTriggerProps,
  } from "@ark-ui/svelte";

  let { children, ...rest }: DrawerTriggerProps = $props();
</script>

<DrawerPrimitive.Trigger {...rest}>
  {@render children?.()}
</DrawerPrimitive.Trigger>
