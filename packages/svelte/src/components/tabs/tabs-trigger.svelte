<script lang="ts">
import type { TabTriggerProps } from "@ark-ui/svelte/tabs";
import { Tabs as TabsPrimitive } from "@ark-ui/svelte/tabs";
import { cn } from "@pisagor/utils";
import { useTabs } from "./tabs.context";

type Props = Omit<TabTriggerProps, "class"> & { class?: string | undefined };

let { class: className, children, ...rest }: Props = $props();
const { slots } = useTabs();
</script>

<TabsPrimitive.Trigger {...rest} class={slots.trigger({ class: cn(className) })}>
  {@render children?.()}
</TabsPrimitive.Trigger>
