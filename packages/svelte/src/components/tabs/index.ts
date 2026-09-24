import TabsShorthand from "./tabs.svelte";
import TabsContent from "./tabs-content.svelte";
import TabsList from "./tabs-list.svelte";
import TabsRoot from "./tabs-root.svelte";
import TabsTrigger from "./tabs-trigger.svelte";

export const Tabs = Object.assign(TabsShorthand, {
  Content: TabsContent,
  List: TabsList,
  Root: TabsRoot,
  Trigger: TabsTrigger,
});
