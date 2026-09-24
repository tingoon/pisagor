<script lang="ts">
import type { TabListProps as ArkTabsListProps } from "@ark-ui/svelte/tabs";
import { Tabs as TabsPrimitive } from "@ark-ui/svelte/tabs";
import type { TabsVariantProps } from "@pisagor/recipes/tabs";
import { cn } from "@pisagor/utils";
import { useTabs } from "./tabs.context";

type Props = Omit<ArkTabsListProps, "class"> &
  Pick<TabsVariantProps, "variant"> & {
    class?: string | undefined;
  };

let { variant = "default", children, class: className, ...rest }: Props = $props();
const { slots } = useTabs();
</script>

<TabsPrimitive.List {...rest} class={slots.list({ class: cn(className), variant })}>
  {@render children?.()}
  <TabsPrimitive.Indicator class={slots.indicator({ variant })} />
</TabsPrimitive.List>
