<script lang="ts">
import {
  type TabContentProps,
  Tabs as TabsPrimitive,
} from "@ark-ui/svelte/tabs";
import { cn } from "@pisagor/utils";
import { useTabs } from "./tabs.context";

let { class: className, children, ...rest }: TabContentProps = $props();
const { slots } = useTabs();
</script>

<TabsPrimitive.Content
  {...rest}
  class={slots.content({ class: cn(className) })}
>
  {@render children?.()}
</TabsPrimitive.Content>
