<script lang="ts">
  import {
    Drawer as DrawerPrimitive,
    type DrawerPositionerProps,
  } from "@ark-ui/svelte";
  import type { DrawerRootContract } from "@pisagor/props";
  import { cn } from "@pisagor/utils";
  import { useStyles } from "./drawer.context";

  type Props = DrawerPositionerProps & DrawerRootContract;

  let {
    variant = "default",
    class: className,
    children,
    ...rest
  }: Props = $props();
  const styles = useStyles();
  const slots = $derived(styles.slots);
</script>

<DrawerPrimitive.Positioner
  {...rest}
  class={slots.positioner({ class: cn(className), variant })}
>
  {@render children?.()}
</DrawerPrimitive.Positioner>
