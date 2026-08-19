import { ark } from "@ark-ui/react/factory";
import {
  menuItemVariants,
  menuItemWrapper2Variants,
  menuItemWrapperVariants,
  menuVariants,
} from "@pisagor/styles/ui/menu";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";
import type { VariantClassNames, WithTestId } from "../../internal/types";

// #region Variants

// #endregion

// #region Types
type MenuClassNames = VariantClassNames<typeof menuVariants>;

interface MenuRootProps extends ComponentProps<typeof ark.nav>, WithTestId {
  /** Slot class names */
  classNames?: MenuClassNames;
}

interface MenuPartProps extends ComponentProps<typeof ark.div> {
  /** Slot class names */
  classNames?: MenuClassNames;
}

interface MenuListProps extends ComponentProps<typeof ark.ul> {
  /** Slot class names */
  classNames?: MenuClassNames;
}

interface MenuItemProps
  extends ComponentProps<typeof ark.button>,
    VariantProps<typeof menuItemVariants> {
  /** Slot class names */
  classNames?: MenuClassNames;
}

interface MenuLinkProps extends ComponentProps<typeof ark.a> {
  /** Whether the link represents the current page */
  active?: boolean;
  /** Slot class names */
  classNames?: MenuClassNames;
}
// #endregion

// #region Components
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
      className={cn(slots.root(), className, classNames?.root)}
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
      className={cn(slots.list(), className, classNames?.list)}
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
      className={cn(slots.group(), className, classNames?.group)}
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
      className={cn(slots.groupLabel(), className, classNames?.groupLabel)}
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
  return (
    <ark.li
      className={menuItemWrapperVariants()}
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
      className={menuItemWrapper2Variants()}
      data-part="item-wrapper"
      data-scope="menu"
      role="none"
    >
      <ark.a
        {...rest}
        aria-current={active ? "page" : undefined}
        className={cn(slots.link(), className, classNames?.link)}
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
      className={cn(slots.separator(), className, classNames?.separator)}
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
      className={cn(slots.shortcut(), className, classNames?.shortcut)}
      data-part="shortcut"
      data-scope="menu"
    />
  );
}
MenuShortcut.displayName = "Menu.Shortcut";
// #endregion
