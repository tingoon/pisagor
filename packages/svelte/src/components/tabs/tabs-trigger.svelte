<script lang="ts">
import {
  Tabs as TabsPrimitive,
  type TabTriggerProps,
} from "@ark-ui/svelte/tabs";
import { cn } from "@pisagor/utils";
import { useTabs } from "./tabs.context";

let { class: className, children, ...rest }: TabTriggerProps = $props();
const { slots } = useTabs();
</script>

<TabsPrimitive.Trigger
  {...rest}
  class={slots.trigger({ class: cn(className) })}
>
  {@render children?.()}
</TabsPrimitive.Trigger>
