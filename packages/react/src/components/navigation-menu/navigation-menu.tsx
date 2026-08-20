import { ark } from "@ark-ui/react/factory";
import { navigationMenuVariants } from "@pisagor/styles/ui/navigation-menu";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import type { VariantClassNames, WithTestId } from "../../internal/types";

// #region Types
type NavigationMenuClassNames = VariantClassNames<typeof navigationMenuVariants>;

interface NavigationMenuProps extends ComponentProps<typeof ark.nav>, WithTestId {
  /** Slot class names */
  classNames?: NavigationMenuClassNames;
}

interface NavigationMenuPartProps extends ComponentProps<typeof ark.ul> {
  /** Slot class names */
  classNames?: NavigationMenuClassNames;
}

interface NavigationMenuItemProps extends ComponentProps<typeof ark.li> {
  /** Slot class names */
  classNames?: NavigationMenuClassNames;
}

interface NavigationMenuLinkProps extends ComponentProps<typeof ark.a> {
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
      className={cn(slots.root(), className, classNames?.root)}
      data-part="root"
      data-scope="navigation-menu"
      data-testid={testId}
    />
  );
}
NavigationMenuRoot.displayName = "NavigationMenu";

export function NavigationMenuList({ className, classNames, ...rest }: NavigationMenuPartProps) {
  const slots = navigationMenuVariants();

  return (
    <ark.ul
      {...rest}
      className={cn(slots.list(), className, classNames?.list)}
      data-part="list"
      data-scope="navigation-menu"
    />
  );
}
NavigationMenuList.displayName = "NavigationMenu.List";

export function NavigationMenuItem({ className, classNames, ...rest }: NavigationMenuItemProps) {
  const slots = navigationMenuVariants();

  return (
    <ark.li
      {...rest}
      className={cn(slots.item(), className, classNames?.item)}
      data-part="item"
      data-scope="navigation-menu"
    />
  );
}
NavigationMenuItem.displayName = "NavigationMenu.Item";

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
      className={cn(slots.link(), className, classNames?.link)}
      data-active={active}
      data-part="link"
      data-scope="navigation-menu"
    />
  );
}
NavigationMenuLink.displayName = "NavigationMenu.Link";
// #endregion
