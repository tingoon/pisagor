<script lang="ts">
import type { DrawerRootProps } from "@ark-ui/svelte/drawer";
import { Drawer as DrawerPrimitive } from "@ark-ui/svelte/drawer";
import type { DrawerProps as BaseDrawerProps } from "@pisagor/props";
import { drawerRecipe } from "@pisagor/recipes";
import { setDrawerContext } from "./drawer.context";

type Props = DrawerRootProps & BaseDrawerProps;

let { recipe = drawerRecipe, children, ...rest }: Props = $props();
const slots = $derived(recipe());

setDrawerContext({
  get slots() {
    return slots;
  },
});
</script>

<DrawerPrimitive.Root {...rest}> {@render children?.()} </DrawerPrimitive.Root>
