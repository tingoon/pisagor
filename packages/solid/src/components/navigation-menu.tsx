import { ark } from "@ark-ui/solid/factory";
import type { NavigationMenuProps as BaseNavigationMenuProps } from "@pisagor/props";
import { navigationMenuRecipe } from "@pisagor/recipes";
import type { Component, ComponentProps, JSX } from "solid-js";
import { splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";

// #region Context
const {
  useStyles: useNavigationMenu,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "NavigationMenu",
  recipe: navigationMenuRecipe,
});
// #endregion

export interface NavigationMenuProps
  extends ComponentProps<typeof ark.nav>,
    BaseNavigationMenuProps {}

export type NavigationMenuPartProps = ComponentProps<typeof ark.ul>;
export type NavigationMenuItemProps = ComponentProps<typeof ark.li>;

export interface NavigationMenuLinkProps extends ComponentProps<typeof ark.a> {
  active?: boolean;
}

export const NavigationMenuRoot: Component<NavigationMenuProps> = withProvider(
  ark.nav,
  { name: "Root", slot: "base" },
);

export const NavigationMenuList: Component<NavigationMenuPartProps> =
  withContext(ark.ul, { name: "List" });

export const NavigationMenuItem: Component<NavigationMenuItemProps> =
  withContext(ark.li, { name: "Item" });

export function NavigationMenuLink(
  props: NavigationMenuLinkProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["active", "class"]);
  const styles = useNavigationMenu();
  const active = () => local.active ?? false;

  return (
    <ark.a
      {...rest}
      aria-current={active() ? "page" : undefined}
      class={styles.slots.link({ class: local.class })}
      data-active={active()}
      data-part="link"
      data-scope="navigation-menu"
    />
  );
}

export const NavigationMenu = Object.assign(NavigationMenuRoot, {
  Item: NavigationMenuItem,
  Link: NavigationMenuLink,
  List: NavigationMenuList,
});
