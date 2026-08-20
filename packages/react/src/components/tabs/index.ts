import { TabsContent, TabsList, TabsRoot, TabsShorthand, TabsTrigger } from "./tabs";

export type {
  TabsContentProps,
  TabsListProps,
  TabsProps,
  TabsRootProps,
  TabsTriggerProps,
} from "./tabs";

export const Tabs = Object.assign(TabsShorthand, {
  Content: TabsContent,
  List: TabsList,
  Root: TabsRoot,
  Trigger: TabsTrigger,
});
