import { Tabs as TabsPrimitive } from "@ark-ui/react/tabs";
import {
  type TabsListVariantProps,
  tabsContentVariants,
  tabsListVariants,
  tabsTriggerVariants,
  tabsVariants,
} from "@pisagor/styles/ui/tabs";
import type { ComponentProps, ReactNode } from "react";
import type { WithTestId } from "../../internal/types";

// #region Types
interface TabItem {
  value: string;
  label: ReactNode;
  content: ReactNode;
  disabled?: boolean;
}

export interface TabsListProps
  extends ComponentProps<typeof TabsPrimitive.List>,
    TabsListVariantProps {}

export interface TabsRootProps extends ComponentProps<typeof TabsPrimitive.Root>, WithTestId {
  tabs?: TabItem[];
}

export type TabsTriggerProps = ComponentProps<typeof TabsPrimitive.Trigger>;

export type TabsContentProps = ComponentProps<typeof TabsPrimitive.Content>;
// #endregion

// #region Parts
export function TabsRoot({
  lazyMount = true,
  unmountOnExit = true,
  className,
  tabs,
  children,
  testId,
  ...rest
}: TabsRootProps) {
  return (
    <TabsPrimitive.Root
      {...rest}
      className={tabsVariants({ className })}
      data-testid={testId}
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
    >
      {tabs && (
        <TabsList>
          {tabs.map((tab) => (
            <TabsTrigger disabled={tab.disabled} key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      )}
      {tabs?.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
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

TabsRoot.displayName = "Tabs";
TabsList.displayName = "Tabs.List";
TabsTrigger.displayName = "Tabs.Trigger";
TabsContent.displayName = "Tabs.Content";
// #endregion
