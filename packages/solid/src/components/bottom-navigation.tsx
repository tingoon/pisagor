import { ark, type HTMLArkProps } from "@ark-ui/solid";
import type {
  BottomNavigationItemProps as BaseBottomNavigationItemProps,
  BottomNavigationProps as BaseBottomNavigationRootProps,
} from "@pisagor/props";
import {
  bottomNavigationItemRecipe,
  bottomNavigationRecipe,
} from "@pisagor/recipes";
import type { Component, JSX } from "solid-js";
import { createContext, splitProps, useContext } from "solid-js";
import { createSlotRecipeContext } from "../internal";
import { useLocale } from "./provider/context";

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
  extends HTMLArkProps<"nav">, BaseBottomNavigationRootProps {
  /**
   * Value of the item for the current page; that item gets
   * `aria-current="page"`.
   */
  value?: string;
}

export type BottomNavigationProps = BottomNavigationRootProps;

export type BottomNavigationListProps = HTMLArkProps<"div">;

export interface BottomNavigationItemProps
  extends HTMLArkProps<"a">, BaseBottomNavigationItemProps {
  /** Marks the item as the current page. Defaults to `value === root value`. */
  current?: boolean;
  /** Whether the item is disabled. */
  disabled?: boolean;
  /** Identifier compared with the root `value`. */
  value?: string;
}

export type BottomNavigationItemIconProps = HTMLArkProps<"span">;

export type BottomNavigationItemLabelProps = HTMLArkProps<"span">;
// #endregion

// #region Parts
const BottomNavigationNav: Component<HTMLArkProps<"nav">> =
  withBottomNavigationProvider(ark.nav, {
    name: "Root",
    slot: "base",
  });

export function BottomNavigationRoot(
  props: BottomNavigationRootProps,
): JSX.Element {
  const { m } = useLocale();
  const [local, rest] = splitProps(props, ["value", "aria-label"]);

  return (
    <BottomNavigationValueContext.Provider value={() => local.value}>
      <BottomNavigationNav
        {...rest}
        aria-label={m("bottomNavigation.label", local["aria-label"])}
      />
    </BottomNavigationValueContext.Provider>
  );
}

export const BottomNavigationList: Component<BottomNavigationListProps> =
  withBottomNavigationContext(ark.div, {
    name: "List",
  });

const BottomNavigationItemBase: Component<HTMLArkProps<"a">> =
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
