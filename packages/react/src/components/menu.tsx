import { ark } from "@ark-ui/react/factory";
import type {
  MenuItemProps as BaseMenuItemProps,
  MenuProps as BaseMenuRootProps,
} from "@pisagor/props";
import { menuItemRecipe, menuRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { ComponentProps, FunctionComponent } from "react";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";

// #region Context
const {
  useStyles: useMenu,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Menu",
  recipe: menuRecipe,
});
// #endregion

// #region Types
export interface MenuRootProps
  extends ComponentProps<typeof ark.nav>,
    BaseMenuRootProps {}

export type MenuPartProps = ComponentProps<typeof ark.div>;

export type MenuListProps = ComponentProps<typeof ark.ul>;

export interface MenuItemProps
  extends ComponentProps<typeof ark.button>,
    BaseMenuItemProps {}

export interface MenuLinkProps extends ComponentProps<typeof ark.a> {
  /** Whether the link represents the current page */
  active?: boolean;
}

export type MenuGroupLabelProps = ComponentProps<typeof ark.div>;

export type MenuSeparatorProps = ComponentProps<typeof ark.div>;

export type MenuShortcutProps = ComponentProps<typeof ark.span>;
// #endregion

// #region Parts
const MenuRootBase = withProvider(ark.nav, {
  defaultProps: { "aria-label": "Menu" },
  name: "Root",
  slot: "base",
}) as FunctionComponent<MenuRootProps>;

export function MenuRoot({
  "aria-label": ariaLabel = "Menu",
  ...rest
}: MenuRootProps) {
  return <MenuRootBase {...rest} aria-label={ariaLabel} />;
}

export const MenuList = withContext(ark.ul, {
  defaultProps: { role: "list" },
  name: "List",
});

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
  const { slots } = useMenu();

  return (
    <ark.li
      className={slots.wrapper()}
      data-part="item-wrapper"
      data-scope="menu"
      role="none"
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
  const { slots } = useMenu();

  return (
    <ark.li
      className={slots.wrapper()}
      data-part="item-wrapper"
      data-scope="menu"
      role="none"
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

export const MenuSeparator = withContext(ark.div, {
  defaultProps: { "aria-hidden": true, role: "separator" },
  name: "Separator",
});

export const MenuShortcut = withContext(ark.span, {
  name: "Shortcut",
});
// #endregion

// #region Display Names
MenuRoot.displayName = "Menu";
MenuItem.displayName = "Menu.Item";
MenuLink.displayName = "Menu.Link";
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
