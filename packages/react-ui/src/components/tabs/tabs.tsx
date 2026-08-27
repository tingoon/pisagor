import { Tabs as TabsPrimitive } from "@ark-ui/react/tabs";
import { type TabsVariantProps, tabsVariants } from "@pisagor/recipes/tabs";
import type { ComponentProps, ReactNode } from "react";
import { useMemo } from "react";
import { TabsContext, useTabs } from "./tabs.context";

// #region Types
interface TabsPresetItem {
  value: string;
  label: ReactNode;
  content: ReactNode;
  disabled?: boolean;
}

export type TabsListProps = ComponentProps<typeof TabsPrimitive.List> &
  Pick<TabsVariantProps, "variant">;

export type TabsRootProps = ComponentProps<typeof TabsPrimitive.Root>;

export type TabsTriggerProps = ComponentProps<typeof TabsPrimitive.Trigger>;

export type TabsContentProps = ComponentProps<typeof TabsPrimitive.Content>;

export interface TabsProps extends Omit<TabsRootProps, "children"> {
  /**
   * The visual variant of the tab list.
   *
   * @defaultValue "default"
   */
  variant?: TabsListProps["variant"];
  items?: TabsPresetItem[];
}
// #endregion

// #region Parts
export function TabsRoot({ children, className, ...rest }: TabsRootProps) {
  const slots = useMemo(() => tabsVariants(), []);

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
