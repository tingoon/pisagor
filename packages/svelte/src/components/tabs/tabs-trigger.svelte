<script lang="ts">
import {
  Tabs as TabsPrimitive,
  type TabTriggerProps,
} from "@ark-ui/svelte/tabs";
import { withContext } from "./tabs.context";

let { children, ...rest }: TabTriggerProps = $props();
const part = withContext(() => rest, { name: "Trigger" });
</script>

<TabsPrimitive.Trigger {...part.props}>
  {@render children?.()}
</TabsPrimitive.Trigger>
