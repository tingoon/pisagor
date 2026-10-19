import { Tabs as TabsPrimitive } from "@ark-ui/react";
import type {
  TabContentProps,
  TabListProps,
  TabTriggerProps,
  TabsRootProps as TabsRootPrimitiveProps,
} from "@ark-ui/react";
import type {
  TabsPresetItem as BaseTabsPresetItem,
  TabsRootContract,
  TabsContract,
} from "@pisagor/contracts";
import { type TabsVariantProps, tabsRecipe } from "@pisagor/recipes";
import type { FunctionComponent, ReactNode } from "react";
import { createSlotRecipeContext } from "../internal";

// #region Context
const { useStyles, withContext, withProvider } = createSlotRecipeContext({
  name: "Tabs",
  recipe: tabsRecipe,
});
// #endregion

// #region Types
export interface TabsRootProps
  extends TabsRootPrimitiveProps, TabsRootContract {}

interface TabsPresetItem extends Omit<BaseTabsPresetItem, "label" | "content"> {
  label: ReactNode;
  content: ReactNode;
}

export interface TabsListProps extends TabListProps, TabsVariantProps {
  /**
   * Whether to render the animated active-tab indicator.
   *
   * @defaultValue true
   */
  showIndicator?: boolean;
}

export type TabsTriggerProps = TabTriggerProps;

export type TabsContentProps = TabContentProps;

export interface TabsProps
  extends Omit<TabsRootProps, "children">, TabsContract {
  items?: TabsPresetItem[];
  /** Whether to render the animated active-tab indicator. */
  showIndicator?: boolean;
}
// #endregion

// #region Parts
export const TabsRoot = withProvider(TabsPrimitive.Root)({
  name: "Root",
  slot: "base",
}) as FunctionComponent<TabsRootProps>;

export function TabsList({
  variant = "default",
  showIndicator = true,
  children,
  className,
  ...rest
}: TabsListProps) {
  const { slots } = useStyles();

  return (
    <TabsPrimitive.List
      {...rest}
      className={slots.list({ className, variant })}
    >
      {children}

      {showIndicator && (
        <TabsPrimitive.Indicator className={slots.indicator({ variant })} />
      )}
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
export function TabsShorthand({
  variant,
  items,
  showIndicator,
  ...rest
}: TabsProps) {
  return (
    <TabsRoot {...rest}>
      <TabsList showIndicator={showIndicator} variant={variant}>
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

export const Tabs = Object.assign(TabsShorthand, {
  Content: TabsContent,
  List: TabsList,
  Root: TabsRoot,
  Trigger: TabsTrigger,
});
