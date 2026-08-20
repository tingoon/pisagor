import { TabsContent, TabsList, TabsRoot, TabsShorthand, TabsTrigger } from "./tabs";

export type { TabsPresetItem } from "./tabs";

export const Tabs = Object.assign(TabsShorthand, {
  Content: TabsContent,
  List: TabsList,
  Root: TabsRoot,
  Trigger: TabsTrigger,
});
