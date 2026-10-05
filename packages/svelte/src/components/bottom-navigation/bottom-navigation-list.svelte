<script lang="ts">
import type { TabListProps } from "@ark-ui/svelte/tabs";
import { Tabs as TabsPrimitive } from "@ark-ui/svelte/tabs";
import { useBottomNavigation } from "./bottom-navigation.context";

type Props = Omit<TabListProps, "class"> & { class?: string | undefined };
let { class: className, children, ...rest }: Props = $props();
const { slots } = useBottomNavigation();
</script>

<TabsPrimitive.List {...rest} class={slots.list({ class: className })}>
  {@render children?.()}
</TabsPrimitive.List>
