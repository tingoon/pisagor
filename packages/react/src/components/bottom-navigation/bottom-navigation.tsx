import { ark } from "@ark-ui/react/factory";
import { Tabs as TabsPrimitive } from "@ark-ui/react/tabs";
import { bottomNavigationVariants } from "@pisagor/styles/ui/bottom-navigation";
import type { ComponentProps } from "react";
import { useMemo } from "react";
import type { WithTestId } from "../../internal/types";
import { BottomNavigationContext, useBottomNavigation } from "./bottom-navigation.context";

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
  const slots = useMemo(() => bottomNavigationVariants(), []);

  return (
    <BottomNavigationContext value={{ slots }}>
      <TabsPrimitive.Root {...rest} className={slots.base({ className })} data-testid={testId} />
    </BottomNavigationContext>
  );
}

export function BottomNavigationList({ className, ...rest }: BottomNavigationListProps) {
  const { slots } = useBottomNavigation();

  return <TabsPrimitive.List {...rest} className={slots.list({ className })} />;
}

export function BottomNavigationItem({ className, ...rest }: BottomNavigationItemProps) {
  const { slots } = useBottomNavigation();

  return <TabsPrimitive.Trigger {...rest} className={slots.item({ className })} />;
}

export function BottomNavigationItemIcon({ className, ...rest }: BottomNavigationItemIconProps) {
  const { slots } = useBottomNavigation();

  return (
    <ark.span
      {...rest}
      aria-hidden
      className={slots.itemIcon({ className })}
      data-part="item-icon"
      data-scope="bottom-navigation"
    />
  );
}

export function BottomNavigationItemLabel({ className, ...rest }: BottomNavigationItemLabelProps) {
  const { slots } = useBottomNavigation();

  return (
    <ark.span
      {...rest}
      className={slots.itemLabel({ className })}
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
