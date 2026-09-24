<script lang="ts">
import type { TabContentProps } from "@ark-ui/svelte/tabs";
import { Tabs as TabsPrimitive } from "@ark-ui/svelte/tabs";
import { cn } from "@pisagor/utils";
import { useTabs } from "./tabs.context";

type Props = Omit<TabContentProps, "class"> & { class?: string | undefined };

let { class: className, children, ...rest }: Props = $props();
const { slots } = useTabs();
</script>

<TabsPrimitive.Content {...rest} class={slots.content({ class: cn(className) })}>
  {@render children?.()}
</TabsPrimitive.Content>
