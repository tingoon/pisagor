import { ark, type HTMLArkProps } from "@ark-ui/solid";
import type {
  MenuItemRootContract,
  MenuRootContract,
  MenuContract,
} from "@pisagor/props";
import { menuItemRecipe, menuRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { Component, ComponentProps, JSX } from "solid-js";
import { createContext, splitProps, useContext } from "solid-js";
import { createSlotRecipeContext } from "../internal";
import { useLocale } from "./provider/context";

// #region Context
const { useStyles, withContext, withProvider } = createSlotRecipeContext({
  name: "Menu",
  recipe: menuRecipe,
});
// #endregion

export interface MenuRootProps
  extends ComponentProps<"nav">, MenuRootContract {}

export interface MenuProps extends MenuRootProps, MenuContract {}

export type MenuPartProps = ComponentProps<"div">;
export type MenuListProps = ComponentProps<"ul">;

export interface MenuItemProps
  extends HTMLArkProps<"button">, MenuItemRootContract {}

export interface MenuLinkProps extends HTMLArkProps<"a"> {
  active?: boolean;
}

export type MenuGroupLabelProps = ComponentProps<"div">;
export type MenuSeparatorProps = ComponentProps<"div">;
export type MenuShortcutProps = ComponentProps<"span">;

const MenuRootBase: Component<MenuRootProps> = withProvider("nav", {
  name: "Root",
  slot: "base",
});

export function MenuRoot(props: MenuRootProps): JSX.Element {
  const { m } = useLocale();
  const [local, rest] = splitProps(props, ["aria-label"]);

  return (
    <MenuRootBase {...rest} aria-label={m("menu.label", local["aria-label"])} />
  );
}

/** True inside `Menu.List`, so separators render as `<li>`. */
const MenuInsideListContext = createContext(false);

const MenuListBase: Component<MenuListProps> = withContext("ul", {
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

export const MenuGroup: Component<MenuPartProps> = withContext("div", {
  defaultProps: { role: "group" },
  name: "Group",
});

export const MenuGroupLabel: Component<MenuGroupLabelProps> = withContext(
  "div",
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
  const styles = useStyles();
  const variant = () => local.variant ?? "default";
  const recipe = () => local.recipe ?? menuItemRecipe;

  return (
    <li
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
    </li>
  );
}

export function MenuLink(props: MenuLinkProps): JSX.Element {
  const [local, rest] = splitProps(props, ["active", "class"]);
  const styles = useStyles();
  const active = () => local.active ?? false;

  return (
    <li
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
    </li>
  );
}

const MenuSeparatorDiv: Component<MenuSeparatorProps> = withContext("div", {
  defaultProps: { "aria-hidden": true, role: "separator" },
  name: "Separator",
});

const MenuSeparatorItem: Component<ComponentProps<"li">> = withContext("li", {
  defaultProps: { "aria-hidden": true, role: "separator" },
  name: "Separator",
});

export function MenuSeparator(props: MenuSeparatorProps): JSX.Element {
  const insideList = useContext(MenuInsideListContext);

  return insideList ? (
    <MenuSeparatorItem {...(props as ComponentProps<"li">)} />
  ) : (
    <MenuSeparatorDiv {...props} />
  );
}

export const MenuShortcut: Component<MenuShortcutProps> = withContext("span", {
  name: "Shortcut",
});

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
