import type {
  TabContentProps,
  TabListProps,
  TabsRootProps,
  TabTriggerProps,
} from "@ark-ui/react/tabs";
import { Tabs as TabsPrimitive } from "@ark-ui/react/tabs";
import { type TabsVariantProps, tabsRecipe } from "@pisagor/recipes/tabs";
import type { ReactNode } from "react";
import { TabsContext, useTabs } from "./tabs.context";

// #region Types
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
  extends Omit<TabsRootProps, "children">,
    Pick<TabsVariantProps, "variant"> {
  items?: TabsPresetItem[];
}
// #endregion

// #region Parts
export function TabsRoot({ children, className, ...rest }: TabsRootProps) {
  const slots = tabsRecipe();

  return (
    <TabsContext value={{ slots }}>
      <TabsPrimitive.Root {...rest} className={slots.base({ className })}>
        {children}
      </TabsPrimitive.Root>
    </TabsContext>
  );
}

export function TabsList({ variant = "default", children, className, ...rest }: TabsListProps) {
  const { slots } = useTabs();

  return (
    <TabsPrimitive.List {...rest} className={slots.list({ className, variant })}>
      {children}

      <TabsPrimitive.Indicator className={slots.indicator({ variant })} />
    </TabsPrimitive.List>
  );
}

export function TabsTrigger({ className, ...rest }: TabsTriggerProps) {
  const { slots } = useTabs();

  return <TabsPrimitive.Trigger {...rest} className={slots.trigger({ className })} />;
}

export function TabsContent({ className, ...rest }: TabsContentProps) {
  const { slots } = useTabs();

  return <TabsPrimitive.Content {...rest} className={slots.content({ className })} />;
}
// #endregion

// #region Shorthand
export function TabsShorthand({ variant, items, ...rest }: TabsProps) {
  return (
    <TabsRoot {...rest}>
      <TabsList variant={variant}>
        {items?.map((tab) => (
          <TabsTrigger disabled={tab.disabled} key={tab.value} value={tab.value}>
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
TabsRoot.displayName = "Tabs.Root";
TabsList.displayName = "Tabs.List";
TabsTrigger.displayName = "Tabs.Trigger";
TabsContent.displayName = "Tabs.Content";
TabsShorthand.displayName = "Tabs";
// #endregion
