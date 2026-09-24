<script lang="ts">
import type { TabsRootProps } from "@ark-ui/svelte/tabs";
import type { TabsVariantProps } from "@pisagor/recipes/tabs";
import TabsContent from "./tabs-content.svelte";
import TabsList from "./tabs-list.svelte";
import TabsRoot from "./tabs-root.svelte";
import TabsTrigger from "./tabs-trigger.svelte";

type TabsPresetItem = {
  content: string;
  disabled?: boolean;
  label: string;
  value: string;
};

type Props = Omit<TabsRootProps, "children" | "class"> &
  Pick<TabsVariantProps, "variant"> & {
    class?: string | undefined;
    items?: TabsPresetItem[];
  };

let { variant, items, class: className, ...rest }: Props = $props();
</script>

<TabsRoot {...rest} class={className}>
  <TabsList {variant}>
    {#each items ?? [] as tab (tab.value)}
      <TabsTrigger disabled={tab.disabled} value={tab.value}>{tab.label}</TabsTrigger>
    {/each}
  </TabsList>
  {#each items ?? [] as tab (tab.value)}
    <TabsContent value={tab.value}>{tab.content}</TabsContent>
  {/each}
</TabsRoot>
