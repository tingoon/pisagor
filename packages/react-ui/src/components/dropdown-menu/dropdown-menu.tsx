import { Portal } from "@ark-ui/react";
import { ark } from "@ark-ui/react/factory";
import { type MenuContentProps, Menu as MenuPrimitive } from "@ark-ui/react/menu";
import { CaretRightIcon, CheckIcon } from "@phosphor-icons/react";
import {
  type DropdownMenuItemVariantProps,
  dropdownMenuItemVariants,
  dropdownMenuVariants,
} from "@pisagor/recipes/dropdown-menu";
import type { ComponentProps } from "react";
import { useMemo } from "react";
import { DropdownMenuContext, useDropdownMenu } from "./dropdown-menu.context";

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

export type DropdownMenuRootProps = ComponentProps<typeof MenuPrimitive.Root>;

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

export type DropdownMenuShortcutProps = ComponentProps<typeof ark.span>;
// #endregion

// #region Parts
export function DropdownMenuRoot({
  positioning = { placement: "bottom-end" },
  ...rest
}: DropdownMenuRootProps) {
  return <MenuPrimitive.Root {...rest} positioning={positioning} />;
}

export function DropdownMenuTrigger(props: DropdownMenuTriggerProps) {
  return <MenuPrimitive.Trigger {...props} />;
}

export function DropdownMenuPositioner({ className, ...rest }: DropdownMenuPositionerProps) {
  const context = useDropdownMenu();
  const slots = context?.slots ?? dropdownMenuVariants();

  return <MenuPrimitive.Positioner {...rest} className={slots.positioner({ className })} />;
}

export function DropdownMenuContent({ children, className, ...rest }: DropdownMenuContentProps) {
  const slots = useMemo(() => dropdownMenuVariants(), []);

  return (
    <DropdownMenuContext value={{ slots }}>
      <Portal>
        <DropdownMenuPositioner>
          <MenuPrimitive.Content {...rest} className={slots.content({ className })}>
            {children}
          </MenuPrimitive.Content>
        </DropdownMenuPositioner>
      </Portal>
    </DropdownMenuContext>
  );
}

export function DropdownMenuItemGroup({ children, heading, ...rest }: DropdownMenuItemGroupProps) {
  return (
    <MenuPrimitive.ItemGroup {...rest}>
      {!!heading && <DropdownMenuItemGroupLabel>{heading}</DropdownMenuItemGroupLabel>}

      {children}
    </MenuPrimitive.ItemGroup>
  );
}

export function DropdownMenuSeparator({ className, ...rest }: DropdownMenuSeparatorProps) {
  const context = useDropdownMenu();
  const slots = context?.slots ?? dropdownMenuVariants();

  return <MenuPrimitive.Separator {...rest} className={slots.separator({ className })} />;
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
  const context = useDropdownMenu();
  const slots = context?.slots ?? dropdownMenuVariants();

  return (
    <MenuPrimitive.Item
      {...rest}
      className={dropdownMenuItemVariants({ variant }).base({
        className: slots.quickItem({ className }),
      })}
    />
  );
}

export function DropdownMenuCheckboxItem({
  children,
  className,
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
  children,
  heading,
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
  const context = useDropdownMenu();
  const slots = context?.slots ?? dropdownMenuVariants();

  return <MenuPrimitive.ItemGroupLabel {...rest} className={slots.itemGroupLabel({ className })} />;
}

export function DropdownMenuRadioItem({
  children,
  className,
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
  const slots = useMemo(() => dropdownMenuVariants(), []);

  return (
    <DropdownMenuContext value={{ slots }}>
      <Portal>
        <DropdownMenuPositioner>
          <MenuPrimitive.Content {...rest} className={slots.content({ className })} />
        </DropdownMenuPositioner>
      </Portal>
    </DropdownMenuContext>
  );
}

export function DropdownMenuTriggerItem({
  children,
  className,
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

export function DropdownMenuShortcut({ className, ...rest }: DropdownMenuShortcutProps) {
  const context = useDropdownMenu();
  const slots = context?.slots ?? dropdownMenuVariants();

  return (
    <ark.span
      {...rest}
      className={slots.shortcut({ className })}
      data-part="shortcut"
      data-scope="dropdown-menu"
    />
  );
}

export function DropdownMenuArrow({ style, ...rest }: DropdownMenuArrowProps) {
  const context = useDropdownMenu();
  const slots = context?.slots ?? dropdownMenuVariants();

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
      <MenuPrimitive.ArrowTip className={slots.arrowTip()} />
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
