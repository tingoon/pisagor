import { ark } from "@ark-ui/vue/factory";
import { Tabs as TabsPrimitive } from "@ark-ui/vue/tabs";
import type {
  BottomNavigationItemProps as BaseBottomNavigationItemProps,
  BottomNavigationProps as BaseBottomNavigationRootProps,
} from "@pisagor/props";
import {
  bottomNavigationItemRecipe,
  bottomNavigationRecipe,
} from "@pisagor/recipes";
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
  extends BaseBottomNavigationRootProps {
  class?: unknown;
}

export type BottomNavigationProps = BottomNavigationRootProps;

export interface BottomNavigationItemProps
  extends BaseBottomNavigationItemProps {
  class?: unknown;
}
// #endregion

// #region Parts
export const BottomNavigationRoot = withBottomNavigationProvider(
  TabsPrimitive.Root,
  {
    name: "Root",
    slot: "base",
  },
);

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
);

export const BottomNavigationItemIcon = withBottomNavigationItemContext(
  ark.span,
  {
    defaultProps: { "aria-hidden": true, "data-part": "item-icon" },
    name: "ItemIcon",
    slot: "icon",
  },
);

export const BottomNavigationItemLabel = withBottomNavigationItemContext(
  ark.span,
  {
    defaultProps: { "data-part": "item-label" },
    name: "ItemLabel",
    slot: "label",
  },
);
// #endregion

export const BottomNavigation = Object.assign(BottomNavigationRoot, {
  Item: BottomNavigationItem,
  ItemIcon: BottomNavigationItemIcon,
  ItemLabel: BottomNavigationItemLabel,
  List: BottomNavigationList,
});
