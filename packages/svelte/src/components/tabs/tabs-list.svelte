<script lang="ts">
import {
  type TabListProps as ArkTabsListProps,
  Tabs as TabsPrimitive,
} from "@ark-ui/svelte/tabs";
import type { TabsProps as BaseTabsProps } from "@pisagor/props";
import { cn } from "@pisagor/utils";
import { useTabs } from "./tabs.context";

type Props = ArkTabsListProps & BaseTabsProps;

let {
  variant = "default",
  children,
  class: className,
  ...rest
}: Props = $props();
const styles = useTabs();
const slots = $derived(styles.slots);
</script>

<TabsPrimitive.List
  {...rest}
  class={slots.list({ class: cn(className), variant })}
>
  {@render children?.()}
  <TabsPrimitive.Indicator class={slots.indicator({ variant })} />
</TabsPrimitive.List>
