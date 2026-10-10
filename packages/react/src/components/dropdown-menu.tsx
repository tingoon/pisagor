import { Portal } from "@ark-ui/react";
import { ark } from "@ark-ui/react/factory";
import type {
  MenuArrowProps,
  MenuCheckboxItemProps,
  MenuContentProps,
  MenuItemGroupLabelProps,
  MenuItemGroupProps,
  MenuItemProps,
  MenuPositionerProps,
  MenuRadioItemGroupProps,
  MenuRadioItemProps,
  MenuRootProps,
  MenuSeparatorProps,
  MenuTriggerItemProps,
  MenuTriggerProps,
} from "@ark-ui/react/menu";
import { Menu as MenuPrimitive } from "@ark-ui/react/menu";
import { CaretRightIcon, CheckIcon } from "@phosphor-icons/react";
import type {
  DropdownMenuItemProps as BaseDropdownMenuCheckboxItemProps,
  DropdownMenuProps as BaseDropdownMenuContentProps,
  DropdownMenuItemProps as BaseDropdownMenuItemProps,
  DropdownMenuItemProps as BaseDropdownMenuRadioItemProps,
  DropdownMenuProps as BaseDropdownMenuSubContentProps,
  DropdownMenuItemProps as BaseDropdownMenuTriggerItemProps,
} from "@pisagor/props";
import { dropdownMenuItemRecipe, dropdownMenuRecipe } from "@pisagor/recipes";
import type { ComponentProps } from "react";
import { use } from "react";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";

// #region Context
const { Context: DropdownMenuStylesContext } = createSlotRecipeContext({
  name: "DropdownMenu",
  recipe: dropdownMenuRecipe,
});

function useDropdownMenuSlots() {
  const styles = use(DropdownMenuStylesContext);
  return styles?.slots ?? dropdownMenuRecipe();
}
// #endregion

// #region Types
export interface DropdownMenuItemGroupProps extends MenuItemGroupProps {
  /** The heading of the menu item group. */
  heading?: string;
}

export interface DropdownMenuItemProps
  extends MenuItemProps,
    BaseDropdownMenuItemProps {}

export interface DropdownMenuRadioItemGroupProps
  extends MenuRadioItemGroupProps {
  /** The heading of the menu radio item group. */
  heading?: string;
}

export type DropdownMenuRootProps = MenuRootProps;

export type DropdownMenuTriggerProps = MenuTriggerProps;

export type DropdownMenuPositionerProps = MenuPositionerProps;

export interface DropdownMenuCheckboxItemProps
  extends MenuCheckboxItemProps,
    BaseDropdownMenuCheckboxItemProps {}

export type DropdownMenuItemGroupLabelProps = MenuItemGroupLabelProps;

export interface DropdownMenuRadioItemProps
  extends MenuRadioItemProps,
    BaseDropdownMenuRadioItemProps {}

export interface DropdownMenuSubContentProps
  extends MenuContentProps,
    BaseDropdownMenuSubContentProps {}

export type DropdownMenuArrowProps = MenuArrowProps;

export type DropdownMenuSeparatorProps = MenuSeparatorProps;

export interface DropdownMenuTriggerItemProps
  extends MenuTriggerItemProps,
    BaseDropdownMenuTriggerItemProps {}

export interface DropdownMenuContentProps
  extends MenuContentProps,
    BaseDropdownMenuContentProps {}

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

export function DropdownMenuPositioner({
  className,
  ...rest
}: DropdownMenuPositionerProps) {
  const slots = useDropdownMenuSlots();

  return (
    <MenuPrimitive.Positioner
      {...rest}
      className={slots.positioner({ className })}
    />
  );
}

export function DropdownMenuContent({
  children,
  recipe = dropdownMenuRecipe,
  className,
  ...rest
}: DropdownMenuContentProps) {
  const slots = recipe();

  return (
    <DropdownMenuStylesContext value={{ slots, variants: {} as never }}>
      <Portal>
        <DropdownMenuPositioner>
          <MenuPrimitive.Content
            {...rest}
            className={slots.content({ className })}
          >
            {children}
          </MenuPrimitive.Content>
        </DropdownMenuPositioner>
      </Portal>
    </DropdownMenuStylesContext>
  );
}

export function DropdownMenuItemGroup({
  children,
  heading,
  ...rest
}: DropdownMenuItemGroupProps) {
  return (
    <MenuPrimitive.ItemGroup {...rest}>
      {!!heading && (
        <DropdownMenuItemGroupLabel>{heading}</DropdownMenuItemGroupLabel>
      )}

      {children}
    </MenuPrimitive.ItemGroup>
  );
}

export function DropdownMenuSeparator({
  className,
  ...rest
}: DropdownMenuSeparatorProps) {
  const slots = useDropdownMenuSlots();

  return (
    <MenuPrimitive.Separator
      {...rest}
      className={slots.separator({ className })}
    />
  );
}

export function DropdownMenuItem({
  variant = "default",
  recipe = dropdownMenuItemRecipe,
  className,
  ...rest
}: DropdownMenuItemProps) {
  return (
    <MenuPrimitive.Item
      {...rest}
      className={recipe({ variant }).base({ className })}
      data-variant={variant}
    />
  );
}

export function DropdownMenuQuickItem({
  variant = "default",
  recipe = dropdownMenuItemRecipe,
  className,
  ...rest
}: DropdownMenuItemProps) {
  const slots = useDropdownMenuSlots();

  return (
    <MenuPrimitive.Item
      {...rest}
      className={recipe({ variant }).base({
        className: slots.quickItem({ className }),
      })}
    />
  );
}

export function DropdownMenuCheckboxItem({
  children,
  recipe = dropdownMenuItemRecipe,
  className,
  ...rest
}: DropdownMenuCheckboxItemProps) {
  const slots = recipe({ inset: true, variant: "default" });

  return (
    <MenuPrimitive.CheckboxItem {...rest} className={slots.base({ className })}>
      <MenuPrimitive.ItemIndicator className={slots.indicator()}>
        <CheckIcon />
      </MenuPrimitive.ItemIndicator>

      <MenuPrimitive.ItemText className={slots.text()}>
        {children}
      </MenuPrimitive.ItemText>
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
      {!!heading && (
        <DropdownMenuItemGroupLabel>{heading}</DropdownMenuItemGroupLabel>
      )}

      {children}
    </MenuPrimitive.RadioItemGroup>
  );
}

export function DropdownMenuItemGroupLabel({
  className,
  ...rest
}: DropdownMenuItemGroupLabelProps) {
  const slots = useDropdownMenuSlots();

  return (
    <MenuPrimitive.ItemGroupLabel
      {...rest}
      className={slots.itemGroupLabel({ className })}
    />
  );
}

export function DropdownMenuRadioItem({
  children,
  recipe = dropdownMenuItemRecipe,
  className,
  ...rest
}: DropdownMenuRadioItemProps) {
  const slots = recipe({ inset: true, variant: "default" });

  return (
    <MenuPrimitive.RadioItem {...rest} className={slots.base({ className })}>
      <MenuPrimitive.ItemIndicator className={slots.indicator()}>
        <CheckIcon />
      </MenuPrimitive.ItemIndicator>

      <MenuPrimitive.ItemText className={slots.text()}>
        {children}
      </MenuPrimitive.ItemText>
    </MenuPrimitive.RadioItem>
  );
}

export function DropdownMenuSub(props: DropdownMenuRootProps) {
  return <DropdownMenuRoot {...props} />;
}

export function DropdownMenuSubContent({
  recipe = dropdownMenuRecipe,
  className,
  ...rest
}: DropdownMenuSubContentProps) {
  const slots = recipe();

  return (
    <DropdownMenuStylesContext value={{ slots, variants: {} as never }}>
      <Portal>
        <DropdownMenuPositioner>
          <MenuPrimitive.Content
            {...rest}
            className={slots.content({ className })}
          />
        </DropdownMenuPositioner>
      </Portal>
    </DropdownMenuStylesContext>
  );
}

export function DropdownMenuTriggerItem({
  children,
  recipe = dropdownMenuItemRecipe,
  className,
  ...rest
}: DropdownMenuTriggerItemProps) {
  return (
    <MenuPrimitive.TriggerItem
      {...rest}
      className={recipe({ variant: "default" }).base({ className })}
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
  ...rest
}: DropdownMenuShortcutProps) {
  const slots = useDropdownMenuSlots();

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
  const slots = useDropdownMenuSlots();

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

export const DropdownMenu = Object.assign(DropdownMenuRoot, {
  Arrow: DropdownMenuArrow,
  CheckboxItem: DropdownMenuCheckboxItem,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
  ItemGroup: DropdownMenuItemGroup,
  ItemGroupLabel: DropdownMenuItemGroupLabel,
  Positioner: DropdownMenuPositioner,
  QuickItem: DropdownMenuQuickItem,
  RadioItem: DropdownMenuRadioItem,
  RadioItemGroup: DropdownMenuRadioItemGroup,
  Separator: DropdownMenuSeparator,
  Shortcut: DropdownMenuShortcut,
  Sub: DropdownMenuSub,
  SubContent: DropdownMenuSubContent,
  Trigger: DropdownMenuTrigger,
  TriggerItem: DropdownMenuTriggerItem,
});
