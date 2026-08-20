import { TabsContent, TabsList, TabsRoot, TabsTrigger } from "./tabs";

export type {
  TabsContentProps,
  TabsListProps,
  TabsRootProps,
  TabsTriggerProps,
} from "./tabs";

export const Tabs = Object.assign(TabsRoot, {
  Content: TabsContent,
  List: TabsList,
  Trigger: TabsTrigger,
});
