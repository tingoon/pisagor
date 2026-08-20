import { Portal } from "@ark-ui/react";
import { ark } from "@ark-ui/react/factory";
import { type MenuContentProps, Menu as MenuPrimitive } from "@ark-ui/react/menu";
import { CaretRightIcon, CheckIcon } from "@phosphor-icons/react";
import {
  type DropdownMenuItemVariantProps,
  dropdownMenuContentVariants,
  dropdownMenuInline5Variants,
  dropdownMenuItemGroupLabelVariants,
  dropdownMenuItemVariants,
  dropdownMenuPositionerVariants,
  dropdownMenuQuickItemVariants,
  dropdownMenuSeparatorVariants,
  dropdownMenuShortcutVariants,
} from "@pisagor/styles/ui/dropdown-menu";
import type { ComponentProps } from "react";
import type { WithTestId } from "../../internal/types";
import { DropdownMenuRootContext, useDropdownMenuRoot } from "./dropdown-menu.context";

// #region Types
export interface DropdownMenuItemGroupProps extends ComponentProps<typeof MenuPrimitive.ItemGroup> {
  /** The heading of the menu item group. */
  heading?: string;
}

export interface DropdownMenuItemProps
  extends ComponentProps<typeof MenuPrimitive.Item>,
    DropdownMenuItemVariantProps {}

export interface DropdownMenuRadioItemGroupProps
  extends ComponentProps<typeof MenuPrimitive.RadioItemGroup> {
  /** The heading of the menu radio item group. */
  heading?: string;
}

export interface DropdownMenuRootProps
  extends ComponentProps<typeof MenuPrimitive.Root>,
    WithTestId {}

export type DropdownMenuTriggerProps = ComponentProps<typeof MenuPrimitive.Trigger>;

export type DropdownMenuPositionerProps = ComponentProps<typeof MenuPrimitive.Positioner>;

export type DropdownMenuCheckboxItemProps = ComponentProps<typeof MenuPrimitive.CheckboxItem>;

export type DropdownMenuItemGroupLabelProps = ComponentProps<typeof MenuPrimitive.ItemGroupLabel>;

export type DropdownMenuRadioItemProps = ComponentProps<typeof MenuPrimitive.RadioItem>;

export type DropdownMenuSubContentProps = ComponentProps<typeof MenuPrimitive.Content>;

export type DropdownMenuArrowProps = ComponentProps<typeof MenuPrimitive.Arrow>;

export type DropdownMenuSeparatorProps = ComponentProps<typeof MenuPrimitive.Separator>;

export type DropdownMenuTriggerItemProps = ComponentProps<typeof MenuPrimitive.TriggerItem>;

export type DropdownMenuContentProps = MenuContentProps;

export type DropdownMenuShortcutProps = ComponentProps<typeof ark.span> & {
  dataPart?: string;
  dataScope?: string;
};
// #endregion

// #region Parts
export function DropdownMenuRoot({
  lazyMount = true,
  positioning = { placement: "bottom-end" },
  unmountOnExit = true,
  testId,
  ...rest
}: DropdownMenuRootProps) {
  const { "data-testid": dataTestId, ...props } = rest as typeof rest & { "data-testid"?: string };

  return (
    <DropdownMenuRootContext value={{ testId: dataTestId ?? testId }}>
      <MenuPrimitive.Root
        lazyMount={lazyMount}
        positioning={positioning}
        unmountOnExit={unmountOnExit}
        {...props}
      />
    </DropdownMenuRootContext>
  );
}

export function DropdownMenuTrigger(props: DropdownMenuTriggerProps) {
  const { testId } = useDropdownMenuRoot() ?? {};

  return <MenuPrimitive.Trigger data-testid={testId} {...props} />;
}

export function DropdownMenuPositioner({ className, ...rest }: DropdownMenuPositionerProps) {
  return (
    <MenuPrimitive.Positioner {...rest} className={dropdownMenuPositionerVariants({ className })} />
  );
}

export function DropdownMenuContent({ className, children, ...rest }: DropdownMenuContentProps) {
  return (
    <Portal>
      <DropdownMenuPositioner>
        <MenuPrimitive.Content {...rest} className={dropdownMenuContentVariants({ className })}>
          {children}
        </MenuPrimitive.Content>
      </DropdownMenuPositioner>
    </Portal>
  );
}

export function DropdownMenuItemGroup({ heading, children, ...rest }: DropdownMenuItemGroupProps) {
  return (
    <MenuPrimitive.ItemGroup {...rest}>
      {!!heading && <DropdownMenuItemGroupLabel>{heading}</DropdownMenuItemGroupLabel>}

      {children}
    </MenuPrimitive.ItemGroup>
  );
}

export function DropdownMenuSeparator({ className, ...rest }: DropdownMenuSeparatorProps) {
  return (
    <MenuPrimitive.Separator {...rest} className={dropdownMenuSeparatorVariants({ className })} />
  );
}

export function DropdownMenuItem({
  variant = "default",
  className,
  ...rest
}: DropdownMenuItemProps) {
  return (
    <MenuPrimitive.Item
      {...rest}
      className={dropdownMenuItemVariants({ variant }).base({ className })}
      data-variant={variant}
    />
  );
}

export function DropdownMenuQuickItem({
  variant = "default",
  className,
  ...rest
}: DropdownMenuItemProps) {
  return (
    <MenuPrimitive.Item
      {...rest}
      className={dropdownMenuItemVariants({ variant }).base({
        className: dropdownMenuQuickItemVariants({ className }),
      })}
    />
  );
}

export function DropdownMenuCheckboxItem({
  className,
  children,
  ...rest
}: DropdownMenuCheckboxItemProps) {
  const slots = dropdownMenuItemVariants({ inset: true, variant: "default" });

  return (
    <MenuPrimitive.CheckboxItem {...rest} className={slots.base({ className })}>
      <MenuPrimitive.ItemIndicator className={slots.indicator()}>
        <CheckIcon />
      </MenuPrimitive.ItemIndicator>

      <MenuPrimitive.ItemText className={slots.text()}>{children}</MenuPrimitive.ItemText>
    </MenuPrimitive.CheckboxItem>
  );
}

export function DropdownMenuRadioItemGroup({
  heading,
  children,
  ...rest
}: DropdownMenuRadioItemGroupProps) {
  return (
    <MenuPrimitive.RadioItemGroup {...rest}>
      {!!heading && <DropdownMenuItemGroupLabel>{heading}</DropdownMenuItemGroupLabel>}

      {children}
    </MenuPrimitive.RadioItemGroup>
  );
}

export function DropdownMenuItemGroupLabel({
  className,
  ...rest
}: DropdownMenuItemGroupLabelProps) {
  return (
    <MenuPrimitive.ItemGroupLabel
      {...rest}
      className={dropdownMenuItemGroupLabelVariants({ className })}
    />
  );
}

export function DropdownMenuRadioItem({
  className,
  children,
  ...rest
}: DropdownMenuRadioItemProps) {
  const slots = dropdownMenuItemVariants({ inset: true, variant: "default" });

  return (
    <MenuPrimitive.RadioItem {...rest} className={slots.base({ className })}>
      <MenuPrimitive.ItemIndicator className={slots.indicator()}>
        <CheckIcon />
      </MenuPrimitive.ItemIndicator>

      <MenuPrimitive.ItemText className={slots.text()}>{children}</MenuPrimitive.ItemText>
    </MenuPrimitive.RadioItem>
  );
}

export function DropdownMenuSub(props: DropdownMenuRootProps) {
  return <DropdownMenuRoot {...props} />;
}

export function DropdownMenuSubContent({ className, ...rest }: DropdownMenuSubContentProps) {
  return (
    <Portal>
      <DropdownMenuPositioner>
        <MenuPrimitive.Content {...rest} className={dropdownMenuContentVariants({ className })} />
      </DropdownMenuPositioner>
    </Portal>
  );
}

export function DropdownMenuTriggerItem({
  className,
  children,
  ...rest
}: DropdownMenuTriggerItemProps) {
  return (
    <MenuPrimitive.TriggerItem
      {...rest}
      className={dropdownMenuItemVariants({ variant: "default" }).base({ className })}
    >
      {children}

      <DropdownMenuShortcut>
        <CaretRightIcon />
      </DropdownMenuShortcut>
    </MenuPrimitive.TriggerItem>
  );
}

export function DropdownMenuShortcut({
  className,
  dataPart = "shortcut",
  dataScope = "dropdown-menu",
  ...rest
}: DropdownMenuShortcutProps) {
  return (
    <ark.span
      {...rest}
      className={dropdownMenuShortcutVariants({ className })}
      data-part={dataPart}
      data-scope={dataScope}
    />
  );
}

export function DropdownMenuArrow({ style, ...rest }: DropdownMenuArrowProps) {
  return (
    <MenuPrimitive.Arrow
      {...rest}
      style={{
        "--arrow-background": "var(--popover)",
        "--arrow-size": "calc(1.5 * var(--spacing))",
        ...style,
        left: "20px",
      }}
    >
      <MenuPrimitive.ArrowTip className={dropdownMenuInline5Variants()} />
    </MenuPrimitive.Arrow>
  );
}
// #endregion

// #region Display Names
DropdownMenuRoot.displayName = "DropdownMenu";
DropdownMenuTrigger.displayName = "DropdownMenu.Trigger";
DropdownMenuPositioner.displayName = "DropdownMenu.Positioner";
DropdownMenuContent.displayName = "DropdownMenu.Content";
DropdownMenuItemGroup.displayName = "DropdownMenu.ItemGroup";
DropdownMenuSeparator.displayName = "DropdownMenu.Separator";
DropdownMenuItem.displayName = "DropdownMenu.Item";
DropdownMenuQuickItem.displayName = "DropdownMenu.QuickItem";
DropdownMenuCheckboxItem.displayName = "DropdownMenu.CheckboxItem";
DropdownMenuRadioItemGroup.displayName = "DropdownMenu.RadioItemGroup";
DropdownMenuItemGroupLabel.displayName = "DropdownMenu.ItemGroupLabel";
DropdownMenuRadioItem.displayName = "DropdownMenu.RadioItem";
DropdownMenuSub.displayName = "DropdownMenu.Sub";
DropdownMenuSubContent.displayName = "DropdownMenu.SubContent";
DropdownMenuTriggerItem.displayName = "DropdownMenu.TriggerItem";
DropdownMenuShortcut.displayName = "DropdownMenu.Shortcut";
DropdownMenuArrow.displayName = "DropdownMenu.Arrow";
// #endregion
