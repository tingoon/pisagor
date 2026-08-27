import { ark } from "@ark-ui/react/factory";
import { Tabs as TabsPrimitive } from "@ark-ui/react/tabs";
import {
  bottomNavigationItemVariants,
  bottomNavigationVariants,
} from "@pisagor/recipes/bottom-navigation";
import type { ComponentProps } from "react";
import { useMemo } from "react";
import {
  BottomNavigationContext,
  BottomNavigationItemContext,
  useBottomNavigation,
  useBottomNavigationItem,
} from "./bottom-navigation.context";

// #region Types
export type BottomNavigationRootProps = ComponentProps<typeof TabsPrimitive.Root>;

export type BottomNavigationProps = BottomNavigationRootProps;

export type BottomNavigationListProps = ComponentProps<typeof TabsPrimitive.List>;

export type BottomNavigationItemProps = ComponentProps<typeof TabsPrimitive.Trigger>;

export type BottomNavigationItemIconProps = ComponentProps<typeof ark.span>;

export type BottomNavigationItemLabelProps = ComponentProps<typeof ark.span>;
// #endregion

// #region Parts
export function BottomNavigationRoot({ className, ...rest }: BottomNavigationRootProps) {
  const slots = useMemo(() => bottomNavigationVariants(), []);

  return (
    <BottomNavigationContext value={{ slots }}>
      <TabsPrimitive.Root {...rest} className={slots.base({ className })} />
    </BottomNavigationContext>
  );
}

export function BottomNavigationList({ className, ...rest }: BottomNavigationListProps) {
  const { slots } = useBottomNavigation();

  return <TabsPrimitive.List {...rest} className={slots.list({ className })} />;
}

export function BottomNavigationItem({ children, className, ...rest }: BottomNavigationItemProps) {
  const slots = useMemo(() => bottomNavigationItemVariants(), []);

  return (
    <BottomNavigationItemContext value={{ slots }}>
      <TabsPrimitive.Trigger {...rest} className={slots.base({ className })}>
        {children}
      </TabsPrimitive.Trigger>
    </BottomNavigationItemContext>
  );
}

export function BottomNavigationItemIcon({ className, ...rest }: BottomNavigationItemIconProps) {
  const { slots } = useBottomNavigationItem();

  return (
    <ark.span
      {...rest}
      aria-hidden
      className={slots.icon({ className })}
      data-part="item-icon"
      data-scope="bottom-navigation"
    />
  );
}

export function BottomNavigationItemLabel({ className, ...rest }: BottomNavigationItemLabelProps) {
  const { slots } = useBottomNavigationItem();

  return (
    <ark.span
      {...rest}
      className={slots.label({ className })}
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
