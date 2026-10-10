<script lang="ts">
import {
  type DrawerPositionerProps,
  Drawer as DrawerPrimitive,
} from "@ark-ui/svelte/drawer";
import type { DrawerProps as BaseDrawerProps } from "@pisagor/props";
import { cn } from "@pisagor/utils";
import { useDrawer } from "./drawer.context";

type Props = DrawerPositionerProps & BaseDrawerProps;

let {
  variant = "default",
  class: className,
  children,
  ...rest
}: Props = $props();
const styles = useDrawer();
const slots = $derived(styles.slots);
</script>

<DrawerPrimitive.Positioner
  {...rest}
  class={slots.positioner({ class: cn(className), variant })}
>
  {@render children?.()}
</DrawerPrimitive.Positioner>
