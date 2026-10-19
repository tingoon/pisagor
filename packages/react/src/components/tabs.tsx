import { Tabs as TabsPrimitive } from "@ark-ui/react";
import type {
  TabContentProps,
  TabIndicatorProps,
  TabListProps,
  TabTriggerProps,
  TabsRootProps as TabsRootPrimitiveProps,
} from "@ark-ui/react";
import type {
  TabsPresetItem as BaseTabsPresetItem,
  TabsRootContract,
  TabsContract,
} from "@pisagor/contracts";
import { tabsRecipe } from "@pisagor/recipes";
import type { FunctionComponent, ReactNode, ComponentProps } from "react";
import { createSlotRecipeContext } from "../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Tabs",
  recipe: tabsRecipe,
});
// #endregion

// #region Types
export type TabsRootProps = TabsRootPrimitiveProps & TabsRootContract;

interface TabsPresetItem extends Omit<BaseTabsPresetItem, "label" | "content"> {
  label: ReactNode;
  content: ReactNode;
}

export type TabsListProps = TabListProps;

export type TabsTriggerProps = TabTriggerProps;

export type TabsContentProps = TabContentProps;

export interface TabsProps
  extends Omit<TabsRootProps, "children">, TabsContract {
  items?: TabsPresetItem[];
  /**
   * Whether to render the animated active-tab indicator.
   *
   * @defaultValue true
   */
  showIndicator?: boolean;
}
// #endregion

// #region Parts
export const TabsRoot = withProvider<
  ComponentProps<typeof TabsPrimitive.Root> & TabsRootContract
>(TabsPrimitive.Root, { name: "Root" }) as FunctionComponent<TabsRootProps>;

export const TabsList = withContext<TabsListProps>(TabsPrimitive.List, {
  name: "List",
});

export const TabsIndicator = withContext<TabIndicatorProps>(
  TabsPrimitive.Indicator,
  { name: "Indicator" },
);

export const TabsTrigger = withContext<
  ComponentProps<typeof TabsPrimitive.Trigger>
>(TabsPrimitive.Trigger, {
  name: "Trigger",
});

export const TabsContent = withContext<
  ComponentProps<typeof TabsPrimitive.Content>
>(TabsPrimitive.Content, {
  name: "Content",
});
// #endregion

// #region Shorthand
export function TabsShorthand({
  variant,
  items,
  showIndicator = true,
  ...rest
}: TabsProps) {
  return (
    <TabsRoot {...rest} variant={variant}>
      <TabsList>
        {items?.map((tab) => (
          <TabsTrigger
            disabled={tab.disabled}
            key={tab.value}
            value={tab.value}
          >
            {tab.label}
          </TabsTrigger>
        ))}
        {showIndicator ? <TabsIndicator /> : null}
      </TabsList>

      {items?.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </TabsRoot>
  );
}
// #endregion

export const Tabs = Object.assign(TabsShorthand, {
  Content: TabsContent,
  Indicator: TabsIndicator,
  List: TabsList,
  Root: TabsRoot,
  Trigger: TabsTrigger,
});
