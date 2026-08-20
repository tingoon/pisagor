import { ark } from "@ark-ui/react/factory";
import { Tabs as TabsPrimitive } from "@ark-ui/react/tabs";
import {
  bottomNavigationItemIconVariants,
  bottomNavigationItemLabelVariants,
  bottomNavigationItemVariants,
  bottomNavigationListVariants,
  bottomNavigationVariants,
} from "@pisagor/styles/ui/bottom-navigation";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import type { WithTestId } from "../../internal/types";

// #region Types
export type BottomNavigationRootProps = ComponentProps<typeof TabsPrimitive.Root> & WithTestId;

export type BottomNavigationProps = BottomNavigationRootProps;

export type BottomNavigationListProps = ComponentProps<typeof TabsPrimitive.List>;

export type BottomNavigationItemProps = ComponentProps<typeof TabsPrimitive.Trigger>;
// #endregion

// #region Parts
export function BottomNavigationRoot({ className, testId, ...rest }: BottomNavigationRootProps) {
  return (
    <TabsPrimitive.Root
      {...rest}
      className={cn(bottomNavigationVariants(), className)}
      data-testid={testId}
    />
  );
}
BottomNavigationRoot.displayName = "BottomNavigation";

export function BottomNavigationList({
  "aria-label": ariaLabel,
  className,
  ...rest
}: BottomNavigationListProps) {
  return <TabsPrimitive.List {...rest} className={cn(bottomNavigationListVariants(), className)} />;
}
BottomNavigationList.displayName = "BottomNavigation.List";

export function BottomNavigationItem({ className, ...rest }: BottomNavigationItemProps) {
  return (
    <TabsPrimitive.Trigger {...rest} className={cn(bottomNavigationItemVariants(), className)} />
  );
}
BottomNavigationItem.displayName = "BottomNavigation.Item";

export function BottomNavigationItemIcon({ className, ...rest }: ComponentProps<typeof ark.span>) {
  return (
    <ark.span
      {...rest}
      aria-hidden
      className={cn(bottomNavigationItemIconVariants(), className)}
      data-part="item-icon"
      data-scope="bottom-navigation"
    />
  );
}
BottomNavigationItemIcon.displayName = "BottomNavigation.ItemIcon";

export function BottomNavigationItemLabel({ className, ...rest }: ComponentProps<typeof ark.span>) {
  return (
    <ark.span
      {...rest}
      className={cn(bottomNavigationItemLabelVariants(), className)}
      data-part="item-label"
      data-scope="bottom-navigation"
    />
  );
}
BottomNavigationItemLabel.displayName = "BottomNavigation.ItemLabel";
// #endregion
