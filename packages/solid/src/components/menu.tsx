import { ark } from "@ark-ui/solid/factory";
import type {
  MenuItemProps as BaseMenuItemProps,
  MenuProps as BaseMenuRootProps,
} from "@pisagor/props";
import { menuItemRecipe, menuRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { Component, ComponentProps, JSX } from "solid-js";
import { createContext, splitProps, useContext } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { useTranslation } from "./provider/context";

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

export interface MenuRootProps
  extends ComponentProps<typeof ark.nav>,
    BaseMenuRootProps {}

export type MenuPartProps = ComponentProps<typeof ark.div>;
export type MenuListProps = ComponentProps<typeof ark.ul>;

export interface MenuItemProps
  extends ComponentProps<typeof ark.button>,
    BaseMenuItemProps {}

export interface MenuLinkProps extends ComponentProps<typeof ark.a> {
  active?: boolean;
}

export type MenuGroupLabelProps = ComponentProps<typeof ark.div>;
export type MenuSeparatorProps = ComponentProps<typeof ark.div>;
export type MenuShortcutProps = ComponentProps<typeof ark.span>;

const MenuRootBase: Component<MenuRootProps> = withProvider(ark.nav, {
  name: "Root",
  slot: "base",
});

export function MenuRoot(props: MenuRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["aria-label"]);

  return (
    <MenuRootBase
      {...rest}
      aria-label={local["aria-label"] ?? useTranslation("menu.label")}
    />
  );
}

/** True inside `Menu.List`, so separators render as `<li>`. */
const MenuInsideListContext = createContext(false);

const MenuListBase: Component<MenuListProps> = withContext(ark.ul, {
  defaultProps: { role: "list" },
  name: "List",
});

export function MenuList(props: MenuListProps): JSX.Element {
  return (
    <MenuInsideListContext.Provider value={true}>
      <MenuListBase {...props} />
    </MenuInsideListContext.Provider>
  );
}

export const MenuGroup: Component<MenuPartProps> = withContext(ark.div, {
  defaultProps: { role: "group" },
  name: "Group",
});

export const MenuGroupLabel: Component<MenuGroupLabelProps> = withContext(
  ark.div,
  {
    defaultProps: { "data-part": "group-label" },
    name: "GroupLabel",
    slot: "groupLabel",
  },
);

export function MenuItem(props: MenuItemProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "variant",
    "type",
    "recipe",
    "class",
  ]);
  const styles = useMenu();
  const variant = () => local.variant ?? "default";
  const recipe = () => local.recipe ?? menuItemRecipe;

  return (
    <ark.li
      class={styles.slots.wrapper()}
      data-part="item-wrapper"
      data-scope="menu"
    >
      <ark.button
        {...rest}
        class={cn(recipe()({ variant: variant() }), local.class)}
        data-part="item"
        data-scope="menu"
        data-variant={variant()}
        type={local.type ?? "button"}
      />
    </ark.li>
  );
}

export function MenuLink(props: MenuLinkProps): JSX.Element {
  const [local, rest] = splitProps(props, ["active", "class"]);
  const styles = useMenu();
  const active = () => local.active ?? false;

  return (
    <ark.li
      class={styles.slots.wrapper()}
      data-part="item-wrapper"
      data-scope="menu"
    >
      <ark.a
        {...rest}
        aria-current={active() ? "page" : undefined}
        class={styles.slots.link({ class: local.class })}
        data-active={active()}
        data-part="link"
        data-scope="menu"
      />
    </ark.li>
  );
}

const MenuSeparatorDiv: Component<MenuSeparatorProps> = withContext(ark.div, {
  defaultProps: { "aria-hidden": true, role: "separator" },
  name: "Separator",
});

const MenuSeparatorItem: Component<ComponentProps<typeof ark.li>> = withContext(
  ark.li,
  {
    defaultProps: { "aria-hidden": true, role: "separator" },
    name: "Separator",
  },
);

export function MenuSeparator(props: MenuSeparatorProps): JSX.Element {
  const insideList = useContext(MenuInsideListContext);

  return insideList ? (
    <MenuSeparatorItem {...(props as ComponentProps<typeof ark.li>)} />
  ) : (
    <MenuSeparatorDiv {...props} />
  );
}

export const MenuShortcut: Component<MenuShortcutProps> = withContext(
  ark.span,
  { name: "Shortcut" },
);

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
