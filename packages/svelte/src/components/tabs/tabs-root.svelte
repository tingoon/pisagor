<script lang="ts">
  import { Tabs as TabsPrimitive, type TabsRootProps } from "@ark-ui/svelte";
  import type { TabsRootContract } from "@pisagor/contracts";
  import { withProvider } from "./tabs.context";

  type Props = TabsRootProps & TabsRootContract;

  let { children, ...rest }: Props = $props();
  const root = withProvider(() => rest, { name: "Root" });
</script>

<TabsPrimitive.Root {...root.props}>
  {@render children?.()}
</TabsPrimitive.Root>
