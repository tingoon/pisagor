import { ark } from "@ark-ui/react/factory";
import { type MenuItemVariantProps, menuItemVariants, menuVariants } from "@pisagor/recipes/menu";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import { MenuContext, useMenu } from "./menu.context";

// #region Types
export type MenuRootProps = ComponentProps<typeof ark.nav>;

export type MenuPartProps = ComponentProps<typeof ark.div>;

export type MenuListProps = ComponentProps<typeof ark.ul>;

export type MenuItemProps = ComponentProps<typeof ark.button> & MenuItemVariantProps;

export interface MenuLinkProps extends ComponentProps<typeof ark.a> {
  /** Whether the link represents the current page */
  active?: boolean;
}

export type MenuGroupLabelProps = ComponentProps<typeof ark.div>;

export type MenuSeparatorProps = ComponentProps<typeof ark.div>;

export type MenuShortcutProps = ComponentProps<typeof ark.span>;
// #endregion

// #region Parts
export function MenuRoot({
  "aria-label": ariaLabel = "Menu",
  children,
  className,
  ...rest
}: MenuRootProps) {
  const slots = menuVariants();

  return (
    <MenuContext value={{ slots }}>
      <ark.nav
        {...rest}
        aria-label={ariaLabel}
        className={slots.base({ className })}
        data-part="root"
        data-scope="menu"
      >
        {children}
      </ark.nav>
    </MenuContext>
  );
}

export function MenuList({ className, ...rest }: MenuListProps) {
  const { slots } = useMenu();

  return (
    <ark.ul
      {...rest}
      className={slots.list({ className })}
      data-part="list"
      data-scope="menu"
      role="list"
    />
  );
}

export function MenuGroup({ className, ...rest }: MenuPartProps) {
  const { slots } = useMenu();

  return (
    <ark.div
      {...rest}
      className={slots.group({ className })}
      data-part="group"
      data-scope="menu"
      role="group"
    />
  );
}

export function MenuGroupLabel({ className, ...rest }: MenuGroupLabelProps) {
  const { slots } = useMenu();

  return (
    <ark.div
      {...rest}
      className={slots.groupLabel({ className })}
      data-part="group-label"
      data-scope="menu"
    />
  );
}

export function MenuItem({
  variant = "default",
  type = "button",
  className,
  ...rest
}: MenuItemProps) {
  const { slots } = useMenu();

  return (
    <ark.li className={slots.wrapper()} data-part="item-wrapper" data-scope="menu" role="none">
      <ark.button
        {...rest}
        className={cn(menuItemVariants({ variant }), className)}
        data-part="item"
        data-scope="menu"
        data-variant={variant}
        type={type}
      />
    </ark.li>
  );
}

export function MenuLink({ active = false, className, ...rest }: MenuLinkProps) {
  const { slots } = useMenu();

  return (
    <ark.li className={slots.wrapper()} data-part="item-wrapper" data-scope="menu" role="none">
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

export function MenuSeparator({ className, ...rest }: MenuSeparatorProps) {
  const { slots } = useMenu();

  return (
    <ark.div
      {...rest}
      aria-hidden
      className={slots.separator({ className })}
      data-part="separator"
      data-scope="menu"
      role="separator"
    />
  );
}

export function MenuShortcut({ className, ...rest }: MenuShortcutProps) {
  const { slots } = useMenu();

  return (
    <ark.span
      {...rest}
      className={slots.shortcut({ className })}
      data-part="shortcut"
      data-scope="menu"
    />
  );
}
// #endregion

// #region Display Names
MenuRoot.displayName = "Menu";
MenuList.displayName = "Menu.List";
MenuGroup.displayName = "Menu.Group";
MenuGroupLabel.displayName = "Menu.GroupLabel";
MenuItem.displayName = "Menu.Item";
MenuLink.displayName = "Menu.Link";
MenuSeparator.displayName = "Menu.Separator";
MenuShortcut.displayName = "Menu.Shortcut";
// #endregion
