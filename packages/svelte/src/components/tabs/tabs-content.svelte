<script lang="ts">
import {
  type TabContentProps,
  Tabs as TabsPrimitive,
} from "@ark-ui/svelte/tabs";
import { withContext } from "./tabs.context";

let { children, ...rest }: TabContentProps = $props();
const part = withContext(() => rest, { name: "Content" });
</script>

<TabsPrimitive.Content {...part.props}>
  {@render children?.()}
</TabsPrimitive.Content>
