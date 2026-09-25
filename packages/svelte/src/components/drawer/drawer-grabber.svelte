<script lang="ts">
import type { DrawerGrabberProps } from "@ark-ui/svelte/drawer";
import { Drawer as DrawerPrimitive } from "@ark-ui/svelte/drawer";
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import { useDrawer } from "./drawer.context";

type Props = Omit<DrawerGrabberProps, "class"> & { class?: string | undefined };

let { class: className, ...rest }: Props = $props();
const { slots } = useDrawer();
</script>

<Ark as="div" class={slots.grabberWrapper()}>
  <DrawerPrimitive.Grabber {...rest} class={slots.grabber({ class: cn(className) })}>
    <DrawerPrimitive.GrabberIndicator class={slots.grabberIcon()} />
  </DrawerPrimitive.Grabber>
</Ark>
