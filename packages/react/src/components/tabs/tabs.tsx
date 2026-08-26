import { Tabs as TabsPrimitive } from "@ark-ui/react/tabs";
import {
  type TabsListVariantProps,
  tabsContentVariants,
  tabsListVariants,
  tabsTriggerVariants,
  tabsVariants,
} from "@pisagor/styles/ui/tabs";
import type { ComponentProps, ReactNode } from "react";

// #region Types
interface TabsPresetItem {
  value: string;
  label: ReactNode;
  content: ReactNode;
  disabled?: boolean;
}

export interface TabsListProps
  extends ComponentProps<typeof TabsPrimitive.List>,
    TabsListVariantProps {}

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
export function TabsRoot({
  lazyMount = true,
  unmountOnExit = true,
  className,
  children,
  ...rest
}: TabsRootProps) {
  return (
    <TabsPrimitive.Root
      {...rest}
      className={tabsVariants({ className })}
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
    >
      {children}
    </TabsPrimitive.Root>
  );
}

export function TabsList({ variant = "default", className, children, ...rest }: TabsListProps) {
  const { list, indicator } = tabsListVariants({ variant });

  return (
    <TabsPrimitive.List {...rest} className={list({ className })}>
      {children}

      <TabsPrimitive.Indicator className={indicator()} />
    </TabsPrimitive.List>
  );
}

export function TabsTrigger({ className, ...rest }: TabsTriggerProps) {
  return <TabsPrimitive.Trigger {...rest} className={tabsTriggerVariants({ className })} />;
}

export function TabsContent({ className, ...rest }: TabsContentProps) {
  return <TabsPrimitive.Content {...rest} className={tabsContentVariants({ className })} />;
}
// #endregion

// #region Shorthand
export function TabsShorthand({ items, variant, ...rest }: TabsProps) {
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
