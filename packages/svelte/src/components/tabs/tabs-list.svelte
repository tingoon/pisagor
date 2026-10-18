<script lang="ts">
  import {
    type TabListProps as ArkTabsListProps,
    Tabs as TabsPrimitive,
  } from "@ark-ui/svelte";
  import type { TabsProps as BaseTabsProps } from "@pisagor/props";
  import { cn } from "@pisagor/utils";
  import { useStyles } from "./tabs.context";

  type Props = ArkTabsListProps &
    BaseTabsProps & {
      /**
       * Whether to render the animated active-tab indicator.
       *
       * @defaultValue true
       */
      showIndicator?: boolean;
    };

  let {
    variant = "default",
    showIndicator = true,
    children,
    class: className,
    ...rest
  }: Props = $props();
  const styles = useStyles();
  const slots = $derived(styles.slots);
</script>

<TabsPrimitive.List
  {...rest}
  class={slots.list({ class: cn(className), variant })}
>
  {@render children?.()}
  {#if showIndicator}
    <TabsPrimitive.Indicator class={slots.indicator({ variant })} />
  {/if}
</TabsPrimitive.List>
