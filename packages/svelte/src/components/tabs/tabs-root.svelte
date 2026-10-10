<script lang="ts">
import { Tabs as TabsPrimitive, type TabsRootProps } from "@ark-ui/svelte/tabs";
import type { TabsProps as BaseTabsProps } from "@pisagor/props";
import { withProvider } from "./tabs.context";

type Props = TabsRootProps & BaseTabsProps;

let { children, ...rest }: Props = $props();
const root = withProvider(() => rest, { name: "Root", slot: "base" });
</script>

<TabsPrimitive.Root {...root.props}>
  {@render children?.()}
</TabsPrimitive.Root>
