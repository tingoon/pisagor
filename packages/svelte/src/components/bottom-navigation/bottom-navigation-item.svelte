<script lang="ts">
import {
  Tabs as TabsPrimitive,
  type TabTriggerProps,
} from "@ark-ui/svelte/tabs";
import type { BottomNavigationItemProps as BaseBottomNavigationItemProps } from "@pisagor/props";
import { withBottomNavigationItemProvider } from "./bottom-navigation.context";

type Props = TabTriggerProps & BaseBottomNavigationItemProps;

let { children, ...rest }: Props = $props();
const root = withBottomNavigationItemProvider(() => rest, {
  name: "Item",
  slot: "base",
});
</script>

<TabsPrimitive.Trigger {...root.props}>
  {@render children?.()}
</TabsPrimitive.Trigger>
