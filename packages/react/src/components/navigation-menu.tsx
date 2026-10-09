import { ark } from "@ark-ui/react/factory";
import type { NavigationMenuProps as BaseNavigationMenuProps } from "@pisagor/props";
import { navigationMenuRecipe } from "@pisagor/recipes";
import type { ComponentProps, FunctionComponent } from "react";
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

// #region Types
export interface NavigationMenuProps
  extends ComponentProps<typeof ark.nav>,
    BaseNavigationMenuProps {}

export type NavigationMenuPartProps = ComponentProps<typeof ark.ul>;

export type NavigationMenuItemProps = ComponentProps<typeof ark.li>;

export interface NavigationMenuLinkProps extends ComponentProps<typeof ark.a> {
  /** Whether the link represents the current page */
  active?: boolean;
}
// #endregion

// #region Parts
export const NavigationMenuRoot = withProvider(ark.nav, {
  name: "Root",
  slot: "base",
}) as FunctionComponent<NavigationMenuProps>;

export const NavigationMenuList = withContext(ark.ul, {
  name: "List",
});

export const NavigationMenuItem = withContext(ark.li, {
  name: "Item",
});

export function NavigationMenuLink({
  active = false,
  className,
  ...rest
}: NavigationMenuLinkProps) {
  const { slots } = useNavigationMenu();

  return (
    <ark.a
      {...rest}
      aria-current={active ? "page" : undefined}
      className={slots.link({ className })}
      data-active={active}
      data-part="link"
      data-scope="navigation-menu"
    />
  );
}
// #endregion

// #region Display Names
NavigationMenuLink.displayName = "NavigationMenu.Link";
// #endregion

export const NavigationMenu = Object.assign(NavigationMenuRoot, {
  Item: NavigationMenuItem,
  Link: NavigationMenuLink,
  List: NavigationMenuList,
});
