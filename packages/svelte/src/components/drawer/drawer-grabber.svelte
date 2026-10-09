<script lang="ts">
import {
  type DrawerGrabberProps,
  Drawer as DrawerPrimitive,
} from "@ark-ui/svelte/drawer";
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import { useDrawer } from "./drawer.context";

let { class: className, ...rest }: DrawerGrabberProps = $props();
const styles = useDrawer();
const slots = $derived(styles.slots);
</script>

<Ark as="div" class={slots.grabberWrapper()}>
  <DrawerPrimitive.Grabber
    {...rest}
    class={slots.grabber({ class: cn(className) })}
  >
    <DrawerPrimitive.GrabberIndicator class={slots.grabberIcon()} />
  </DrawerPrimitive.Grabber>
</Ark>
