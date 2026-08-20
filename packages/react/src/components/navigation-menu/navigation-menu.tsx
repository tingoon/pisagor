import { ark } from "@ark-ui/react/factory";
import {
  type NavigationMenuSlots,
  navigationMenuVariants,
} from "@pisagor/styles/ui/navigation-menu";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import type { VariantClassNames, WithTestId } from "../../internal/types";

// #region Types
type NavigationMenuClassNames = VariantClassNames<NavigationMenuSlots>;

export interface NavigationMenuProps extends ComponentProps<typeof ark.nav>, WithTestId {
  /** Slot class names */
  classNames?: NavigationMenuClassNames;
}

export interface NavigationMenuPartProps extends ComponentProps<typeof ark.ul> {
  /** Slot class names */
  classNames?: NavigationMenuClassNames;
}

export interface NavigationMenuItemProps extends ComponentProps<typeof ark.li> {
  /** Slot class names */
  classNames?: NavigationMenuClassNames;
}

export interface NavigationMenuLinkProps extends ComponentProps<typeof ark.a> {
  /** Whether the link represents the current page */
  active?: boolean;
  /** Slot class names */
  classNames?: NavigationMenuClassNames;
}
// #endregion

// #region Parts
export function NavigationMenuRoot({
  className,
  classNames,
  testId,
  ...rest
}: NavigationMenuProps) {
  const slots = navigationMenuVariants();

  return (
    <ark.nav
      {...rest}
      className={slots.base({ className: className })}
      data-part="root"
      data-scope="navigation-menu"
      data-testid={testId}
    />
  );
}

export function NavigationMenuList({ className, classNames, ...rest }: NavigationMenuPartProps) {
  const slots = navigationMenuVariants();

  return (
    <ark.ul
      {...rest}
      className={slots.list({ className: cn(className, classNames?.list) })}
      data-part="list"
      data-scope="navigation-menu"
    />
  );
}

export function NavigationMenuItem({ className, classNames, ...rest }: NavigationMenuItemProps) {
  const slots = navigationMenuVariants();

  return (
    <ark.li
      {...rest}
      className={slots.item({ className: cn(className, classNames?.item) })}
      data-part="item"
      data-scope="navigation-menu"
    />
  );
}

export function NavigationMenuLink({
  active = false,
  className,
  classNames,
  ...rest
}: NavigationMenuLinkProps) {
  const slots = navigationMenuVariants();

  return (
    <ark.a
      {...rest}
      aria-current={active ? "page" : undefined}
      className={slots.link({ className: cn(className, classNames?.link) })}
      data-active={active}
      data-part="link"
      data-scope="navigation-menu"
    />
  );
}

NavigationMenuRoot.displayName = "NavigationMenu";
NavigationMenuList.displayName = "NavigationMenu.List";
NavigationMenuItem.displayName = "NavigationMenu.Item";
NavigationMenuLink.displayName = "NavigationMenu.Link";
// #endregion
