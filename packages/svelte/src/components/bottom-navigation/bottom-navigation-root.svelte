<script lang="ts">
import { Tabs as TabsPrimitive, type TabsRootProps } from "@ark-ui/svelte/tabs";
import type { BottomNavigationProps as BaseBottomNavigationProps } from "@pisagor/props";
import { bottomNavigationRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { setBottomNavigationContext } from "./bottom-navigation.context";

type Props = TabsRootProps & BaseBottomNavigationProps;

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

<TabsPrimitive.Root {...rest} class={slots.base({ class: cn(className) })}>
  {@render children?.()}
</TabsPrimitive.Root>
