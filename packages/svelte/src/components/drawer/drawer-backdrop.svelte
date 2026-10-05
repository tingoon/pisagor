<script lang="ts">
import {
  type DrawerBackdropProps,
  Drawer as DrawerPrimitive,
} from "@ark-ui/svelte/drawer";
import { cn } from "@pisagor/utils";
import { useDrawer } from "./drawer.context";

let { class: className, ...rest }: DrawerBackdropProps = $props();
const { slots } = useDrawer();
</script>

<DrawerPrimitive.Backdrop
  {...rest}
  class={slots.backdrop({ class: cn(className) })}
/>
