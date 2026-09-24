<script lang="ts">
import type { TabTriggerProps } from "@ark-ui/svelte/tabs";
import { Tabs as TabsPrimitive } from "@ark-ui/svelte/tabs";
import { bottomNavigationItemRecipe } from "@pisagor/recipes/bottom-navigation";
import { cn } from "@pisagor/utils";
import { setBottomNavigationItemContext } from "./bottom-navigation.context";

type Props = Omit<TabTriggerProps, "class"> & {
  class?: string | undefined;
  itemRecipe?: typeof bottomNavigationItemRecipe;
};

let {
  children,
  itemRecipe = bottomNavigationItemRecipe,
  class: className,
  ...rest
}: Props = $props();

const slots = $derived(itemRecipe());
setBottomNavigationItemContext({
  get slots() {
    return slots;
  },
});
</script>

<TabsPrimitive.Trigger {...rest} class={slots.base({ class: cn(className) })}>
  {@render children?.()}
</TabsPrimitive.Trigger>
