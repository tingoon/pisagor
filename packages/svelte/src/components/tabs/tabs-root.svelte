<script lang="ts">
import type { TabsRootProps } from "@ark-ui/svelte/tabs";
import { Tabs as TabsPrimitive } from "@ark-ui/svelte/tabs";
import type { TabsProps as BaseTabsProps } from "@pisagor/props";
import { tabsRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { setTabsContext } from "./tabs.context";

type Props = Omit<TabsRootProps, "class"> &
  {
  class?: string | undefined;
  } & BaseTabsProps;

let { children, recipe = tabsRecipe, class: className, ...rest }: Props = $props();
const slots = $derived(recipe());

setTabsContext({
  get slots() {
    return slots;
  },
});
</script>

<TabsPrimitive.Root {...rest} class={slots.base({ class: cn(className) })}>
  {@render children?.()}
</TabsPrimitive.Root>
