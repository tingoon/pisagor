import { Tabs as TabsPrimitive } from "@ark-ui/react/tabs";
import {
  tabsContentVariants,
  tabsListVariants,
  tabsTriggerVariants,
  tabsVariants,
} from "@pisagor/styles/ui/tabs";
import { cn } from "@pisagor/utils";
import type { ComponentProps, ReactNode } from "react";
import type { VariantProps } from "tailwind-variants";
import type { WithTestId } from "../../internal/types";

// #region Variants

// #endregion

// #region Types
interface TabItem {
  value: string;
  label: ReactNode;
  content: ReactNode;
  disabled?: boolean;
}

interface TabsListProps
  extends ComponentProps<typeof TabsPrimitive.List>,
    VariantProps<typeof tabsListVariants> {}

interface TabsRootProps extends ComponentProps<typeof TabsPrimitive.Root>, WithTestId {
  tabs?: TabItem[];
}

// #endregion

// #region Components
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
      className={cn(tabsVariants(), className)}
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
TabsRoot.displayName = "Tabs";

export function TabsList({ variant = "default", className, children, ...rest }: TabsListProps) {
  const { list, indicator } = tabsListVariants({ variant });

  return (
    <TabsPrimitive.List {...rest} className={cn(list(), className)}>
      {children}

      <TabsPrimitive.Indicator className={cn(indicator())} />
    </TabsPrimitive.List>
  );
}
TabsList.displayName = "Tabs.List";

export function TabsTrigger({ className, ...rest }: ComponentProps<typeof TabsPrimitive.Trigger>) {
  return <TabsPrimitive.Trigger {...rest} className={cn(tabsTriggerVariants(), className)} />;
}
TabsTrigger.displayName = "Tabs.Trigger";

export function TabsContent({ className, ...rest }: ComponentProps<typeof TabsPrimitive.Content>) {
  return <TabsPrimitive.Content {...rest} className={cn(tabsContentVariants(), className)} />;
}
TabsContent.displayName = "Tabs.Content";
// #endregion
