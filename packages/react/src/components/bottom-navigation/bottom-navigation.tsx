import { ark } from "@ark-ui/react/factory";
import { Tabs as TabsPrimitive } from "@ark-ui/react/tabs";
import {
  bottomNavigationItemIconVariants,
  bottomNavigationItemLabelVariants,
  bottomNavigationItemVariants,
  bottomNavigationListVariants,
  bottomNavigationVariants,
} from "@pisagor/styles/ui/bottom-navigation";
import type { ComponentProps } from "react";
import type { WithTestId } from "../../internal/types";

// #region Types
export type BottomNavigationRootProps = ComponentProps<typeof TabsPrimitive.Root> & WithTestId;

export type BottomNavigationProps = BottomNavigationRootProps;

export type BottomNavigationListProps = ComponentProps<typeof TabsPrimitive.List>;

export type BottomNavigationItemProps = ComponentProps<typeof TabsPrimitive.Trigger>;

export interface BottomNavigationItemIconProps extends ComponentProps<typeof ark.span> {}

export interface BottomNavigationItemLabelProps extends ComponentProps<typeof ark.span> {}
// #endregion

// #region Parts
export function BottomNavigationRoot({ className, testId, ...rest }: BottomNavigationRootProps) {
  return (
    <TabsPrimitive.Root
      {...rest}
      className={bottomNavigationVariants({ className })}
      data-testid={testId}
    />
  );
}

export function BottomNavigationList({
  "aria-label": ariaLabel,
  className,
  ...rest
}: BottomNavigationListProps) {
  return <TabsPrimitive.List {...rest} className={bottomNavigationListVariants({ className })} />;
}

export function BottomNavigationItem({ className, ...rest }: BottomNavigationItemProps) {
  return (
    <TabsPrimitive.Trigger {...rest} className={bottomNavigationItemVariants({ className })} />
  );
}

export function BottomNavigationItemIcon({ className, ...rest }: BottomNavigationItemIconProps) {
  return (
    <ark.span
      {...rest}
      aria-hidden
      className={bottomNavigationItemIconVariants({ className })}
      data-part="item-icon"
      data-scope="bottom-navigation"
    />
  );
}

export function BottomNavigationItemLabel({ className, ...rest }: BottomNavigationItemLabelProps) {
  return (
    <ark.span
      {...rest}
      className={bottomNavigationItemLabelVariants({ className })}
      data-part="item-label"
      data-scope="bottom-navigation"
    />
  );
}
// #endregion

// #region Display Names
BottomNavigationRoot.displayName = "BottomNavigation";
BottomNavigationList.displayName = "BottomNavigation.List";
BottomNavigationItem.displayName = "BottomNavigation.Item";
BottomNavigationItemIcon.displayName = "BottomNavigation.ItemIcon";
BottomNavigationItemLabel.displayName = "BottomNavigation.ItemLabel";
// #endregion
