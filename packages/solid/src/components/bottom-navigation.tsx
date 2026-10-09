import { ark } from "@ark-ui/solid/factory";
import {
  type TabListProps,
  Tabs as TabsPrimitive,
  type TabsRootProps,
  type TabTriggerProps,
} from "@ark-ui/solid/tabs";
import type {
  BottomNavigationItemProps as BaseBottomNavigationItemProps,
  BottomNavigationProps as BaseBottomNavigationRootProps,
} from "@pisagor/props";
import {
  bottomNavigationItemRecipe,
  bottomNavigationRecipe,
} from "@pisagor/recipes";
import type { Component, ComponentProps } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";

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
export const BottomNavigationRoot: Component<BottomNavigationRootProps> =
  withBottomNavigationProvider(TabsPrimitive.Root, {
    name: "Root",
    slot: "base",
  });

export const BottomNavigationList: Component<BottomNavigationListProps> =
  withBottomNavigationContext(TabsPrimitive.List, {
    name: "List",
  });

export const BottomNavigationItem: Component<BottomNavigationItemProps> =
  withBottomNavigationItemProvider(TabsPrimitive.Trigger, {
    name: "Item",
    slot: "base",
  });

export const BottomNavigationItemIcon: Component<BottomNavigationItemIconProps> =
  withBottomNavigationItemContext(ark.span, {
    defaultProps: { "aria-hidden": true, "data-part": "item-icon" },
    name: "ItemIcon",
    slot: "icon",
  });

export const BottomNavigationItemLabel: Component<BottomNavigationItemLabelProps> =
  withBottomNavigationItemContext(ark.span, {
    defaultProps: { "data-part": "item-label" },
    name: "ItemLabel",
    slot: "label",
  });
// #endregion

export const BottomNavigation = Object.assign(BottomNavigationRoot, {
  Item: BottomNavigationItem,
  ItemIcon: BottomNavigationItemIcon,
  ItemLabel: BottomNavigationItemLabel,
  List: BottomNavigationList,
});
