import { Portal } from "@ark-ui/react";
import { ark } from "@ark-ui/react/factory";
import { type MenuContentProps, Menu as MenuPrimitive } from "@ark-ui/react/menu";
import { CaretRightIcon, CheckIcon } from "@phosphor-icons/react";
import {
  type DropdownMenuItemVariantProps,
  dropdownMenuContentVariants,
  dropdownMenuGroupLabelVariants,
  dropdownMenuInline2Variants,
  dropdownMenuInline3Variants,
  dropdownMenuInline4Variants,
  dropdownMenuInline5Variants,
  dropdownMenuInlineVariants,
  dropdownMenuItemVariants,
  dropdownMenuPositionerVariants,
  dropdownMenuQuickItemVariants,
  dropdownMenuRadioItemTextVariants,
  dropdownMenuRadioItemVariants,
  dropdownMenuSeparatorVariants,
  dropdownMenuShortcutVariants,
} from "@pisagor/styles/ui/dropdown-menu";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import type { WithTestId } from "../../internal/types";
import { createContext } from "../../utils";

// #region Types
export interface DropdownMenuGroupProps extends ComponentProps<typeof MenuPrimitive.ItemGroup> {
  /** The heading of the menu item group. */
  heading?: string;
}

export interface DropdownMenuItemProps
  extends ComponentProps<typeof MenuPrimitive.Item>,
    DropdownMenuItemVariantProps {}

export interface DropdownMenuRadioGroupProps
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

export type DropdownMenuGroupLabelProps = ComponentProps<typeof MenuPrimitive.ItemGroupLabel>;

export type DropdownMenuRadioItemProps = ComponentProps<typeof MenuPrimitive.RadioItem>;

export type DropdownMenuSubContentProps = ComponentProps<typeof MenuPrimitive.Content>;

export type DropdownMenuArrowProps = ComponentProps<typeof MenuPrimitive.Arrow>;

export type DropdownMenuSeparatorProps = ComponentProps<typeof MenuPrimitive.Separator>;

export type DropdownMenuSubTriggerProps = ComponentProps<typeof MenuPrimitive.TriggerItem>;
// #endregion

// #region Context
const [DropdownMenuRootContext, useDropdownMenuRoot] = createContext<{ testId?: string }>({
  name: "DropdownMenuRoot",
  strict: false,
});

export { useDropdownMenuRoot };
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
DropdownMenuRoot.displayName = "DropdownMenu";

export function DropdownMenuTrigger(props: DropdownMenuTriggerProps) {
  const { testId } = useDropdownMenuRoot() ?? {};

  return <MenuPrimitive.Trigger data-testid={testId} {...props} />;
}
DropdownMenuTrigger.displayName = "DropdownMenu.Trigger";

export function DropdownMenuPositioner({ className, ...rest }: DropdownMenuPositionerProps) {
  return (
    <MenuPrimitive.Positioner
      {...rest}
      className={cn(dropdownMenuPositionerVariants(), className)}
    />
  );
}
DropdownMenuPositioner.displayName = "DropdownMenu.Positioner";

export type DropdownMenuContentProps = MenuContentProps;

export function DropdownMenuContent({ className, children, ...rest }: DropdownMenuContentProps) {
  return (
    <Portal>
      <DropdownMenuPositioner>
        <MenuPrimitive.Content {...rest} className={cn(dropdownMenuContentVariants(), className)}>
          {children}
        </MenuPrimitive.Content>
      </DropdownMenuPositioner>
    </Portal>
  );
}
DropdownMenuContent.displayName = "DropdownMenu.Content";

export function DropdownMenuGroup({ heading, children, ...rest }: DropdownMenuGroupProps) {
  return (
    <MenuPrimitive.ItemGroup {...rest}>
      {!!heading && <DropdownMenuGroupLabel>{heading}</DropdownMenuGroupLabel>}

      {children}
    </MenuPrimitive.ItemGroup>
  );
}
DropdownMenuGroup.displayName = "DropdownMenu.Group";

export function DropdownMenuSeparator({ className, ...rest }: DropdownMenuSeparatorProps) {
  return (
    <MenuPrimitive.Separator {...rest} className={cn(dropdownMenuSeparatorVariants(), className)} />
  );
}
DropdownMenuSeparator.displayName = "DropdownMenu.Separator";

export function DropdownMenuItem({
  variant = "default",
  className,
  ...rest
}: DropdownMenuItemProps) {
  return (
    <MenuPrimitive.Item
      {...rest}
      className={cn(dropdownMenuItemVariants({ variant }), className)}
      data-variant={variant}
    />
  );
}
DropdownMenuItem.displayName = "DropdownMenu.Item";

export function DropdownMenuQuickItem({
  variant = "default",
  className,
  ...rest
}: DropdownMenuItemProps) {
  return (
    <MenuPrimitive.Item
      {...rest}
      className={cn(
        dropdownMenuItemVariants({ variant }),
        dropdownMenuQuickItemVariants(),
        className,
      )}
    />
  );
}
DropdownMenuQuickItem.displayName = "DropdownMenu.QuickItem";

export function DropdownMenuCheckboxItem({
  className,
  children,
  ...rest
}: DropdownMenuCheckboxItemProps) {
  return (
    <MenuPrimitive.CheckboxItem
      {...rest}
      className={cn(
        dropdownMenuItemVariants({ variant: "default" }),
        dropdownMenuInlineVariants(),
        className,
      )}
    >
      <MenuPrimitive.ItemIndicator className={dropdownMenuInline2Variants()}>
        <CheckIcon />
      </MenuPrimitive.ItemIndicator>

      <MenuPrimitive.ItemText className={dropdownMenuInline3Variants()}>
        {children}
      </MenuPrimitive.ItemText>
    </MenuPrimitive.CheckboxItem>
  );
}
DropdownMenuCheckboxItem.displayName = "DropdownMenu.CheckboxItem";

export function DropdownMenuRadioGroup({
  heading,
  children,
  ...rest
}: DropdownMenuRadioGroupProps) {
  return (
    <MenuPrimitive.RadioItemGroup {...rest}>
      {!!heading && <DropdownMenuGroupLabel>{heading}</DropdownMenuGroupLabel>}

      {children}
    </MenuPrimitive.RadioItemGroup>
  );
}
DropdownMenuRadioGroup.displayName = "DropdownMenu.RadioGroup";

export function DropdownMenuGroupLabel({ className, ...rest }: DropdownMenuGroupLabelProps) {
  return (
    <MenuPrimitive.ItemGroupLabel
      {...rest}
      className={cn(dropdownMenuGroupLabelVariants(), className)}
    />
  );
}
DropdownMenuGroupLabel.displayName = "DropdownMenu.GroupLabel";

export function DropdownMenuRadioItem({
  className,
  children,
  ...rest
}: DropdownMenuRadioItemProps) {
  return (
    <MenuPrimitive.RadioItem
      {...rest}
      className={cn(
        dropdownMenuItemVariants({ variant: "default" }),
        dropdownMenuRadioItemVariants(),
        className,
      )}
    >
      <MenuPrimitive.ItemIndicator className={dropdownMenuInline4Variants()}>
        <CheckIcon />
      </MenuPrimitive.ItemIndicator>

      <MenuPrimitive.ItemText className={dropdownMenuRadioItemTextVariants()}>
        {children}
      </MenuPrimitive.ItemText>
    </MenuPrimitive.RadioItem>
  );
}
DropdownMenuRadioItem.displayName = "DropdownMenu.RadioItem";

export function DropdownMenuSub(props: DropdownMenuRootProps) {
  return <DropdownMenuRoot {...props} />;
}
DropdownMenuSub.displayName = "DropdownMenu.Sub";

export function DropdownMenuSubContent({ className, ...rest }: DropdownMenuSubContentProps) {
  return (
    <Portal>
      <DropdownMenuPositioner>
        <MenuPrimitive.Content {...rest} className={cn(dropdownMenuContentVariants(), className)} />
      </DropdownMenuPositioner>
    </Portal>
  );
}
DropdownMenuSubContent.displayName = "DropdownMenu.SubContent";

export function DropdownMenuSubTrigger({
  className,
  children,
  ...rest
}: DropdownMenuSubTriggerProps) {
  return (
    <MenuPrimitive.TriggerItem
      {...rest}
      className={cn(dropdownMenuItemVariants({ variant: "default" }), className)}
    >
      {children}

      <DropdownMenuShortcut>
        <CaretRightIcon />
      </DropdownMenuShortcut>
    </MenuPrimitive.TriggerItem>
  );
}
DropdownMenuSubTrigger.displayName = "DropdownMenu.SubTrigger";

export type DropdownMenuShortcutProps = ComponentProps<typeof ark.span> & {
  dataPart?: string;
  dataScope?: string;
};

export function DropdownMenuShortcut({
  className,
  dataPart = "shortcut",
  dataScope = "dropdown-menu",
  ...rest
}: DropdownMenuShortcutProps) {
  return (
    <ark.span
      {...rest}
      className={cn(dropdownMenuShortcutVariants(), className)}
      data-part={dataPart}
      data-scope={dataScope}
    />
  );
}
DropdownMenuShortcut.displayName = "DropdownMenu.Shortcut";

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
DropdownMenuArrow.displayName = "DropdownMenu.Arrow";
// #endregion
