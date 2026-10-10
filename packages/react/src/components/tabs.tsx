import type {
  TabContentProps,
  TabListProps,
  TabsRootProps as TabsPrimitiveRootProps,
  TabTriggerProps,
} from "@ark-ui/react/tabs";
import { Tabs as TabsPrimitive } from "@ark-ui/react/tabs";
import type { TabsProps as BaseTabsRootProps } from "@pisagor/props";
import { type TabsVariantProps, tabsRecipe } from "@pisagor/recipes";
import type { FunctionComponent, ReactNode } from "react";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";

// #region Context
const {
  useStyles: useTabs,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Tabs",
  recipe: tabsRecipe,
});
// #endregion

// #region Types
export interface LocalTabsRootProps
  extends TabsPrimitiveRootProps,
    BaseTabsRootProps {}

interface TabsPresetItem {
  value: string;
  label: ReactNode;
  content: ReactNode;
  disabled?: boolean;
}

export type TabsListProps = TabListProps & Pick<TabsVariantProps, "variant">;

export type TabsTriggerProps = TabTriggerProps;

export type TabsContentProps = TabContentProps;

export interface TabsProps
  extends Omit<LocalTabsRootProps, "children">,
    Pick<TabsVariantProps, "variant"> {
  items?: TabsPresetItem[];
}
// #endregion

// #region Parts
export const TabsRoot = withProvider(TabsPrimitive.Root, {
  name: "Root",
  slot: "base",
}) as FunctionComponent<LocalTabsRootProps>;

export function TabsList({
  variant = "default",
  children,
  className,
  ...rest
}: TabsListProps) {
  const { slots } = useTabs();

  return (
    <TabsPrimitive.List
      {...rest}
      className={slots.list({ className, variant })}
    >
      {children}

      <TabsPrimitive.Indicator className={slots.indicator({ variant })} />
    </TabsPrimitive.List>
  );
}

export const TabsTrigger = withContext(TabsPrimitive.Trigger, {
  name: "Trigger",
});

export const TabsContent = withContext(TabsPrimitive.Content, {
  name: "Content",
});
// #endregion

// #region Shorthand
export function TabsShorthand({ variant, items, ...rest }: TabsProps) {
  return (
    <TabsRoot {...rest}>
      <TabsList variant={variant}>
        {items?.map((tab) => (
          <TabsTrigger
            disabled={tab.disabled}
            key={tab.value}
            value={tab.value}
          >
            {tab.label}
          </TabsTrigger>
        ))}
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

// #region Display Names
TabsList.displayName = "Tabs.List";
TabsShorthand.displayName = "Tabs";

// #endregion

export type { TabsRootProps } from "@ark-ui/react/tabs";

export const Tabs = Object.assign(TabsShorthand, {
  Content: TabsContent,
  List: TabsList,
  Root: TabsRoot,
  Trigger: TabsTrigger,
});
