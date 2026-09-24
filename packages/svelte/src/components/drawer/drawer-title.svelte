<script lang="ts">
import type { DrawerTitleProps } from "@ark-ui/svelte/drawer";
import { Drawer as DrawerPrimitive } from "@ark-ui/svelte/drawer";
import { cn } from "@pisagor/utils";
import { useDrawer } from "./drawer.context";

type Props = Omit<DrawerTitleProps, "class"> & { class?: string | undefined };

let { class: className, children, ...rest }: Props = $props();
const { slots } = useDrawer();
</script>

<DrawerPrimitive.Title {...rest} class={slots.title({ class: cn(className) })}>
  {@render children?.()}
</DrawerPrimitive.Title>
