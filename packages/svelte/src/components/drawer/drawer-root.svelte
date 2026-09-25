<script lang="ts">
import type { DrawerRootProps } from "@ark-ui/svelte/drawer";
import { Drawer as DrawerPrimitive } from "@ark-ui/svelte/drawer";
import { drawerRecipe } from "@pisagor/recipes/drawer";
import { setDrawerContext } from "./drawer.context";

type Props = DrawerRootProps & { recipe?: typeof drawerRecipe };

let { recipe = drawerRecipe, children, ...rest }: Props = $props();
const slots = $derived(recipe());

setDrawerContext({
  get slots() {
    return slots;
  },
});
</script>

<DrawerPrimitive.Root {...rest}> {@render children?.()} </DrawerPrimitive.Root>
