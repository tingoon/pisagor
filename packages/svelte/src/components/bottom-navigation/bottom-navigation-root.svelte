<script lang="ts">
import type { TabsRootProps } from "@ark-ui/svelte/tabs";
import { Tabs as TabsPrimitive } from "@ark-ui/svelte/tabs";
import type { BottomNavigationProps as BaseBottomNavigationProps } from "@pisagor/props";
import { bottomNavigationRecipe } from "@pisagor/recipes";
import { setBottomNavigationContext } from "./bottom-navigation.context";

type Props = Omit<TabsRootProps, "class"> & {
  class?: string | undefined;
} & BaseBottomNavigationProps;

let {
  recipe = bottomNavigationRecipe,
  class: className,
  children,
  ...rest
}: Props = $props();
const slots = $derived(recipe());
setBottomNavigationContext({
  get slots() {
    return slots;
  },
});
</script>

<TabsPrimitive.Root {...rest} class={slots.base({ class: className })}>
  {@render children?.()}
</TabsPrimitive.Root>
