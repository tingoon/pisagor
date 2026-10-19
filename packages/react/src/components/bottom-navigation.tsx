import { ark, type HTMLArkProps } from "@ark-ui/react";
import type {
  BottomNavigationItemRootContract,
  BottomNavigationRootContract,
} from "@pisagor/contracts";
import {
  bottomNavigationItemRecipe,
  bottomNavigationRecipe,
} from "@pisagor/recipes";
import { createContext, use } from "react";
import type { ComponentProps, FunctionComponent } from "react";
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

const BottomNavigationValueContext = createContext<string | undefined>(
  undefined,
);
// #endregion

// #region Types
export interface BottomNavigationRootProps
  extends ComponentProps<"nav">, BottomNavigationRootContract {
  /**
   * Value of the item for the current page; that item gets
   * `aria-current="page"`.
   */
  value?: string;
}

export type BottomNavigationProps = BottomNavigationRootProps;

export type BottomNavigationListProps = ComponentProps<"div">;

export interface BottomNavigationItemProps
  extends HTMLArkProps<"a">, BottomNavigationItemRootContract {
  /** Marks the item as the current page. Defaults to `value === root value`. */
  current?: boolean;
  /** Whether the item is disabled. */
  disabled?: boolean;
  /** Identifier compared with the root `value`. */
  value?: string;
}

export type BottomNavigationItemIconProps = ComponentProps<"span">;

export type BottomNavigationItemLabelProps = ComponentProps<"span">;
// #endregion

// #region Parts
const BottomNavigationNav = withBottomNavigationProvider<
  ComponentProps<"nav"> & BottomNavigationRootContract
>("nav", {
  name: "Root",
  slot: "base",
}) as FunctionComponent<ComponentProps<"nav">>;

export function BottomNavigationRoot({
  value,
  "aria-label": ariaLabel,
  ...rest
}: BottomNavigationRootProps) {
  const { m } = useLocale();

  return (
    <BottomNavigationValueContext value={value}>
      <BottomNavigationNav
        {...rest}
        aria-label={m("bottomNavigation.label", ariaLabel)}
      />
    </BottomNavigationValueContext>
  );
}

export const BottomNavigationList = withBottomNavigationContext<
  ComponentProps<"div">
>("div", {
  name: "List",
});

const BottomNavigationItemBase = withBottomNavigationItemProvider<
  ComponentProps<typeof ark.a> & BottomNavigationItemRootContract
>(ark.a, {
  name: "Item",
  slot: "base",
}) as FunctionComponent<HTMLArkProps<"a">>;

export function BottomNavigationItem({
  current,
  disabled,
  value,
  ...rest
}: BottomNavigationItemProps) {
  const rootValue = use(BottomNavigationValueContext);
  const isCurrent =
    current ??
    (value !== undefined && rootValue !== undefined && value === rootValue);

  return (
    <BottomNavigationItemBase
      {...rest}
      aria-current={isCurrent ? "page" : undefined}
      aria-disabled={disabled || undefined}
      data-current={isCurrent ? "" : undefined}
      data-disabled={disabled ? "" : undefined}
      tabIndex={disabled ? -1 : rest.tabIndex}
    />
  );
}

export const BottomNavigationItemIcon = withBottomNavigationItemContext<
  ComponentProps<"span">
>("span", {
  defaultProps: { "aria-hidden": true, "data-part": "item-icon" },
  name: "ItemIcon",
  slot: "icon",
});

export const BottomNavigationItemLabel = withBottomNavigationItemContext<
  ComponentProps<"span">
>("span", {
  defaultProps: { "data-part": "item-label" },
  name: "ItemLabel",
  slot: "label",
});
// #endregion

// #region Display Names
BottomNavigationRoot.displayName = "BottomNavigation";
BottomNavigationItem.displayName = "BottomNavigation.Item";
// #endregion

export const BottomNavigation = Object.assign(BottomNavigationRoot, {
  Item: BottomNavigationItem,
  ItemIcon: BottomNavigationItemIcon,
  ItemLabel: BottomNavigationItemLabel,
  List: BottomNavigationList,
});
