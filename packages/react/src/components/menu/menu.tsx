import { ark } from "@ark-ui/react/factory";
import {
  type MenuItemVariantProps,
  type MenuSlots,
  menuItemVariants,
  menuVariants,
} from "@pisagor/styles/ui/menu";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import type { VariantClassNames, WithTestId } from "../../internal/types";

// #region Types
type MenuClassNames = VariantClassNames<MenuSlots>;

export interface MenuRootProps extends ComponentProps<typeof ark.nav>, WithTestId {
  /** Slot class names */
  classNames?: MenuClassNames;
}

export interface MenuPartProps extends ComponentProps<typeof ark.div> {
  /** Slot class names */
  classNames?: MenuClassNames;
}

export interface MenuListProps extends ComponentProps<typeof ark.ul> {
  /** Slot class names */
  classNames?: MenuClassNames;
}

export interface MenuItemProps extends ComponentProps<typeof ark.button>, MenuItemVariantProps {
  /** Slot class names */
  classNames?: MenuClassNames;
}

export interface MenuLinkProps extends ComponentProps<typeof ark.a> {
  /** Whether the link represents the current page */
  active?: boolean;
  /** Slot class names */
  classNames?: MenuClassNames;
}
// #endregion

// #region Parts
export function MenuRoot({
  "aria-label": ariaLabel = "Menu",
  className,
  classNames,
  testId,
  ...rest
}: MenuRootProps) {
  const slots = menuVariants();

  return (
    <ark.nav
      {...rest}
      aria-label={ariaLabel}
      className={slots.base({ className: className })}
      data-part="root"
      data-scope="menu"
      data-testid={testId}
    />
  );
}
MenuRoot.displayName = "Menu";

export function MenuList({ className, classNames, ...rest }: MenuListProps) {
  const slots = menuVariants();

  return (
    <ark.ul
      {...rest}
      className={slots.list({ className: cn(className, classNames?.list) })}
      data-part="list"
      data-scope="menu"
      role="list"
    />
  );
}
MenuList.displayName = "Menu.List";

export function MenuGroup({ className, classNames, ...rest }: MenuPartProps) {
  const slots = menuVariants();

  return (
    <ark.div
      {...rest}
      className={slots.group({ className: cn(className, classNames?.group) })}
      data-part="group"
      data-scope="menu"
      role="group"
    />
  );
}
MenuGroup.displayName = "Menu.Group";

export function MenuGroupLabel({
  className,
  classNames,
  ...rest
}: ComponentProps<typeof ark.div> & { classNames?: MenuClassNames }) {
  const slots = menuVariants();

  return (
    <ark.div
      {...rest}
      className={slots.groupLabel({ className: cn(className, classNames?.groupLabel) })}
      data-part="group-label"
      data-scope="menu"
    />
  );
}
MenuGroupLabel.displayName = "Menu.GroupLabel";

export function MenuItem({
  className,
  classNames,
  type = "button",
  variant = "default",
  ...rest
}: MenuItemProps) {
  const slots = menuVariants();

  return (
    <ark.li
      className={slots.wrapper({ className: classNames?.wrapper })}
      data-part="item-wrapper"
      data-scope="menu"
      role="none"
    >
      <ark.button
        {...rest}
        className={cn(menuItemVariants({ variant }), className, classNames?.item)}
        data-part="item"
        data-scope="menu"
        data-variant={variant}
        type={type}
      />
    </ark.li>
  );
}
MenuItem.displayName = "Menu.Item";

export function MenuLink({ active = false, className, classNames, ...rest }: MenuLinkProps) {
  const slots = menuVariants();

  return (
    <ark.li
      className={slots.wrapper({ className: classNames?.wrapper })}
      data-part="item-wrapper"
      data-scope="menu"
      role="none"
    >
      <ark.a
        {...rest}
        aria-current={active ? "page" : undefined}
        className={slots.link({ className: cn(className, classNames?.link) })}
        data-active={active}
        data-part="link"
        data-scope="menu"
      />
    </ark.li>
  );
}
MenuLink.displayName = "Menu.Link";

export function MenuSeparator({
  className,
  classNames,
  ...rest
}: ComponentProps<typeof ark.div> & { classNames?: MenuClassNames }) {
  const slots = menuVariants();

  return (
    <ark.div
      {...rest}
      aria-hidden
      className={slots.separator({ className: cn(className, classNames?.separator) })}
      data-part="separator"
      data-scope="menu"
      role="separator"
    />
  );
}
MenuSeparator.displayName = "Menu.Separator";

export function MenuShortcut({
  className,
  classNames,
  ...rest
}: ComponentProps<typeof ark.span> & { classNames?: MenuClassNames }) {
  const slots = menuVariants();

  return (
    <ark.span
      {...rest}
      className={slots.shortcut({ className: cn(className, classNames?.shortcut) })}
      data-part="shortcut"
      data-scope="menu"
    />
  );
}
MenuShortcut.displayName = "Menu.Shortcut";
// #endregion
