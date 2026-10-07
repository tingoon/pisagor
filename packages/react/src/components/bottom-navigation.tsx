import { ark } from "@ark-ui/react/factory";
import {
  type TabListProps,
  Tabs as TabsPrimitive,
  type TabsRootProps,
  type TabTriggerProps,
} from "@ark-ui/react/tabs";
import type {
  BottomNavigationItemProps as BaseBottomNavigationItemProps,
  BottomNavigationProps as BaseBottomNavigationRootProps,
} from "@pisagor/props";
import {
  bottomNavigationItemRecipe,
  bottomNavigationRecipe,
} from "@pisagor/recipes";
import type { ComponentProps, FunctionComponent } from "react";
import { createSlotRecipeContext } from "../utils";

// #region Context
const {
  withContext: withBottomNavigationContext,
  withProvider: withBottomNavigationProvider,
} = createSlotRecipeContext({
  name: "BottomNavigation",
  recipe: bottomNavigationRecipe,
});

const {
  withContext: withBottomNavigationItemContext,
  withProvider: withBottomNavigationItemProvider,
} = createSlotRecipeContext({
  name: "BottomNavigation",
  recipe: bottomNavigationItemRecipe,
});
// #endregion

// #region Types
export interface BottomNavigationRootProps
  extends TabsRootProps,
    BaseBottomNavigationRootProps {}

export type BottomNavigationProps = BottomNavigationRootProps;

export type BottomNavigationListProps = TabListProps;

export interface BottomNavigationItemProps
  extends TabTriggerProps,
    BaseBottomNavigationItemProps {}

export type BottomNavigationItemIconProps = ComponentProps<typeof ark.span>;

export type BottomNavigationItemLabelProps = ComponentProps<typeof ark.span>;
// #endregion

// #region Parts
export const BottomNavigationRoot = withBottomNavigationProvider(
  TabsPrimitive.Root,
  {
    name: "Root",
    slot: "base",
  },
) as FunctionComponent<BottomNavigationRootProps>;

export const BottomNavigationList = withBottomNavigationContext(
  TabsPrimitive.List,
  {
    name: "List",
  },
);

export const BottomNavigationItem = withBottomNavigationItemProvider(
  TabsPrimitive.Trigger,
  {
    name: "Item",
    slot: "base",
  },
) as FunctionComponent<BottomNavigationItemProps>;

export const BottomNavigationItemIcon = withBottomNavigationItemContext(
  ark.span,
  {
    defaultProps: { "aria-hidden": true },
    name: "ItemIcon",
  },
);

export const BottomNavigationItemLabel = withBottomNavigationItemContext(
  ark.span,
  {
    name: "ItemLabel",
  },
);
// #endregion

export const BottomNavigation = Object.assign(BottomNavigationRoot, {
  Item: BottomNavigationItem,
  ItemIcon: BottomNavigationItemIcon,
  ItemLabel: BottomNavigationItemLabel,
  List: BottomNavigationList,
});
