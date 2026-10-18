<script lang="ts">
  import type { TabsRootProps } from "@ark-ui/svelte";
  import type { TabsProps as BaseTabsProps } from "@pisagor/props";
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
  type Props = Omit<TabsRootProps, "children"> & {
    items?: TabsPresetItem[];
    /**
     * Whether to render the animated active-tab indicator.
     *
     * @defaultValue true
     */
    showIndicator?: boolean;
  } & BaseTabsProps;

  let {
    variant,
    items,
    showIndicator,
    class: className,
    ...rest
  }: Props = $props();
</script>

<TabsRoot {...rest} class={className}>
  <TabsList {showIndicator} {variant}>
    {#each items ?? [] as tab (tab.value)}
      <TabsTrigger disabled={tab.disabled} value={tab.value}
        >{tab.label}</TabsTrigger
      >
    {/each}
  </TabsList>
  {#each items ?? [] as tab (tab.value)}
    <TabsContent value={tab.value}>{tab.content}</TabsContent>
  {/each}
</TabsRoot>
