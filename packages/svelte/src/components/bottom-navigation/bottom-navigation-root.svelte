<script lang="ts">
import { Tabs as TabsPrimitive, type TabsRootProps } from "@ark-ui/svelte/tabs";
import type { BottomNavigationProps as BaseBottomNavigationProps } from "@pisagor/props";
import { withBottomNavigationProvider } from "./bottom-navigation.context";

type Props = TabsRootProps & BaseBottomNavigationProps;

let { children, ...rest }: Props = $props();
const root = withBottomNavigationProvider(() => rest, {
  name: "Root",
  slot: "base",
});
</script>

<TabsPrimitive.Root {...root.props}>
  {@render children?.()}
</TabsPrimitive.Root>
