import { ark, type HTMLArkProps } from "@ark-ui/react";
import type {
  MenuItemProps as BaseMenuItemProps,
  MenuProps as BaseMenuRootProps,
} from "@pisagor/props";
import { menuItemRecipe, menuRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { createContext, use } from "react";
import type { FunctionComponent } from "react";
import { createSlotRecipeContext } from "../internal";
import { useLocale } from "./provider/context";

// #region Context
const { useStyles, withContext, withProvider } = createSlotRecipeContext({
  name: "Menu",
  recipe: menuRecipe,
});
// #endregion

// #region Types
export interface MenuRootProps extends HTMLArkProps<"nav">, BaseMenuRootProps {}

export type MenuPartProps = HTMLArkProps<"div">;

export type MenuListProps = HTMLArkProps<"ul">;

export interface MenuItemProps
  extends HTMLArkProps<"button">, BaseMenuItemProps {}

export interface MenuLinkProps extends HTMLArkProps<"a"> {
  /** Whether the link represents the current page */
  active?: boolean;
}

export type MenuGroupLabelProps = HTMLArkProps<"div">;

export type MenuSeparatorProps = HTMLArkProps<"div">;

export type MenuShortcutProps = HTMLArkProps<"span">;
// #endregion

// #region Parts
const MenuRootBase = withProvider(ark.nav, {
  name: "Root",
  slot: "base",
}) as FunctionComponent<MenuRootProps>;

export function MenuRoot({
  "aria-label": ariaLabelProp,
  ...rest
}: MenuRootProps) {
  const { m } = useLocale();
  const ariaLabel = m("menu.label", ariaLabelProp);

  return <MenuRootBase {...rest} aria-label={ariaLabel} />;
}

/** True inside `Menu.List`, so separators render as `<li>`. */
const MenuInsideListContext = createContext(false);

const MenuListBase = withContext(ark.ul, {
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

export const MenuGroup = withContext(ark.div, {
  defaultProps: { role: "group" },
  name: "Group",
});

export const MenuGroupLabel = withContext(ark.div, {
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
    <ark.li
      className={slots.wrapper()}
      data-part="item-wrapper"
      data-scope="menu"
    >
      <ark.button
        {...rest}
        className={cn(recipe({ variant }), className)}
        data-part="item"
        data-scope="menu"
        data-variant={variant}
        type={type}
      />
    </ark.li>
  );
}

export function MenuLink({
  active = false,
  className,
  ...rest
}: MenuLinkProps) {
  const { slots } = useStyles();

  return (
    <ark.li
      className={slots.wrapper()}
      data-part="item-wrapper"
      data-scope="menu"
    >
      <ark.a
        {...rest}
        aria-current={active ? "page" : undefined}
        className={slots.link({ className })}
        data-active={active}
        data-part="link"
        data-scope="menu"
      />
    </ark.li>
  );
}

const MenuSeparatorDiv = withContext(ark.div, {
  defaultProps: { "aria-hidden": true, role: "separator" },
  name: "Separator",
});

const MenuSeparatorItem = withContext(ark.li, {
  defaultProps: { "aria-hidden": true, role: "separator" },
  name: "Separator",
});

export function MenuSeparator(props: MenuSeparatorProps) {
  const insideList = use(MenuInsideListContext);

  return insideList ? (
    <MenuSeparatorItem {...(props as HTMLArkProps<"li">)} />
  ) : (
    <MenuSeparatorDiv {...props} />
  );
}

export const MenuShortcut = withContext(ark.span, {
  name: "Shortcut",
});
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
