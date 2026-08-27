import { ark } from "@ark-ui/react/factory";
import { navigationMenuVariants } from "@pisagor/recipes/navigation-menu";
import type { ComponentProps } from "react";
import { useMemo } from "react";
import { NavigationMenuContext, useNavigationMenu } from "./navigation-menu.context";

// #region Types
export interface NavigationMenuProps extends ComponentProps<typeof ark.nav> {}

export interface NavigationMenuPartProps extends ComponentProps<typeof ark.ul> {}

export interface NavigationMenuItemProps extends ComponentProps<typeof ark.li> {}

export interface NavigationMenuLinkProps extends ComponentProps<typeof ark.a> {
  /** Whether the link represents the current page */
  active?: boolean;
}
// #endregion

// #region Parts
export function NavigationMenuRoot({ children, className, ...rest }: NavigationMenuProps) {
  const slots = useMemo(() => navigationMenuVariants(), []);

  return (
    <NavigationMenuContext value={{ slots }}>
      <ark.nav
        {...rest}
        className={slots.base({ className })}
        data-part="root"
        data-scope="navigation-menu"
      >
        {children}
      </ark.nav>
    </NavigationMenuContext>
  );
}

export function NavigationMenuList({ className, ...rest }: NavigationMenuPartProps) {
  const { slots } = useNavigationMenu();

  return (
    <ark.ul
      {...rest}
      className={slots.list({ className })}
      data-part="list"
      data-scope="navigation-menu"
    />
  );
}

export function NavigationMenuItem({ className, ...rest }: NavigationMenuItemProps) {
  const { slots } = useNavigationMenu();

  return (
    <ark.li
      {...rest}
      className={slots.item({ className })}
      data-part="item"
      data-scope="navigation-menu"
    />
  );
}

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
NavigationMenuRoot.displayName = "NavigationMenu";
NavigationMenuList.displayName = "NavigationMenu.List";
NavigationMenuItem.displayName = "NavigationMenu.Item";
NavigationMenuLink.displayName = "NavigationMenu.Link";
// #endregion
