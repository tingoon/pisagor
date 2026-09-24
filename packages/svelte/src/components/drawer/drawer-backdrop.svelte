<script lang="ts">
import type { DrawerBackdropProps } from "@ark-ui/svelte/drawer";
import { Drawer as DrawerPrimitive } from "@ark-ui/svelte/drawer";
import { cn } from "@pisagor/utils";
import { useDrawer } from "./drawer.context";

type Props = Omit<DrawerBackdropProps, "class"> & { class?: string | undefined };

let { class: className, ...rest }: Props = $props();
const { slots } = useDrawer();
</script>

<DrawerPrimitive.Backdrop {...rest} class={slots.backdrop({ class: cn(className) })} />
