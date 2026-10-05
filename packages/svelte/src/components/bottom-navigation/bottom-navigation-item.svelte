<script lang="ts">
import {
  Tabs as TabsPrimitive,
  type TabTriggerProps,
} from "@ark-ui/svelte/tabs";
import type { BottomNavigationItemProps as BaseBottomNavigationItemProps } from "@pisagor/props";
import { bottomNavigationItemRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { setBottomNavigationItemContext } from "./bottom-navigation.context";

type Props = TabTriggerProps & BaseBottomNavigationItemProps;

let {
  children,
  recipe = bottomNavigationItemRecipe,
  class: className,
  ...rest
}: Props = $props();

const slots = $derived(recipe());
setBottomNavigationItemContext({
  get slots() {
    return slots;
  },
});
</script>

<TabsPrimitive.Trigger {...rest} class={slots.base({ class: cn(className) })}>
  {@render children?.()}
</TabsPrimitive.Trigger>
