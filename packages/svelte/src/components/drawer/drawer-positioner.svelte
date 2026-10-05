<script lang="ts">
import type { DrawerPositionerProps } from "@ark-ui/svelte/drawer";
import { Drawer as DrawerPrimitive } from "@ark-ui/svelte/drawer";
import type { DrawerProps as BaseDrawerProps } from "@pisagor/props";
import { useDrawer } from "./drawer.context";

type Props = Omit<DrawerPositionerProps, "class"> & {
  class?: string | undefined;
} & BaseDrawerProps;

let {
  variant = "default",
  class: className,
  children,
  ...rest
}: Props = $props();
const { slots } = useDrawer();
</script>

<DrawerPrimitive.Positioner
  {...rest}
  class={slots.positioner({ class: className, variant })}
>
  {@render children?.()}
</DrawerPrimitive.Positioner>
