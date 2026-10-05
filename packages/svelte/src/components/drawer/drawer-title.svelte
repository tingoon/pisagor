<script lang="ts">
import {
  Drawer as DrawerPrimitive,
  type DrawerTitleProps,
} from "@ark-ui/svelte/drawer";
import { cn } from "@pisagor/utils";
import { useDrawer } from "./drawer.context";

let { class: className, children, ...rest }: DrawerTitleProps = $props();
const { slots } = useDrawer();
</script>

<DrawerPrimitive.Title {...rest} class={slots.title({ class: cn(className) })}>
  {@render children?.()}
</DrawerPrimitive.Title>
