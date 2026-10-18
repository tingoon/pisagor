<script lang="ts">
  import { type TabTriggerProps, Tabs as TabsPrimitive } from "@ark-ui/svelte";
  import { withContext } from "./tabs.context";

  let { children, ...rest }: TabTriggerProps = $props();
  const part = withContext(() => rest, { name: "Trigger" });
</script>

<TabsPrimitive.Trigger {...part.props}>
  {@render children?.()}
</TabsPrimitive.Trigger>
