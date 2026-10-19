import { ark, type HTMLArkProps } from "@ark-ui/react";
import type {
  MenuContract,
  MenuItemRootContract,
  MenuRootContract,
} from "@pisagor/contracts";
import { menuItemRecipe, menuRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { createContext, use } from "react";
import type { ComponentProps, ComponentPropsWithRef } from "react";
import { createSlotRecipeContext } from "../internal";
import { useLocale } from "./provider/context";

// #region Context
const { useStyles, withContext, withProvider } = createSlotRecipeContext({
  name: "Menu",
  recipe: menuRecipe,
});
// #endregion

// #region Parts
const MenuRootBase = withProvider<MenuRootContract>("nav", {
  name: "Root",
  slot: "base",
});

export function MenuRoot({
  "aria-label": ariaLabelProp,
  ...rest
}: ComponentProps<typeof MenuRootBase>) {
  const { m } = useLocale();
  const ariaLabel = m("menu.label", ariaLabelProp);

  return <MenuRootBase {...rest} aria-label={ariaLabel} />;
}

/** True inside `Menu.List`, so separators render as `<li>`. */
const MenuInsideListContext = createContext(false);

const MenuListBase = withContext("ul", {
  defaultProps: { role: "list" },
  name: "List",
});

export function MenuList(props: MenuListProps) {
  return (
    <MenuInsideListContext value={true}>
      <MenuListBase {...props} />
    </MenuInsideListContext>
  );
}

export const MenuGroup = withContext("div", {
  defaultProps: { role: "group" },
  name: "Group",
});

export const MenuGroupLabel = withContext("div", {
  defaultProps: { "data-part": "group-label" },
  name: "GroupLabel",
  slot: "groupLabel",
});

export function MenuItem({
  variant = "default",
  type = "button",
  recipe = menuItemRecipe,
  className,
  ...rest
}: MenuItemProps) {
  const { slots } = useStyles();

  return (
    <li className={slots.wrapper()} data-part="item-wrapper" data-scope="menu">
      <ark.button
        {...rest}
        className={cn(recipe({ variant }), className)}
        data-part="item"
        data-scope="menu"
        data-variant={variant}
        type={type}
      />
    </li>
  );
}

export function MenuLink({
  active = false,
  className,
  ...rest
}: MenuLinkProps) {
  const { slots } = useStyles();

  return (
    <li className={slots.wrapper()} data-part="item-wrapper" data-scope="menu">
      <ark.a
        {...rest}
        aria-current={active ? "page" : undefined}
        className={slots.link({ className })}
        data-active={active}
        data-part="link"
        data-scope="menu"
      />
    </li>
  );
}

const MenuSeparatorDiv = withContext("div", {
  defaultProps: { "aria-hidden": true, role: "separator" },
  name: "Separator",
});

const MenuSeparatorItem = withContext("li", {
  defaultProps: { "aria-hidden": true, role: "separator" },
  name: "Separator",
});

export function MenuSeparator(props: MenuSeparatorProps) {
  const insideList = use(MenuInsideListContext);

  return insideList ? (
    <MenuSeparatorItem {...(props as ComponentPropsWithRef<"li">)} />
  ) : (
    <MenuSeparatorDiv {...props} />
  );
}

export const MenuShortcut = withContext("span", {
  name: "Shortcut",
});
// #endregion

// #region Types
export type MenuRootProps = ComponentProps<typeof MenuRoot>;
export type MenuPartProps = ComponentPropsWithRef<"div">;
export type MenuListProps = ComponentPropsWithRef<"ul">;

export interface MenuItemProps
  extends HTMLArkProps<"button">, MenuItemRootContract {}

export interface MenuLinkProps extends HTMLArkProps<"a"> {
  /** Whether the link represents the current page */
  active?: boolean;
}

export type MenuGroupLabelProps = ComponentPropsWithRef<"div">;
export type MenuSeparatorProps = ComponentPropsWithRef<"div">;
export type MenuShortcutProps = ComponentPropsWithRef<"span">;

export interface MenuProps extends MenuRootProps, MenuContract {}
// #endregion

// #region Display Names
MenuRoot.displayName = "Menu";
MenuItem.displayName = "Menu.Item";
MenuLink.displayName = "Menu.Link";
MenuList.displayName = "Menu.List";
MenuSeparator.displayName = "Menu.Separator";
// #endregion

export const Menu = Object.assign(MenuRoot, {
  Group: MenuGroup,
  GroupLabel: MenuGroupLabel,
  Item: MenuItem,
  Link: MenuLink,
  List: MenuList,
  Root: MenuRoot,
  Separator: MenuSeparator,
  Shortcut: MenuShortcut,
});
