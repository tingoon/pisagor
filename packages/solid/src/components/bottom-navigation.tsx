import { ark } from "@ark-ui/solid/factory";
import type {
  BottomNavigationItemProps as BaseBottomNavigationItemProps,
  BottomNavigationProps as BaseBottomNavigationRootProps,
} from "@pisagor/props";
import {
  bottomNavigationItemRecipe,
  bottomNavigationRecipe,
} from "@pisagor/recipes";
import type { Component, ComponentProps, JSX } from "solid-js";
import { createContext, splitProps, useContext } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { useProviderMessage } from "./provider/provider.context";

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

const BottomNavigationValueContext = createContext<() => string | undefined>(
  () => undefined,
);
// #endregion

// #region Types
export interface BottomNavigationRootProps
  extends ComponentProps<typeof ark.nav>,
    BaseBottomNavigationRootProps {
  /** Value of the item for the current page; that item gets `aria-current="page"`. */
  value?: string;
}

export type BottomNavigationProps = BottomNavigationRootProps;

export type BottomNavigationListProps = ComponentProps<typeof ark.div>;

export interface BottomNavigationItemProps
  extends ComponentProps<typeof ark.a>,
    BaseBottomNavigationItemProps {
  /** Marks the item as the current page. Defaults to `value === root value`. */
  current?: boolean;
  /** Whether the item is disabled. */
  disabled?: boolean;
  /** Identifier compared with the root `value`. */
  value?: string;
}

export type BottomNavigationItemIconProps = ComponentProps<typeof ark.span>;

export type BottomNavigationItemLabelProps = ComponentProps<typeof ark.span>;
// #endregion

// #region Parts
const BottomNavigationNav: Component<ComponentProps<typeof ark.nav>> =
  withBottomNavigationProvider(ark.nav, {
    name: "Root",
    slot: "base",
  });

export function BottomNavigationRoot(
  props: BottomNavigationRootProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["value", "aria-label"]);
  const label = useProviderMessage("bottomNavigation.label");
  return (
    <BottomNavigationValueContext.Provider value={() => local.value}>
      <BottomNavigationNav
        {...rest}
        aria-label={local["aria-label"] ?? label}
      />
    </BottomNavigationValueContext.Provider>
  );
}

export const BottomNavigationList: Component<BottomNavigationListProps> =
  withBottomNavigationContext(ark.div, {
    name: "List",
  });

const BottomNavigationItemBase: Component<ComponentProps<typeof ark.a>> =
  withBottomNavigationItemProvider(ark.a, {
    name: "Item",
    slot: "base",
  });

export function BottomNavigationItem(
  props: BottomNavigationItemProps,
): JSX.Element {
  const [local, rest] = splitProps(props, [
    "current",
    "disabled",
    "value",
    "tabIndex",
  ]);
  const rootValue = useContext(BottomNavigationValueContext);
  const isCurrent = () =>
    local.current ??
    (local.value !== undefined &&
      rootValue() !== undefined &&
      local.value === rootValue());

  return (
    <BottomNavigationItemBase
      {...rest}
      aria-current={isCurrent() ? "page" : undefined}
      aria-disabled={local.disabled || undefined}
      data-current={isCurrent() ? "" : undefined}
      data-disabled={local.disabled ? "" : undefined}
      tabIndex={local.disabled ? -1 : local.tabIndex}
    />
  );
}

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
