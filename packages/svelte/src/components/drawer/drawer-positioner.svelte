<script lang="ts">
import type { DrawerPositionerProps } from "@ark-ui/svelte/drawer";
import { Drawer as DrawerPrimitive } from "@ark-ui/svelte/drawer";
import type { DrawerVariantProps } from "@pisagor/recipes/drawer";
import { cn } from "@pisagor/utils";
import { useDrawer } from "./drawer.context";

type Props = Omit<DrawerPositionerProps, "class"> &
  Pick<DrawerVariantProps, "variant"> & {
    class?: string | undefined;
  };

let { variant = "default", class: className, children, ...rest }: Props = $props();
const { slots } = useDrawer();
</script>

<DrawerPrimitive.Positioner {...rest} class={slots.positioner({ class: cn(className), variant })}>
  {@render children?.()}
</DrawerPrimitive.Positioner>
