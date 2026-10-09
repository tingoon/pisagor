<script lang="ts">
import { type TabListProps, Tabs as TabsPrimitive } from "@ark-ui/svelte/tabs";
import { withBottomNavigationContext } from "./bottom-navigation.context";

let { children, ...rest }: TabListProps = $props();
const part = withBottomNavigationContext(() => rest, { name: "List" });
</script>

<TabsPrimitive.List {...part.props}>
  {@render children?.()}
</TabsPrimitive.List>
