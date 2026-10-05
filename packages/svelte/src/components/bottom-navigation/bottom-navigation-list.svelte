<script lang="ts">
import { type TabListProps, Tabs as TabsPrimitive } from "@ark-ui/svelte/tabs";
import { cn } from "@pisagor/utils";
import { useBottomNavigation } from "./bottom-navigation.context";

let { class: className, children, ...rest }: TabListProps = $props();
const { slots } = useBottomNavigation();
</script>

<TabsPrimitive.List {...rest} class={slots.list({ class: cn(className) })}>
  {@render children?.()}
</TabsPrimitive.List>
