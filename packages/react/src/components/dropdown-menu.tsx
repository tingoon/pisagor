import { Menu as MenuPrimitive, Portal } from "@ark-ui/react";
import type {
  MenuArrowProps,
  MenuArrowTipProps,
  MenuCheckboxItemProps,
  MenuContentProps,
  MenuIndicatorProps,
  MenuItemGroupLabelProps,
  MenuItemGroupProps,
  MenuItemIndicatorProps,
  MenuItemProps,
  MenuItemTextProps,
  MenuPositionerProps,
  MenuRadioItemGroupProps,
  MenuRadioItemProps,
  MenuRootProps,
  MenuSeparatorProps,
  MenuTriggerItemProps,
  MenuTriggerProps,
} from "@ark-ui/react";
import type {
  DropdownMenuContract,
  DropdownMenuItemRootContract,
  DropdownMenuRootContract,
} from "@pisagor/contracts";
import { dropdownMenuItemRecipe, dropdownMenuRecipe } from "@pisagor/recipes";
import type { ComponentPropsWithRef, ReactNode } from "react";
import { createSlotRecipeContext } from "../internal";

// #region Context
const { useStyles, withContext, withProvider } = createSlotRecipeContext({
  name: "DropdownMenu",
  recipe: dropdownMenuRecipe,
});

const { withContext: withItemContext, withProvider: withItemProvider } =
  createSlotRecipeContext({
    name: "DropdownMenu",
    recipe: dropdownMenuItemRecipe,
  });

/** Zag looks menu elements up by `[data-scope="menu"]`; keep the Ark scope. */
const menuScope = { "data-scope": "menu" } as const;
// #endregion

// #region Types
export type DropdownMenuRootProps = MenuRootProps & DropdownMenuRootContract;

export type DropdownMenuTriggerProps = MenuTriggerProps;

export type DropdownMenuIndicatorProps = MenuIndicatorProps;

export type DropdownMenuPositionerProps = MenuPositionerProps;

export type DropdownMenuContentProps = MenuContentProps;

export type DropdownMenuArrowProps = MenuArrowProps;

export type DropdownMenuArrowTipProps = MenuArrowTipProps;

export type DropdownMenuItemGroupProps = MenuItemGroupProps;

export type DropdownMenuItemGroupLabelProps = MenuItemGroupLabelProps;

export type DropdownMenuRadioItemGroupProps = MenuRadioItemGroupProps;

export type DropdownMenuSeparatorProps = MenuSeparatorProps;

export type DropdownMenuItemRootProps = MenuItemProps &
  DropdownMenuItemRootContract;

export type DropdownMenuItemProps = DropdownMenuItemRootProps;

export type DropdownMenuCheckboxItemProps = MenuCheckboxItemProps &
  DropdownMenuItemRootContract;

export type DropdownMenuRadioItemProps = MenuRadioItemProps &
  DropdownMenuItemRootContract;

export type DropdownMenuTriggerItemProps = MenuTriggerItemProps &
  DropdownMenuItemRootContract;

export type DropdownMenuItemTextProps = MenuItemTextProps;

export type DropdownMenuItemIndicatorProps = MenuItemIndicatorProps;

export type DropdownMenuShortcutProps = ComponentPropsWithRef<"span">;

export interface DropdownMenuProps
  extends DropdownMenuRootProps, DropdownMenuContract {
  /** Menu items. */
  children?: ReactNode;
  /**
   * Whether to render an arrow pointing at the trigger.
   *
   * @defaultValue false
   */
  showArrow?: boolean;
  /** Trigger element that opens the menu. */
  trigger?: ReactNode;
}
// #endregion

// #region Parts
// The root renders no element; `base` is an empty slot.
const Root = withProvider<DropdownMenuRootProps>(MenuPrimitive.Root, {
  defaultProps: { positioning: { placement: "bottom-end" } },
  name: "Root",
  slot: "base",
});

/** Nested menu root; opens to the side of its `TriggerItem`. */
const Sub = withProvider<DropdownMenuRootProps>(MenuPrimitive.Root, {
  defaultProps: { positioning: { placement: "right-start" } },
  name: "Sub",
  slot: "base",
});

const Trigger = withContext<DropdownMenuTriggerProps>(MenuPrimitive.Trigger, {
  defaultProps: menuScope,
  name: "Trigger",
});

const Indicator = withContext<DropdownMenuIndicatorProps>(
  MenuPrimitive.Indicator,
  { defaultProps: menuScope, name: "Indicator" },
);

const Positioner = withContext<DropdownMenuPositionerProps>(
  MenuPrimitive.Positioner,
  { defaultProps: menuScope, name: "Positioner" },
);

const Content = withContext<DropdownMenuContentProps>(MenuPrimitive.Content, {
  defaultProps: menuScope,
  name: "Content",
});

const ArrowTip = withContext<DropdownMenuArrowTipProps>(
  MenuPrimitive.ArrowTip,
  { defaultProps: menuScope, name: "ArrowTip" },
);

const Arrow = withContext<DropdownMenuArrowProps>(MenuPrimitive.Arrow, {
  defaultProps: {
    ...menuScope,
    children: <ArrowTip />,
    style: {
      "--arrow-background": "var(--popover)",
      "--arrow-size": "calc(1.5 * var(--spacing))",
    },
  },
  name: "Arrow",
});

const ItemGroup = withContext<DropdownMenuItemGroupProps>(
  MenuPrimitive.ItemGroup,
  { defaultProps: menuScope, name: "ItemGroup" },
);

const ItemGroupLabel = withContext<DropdownMenuItemGroupLabelProps>(
  MenuPrimitive.ItemGroupLabel,
  { defaultProps: menuScope, name: "ItemGroupLabel" },
);

const RadioItemGroup = withContext<DropdownMenuRadioItemGroupProps>(
  MenuPrimitive.RadioItemGroup,
  { defaultProps: menuScope, name: "RadioItemGroup", part: "item-group" },
);

const Separator = withContext<DropdownMenuSeparatorProps>(
  MenuPrimitive.Separator,
  { defaultProps: menuScope, name: "Separator" },
);

const Shortcut = withContext<DropdownMenuShortcutProps>("span", {
  name: "Shortcut",
});

const Item = withItemProvider<DropdownMenuItemProps>(MenuPrimitive.Item, {
  defaultProps: menuScope,
  name: "Item",
  slot: "base",
});

const QuickItemBase = withItemProvider<DropdownMenuItemProps>(
  MenuPrimitive.Item,
  { defaultProps: menuScope, name: "QuickItem", part: "item", slot: "base" },
);

/** Stacked icon + label item for quick-action grids. */
function QuickItem({ className, ...rest }: DropdownMenuItemProps) {
  const { slots } = useStyles();

  return <QuickItemBase {...rest} className={slots.quickItem({ className })} />;
}

const CheckboxItemBase = withItemProvider<DropdownMenuCheckboxItemProps>(
  MenuPrimitive.CheckboxItem,
  { defaultProps: menuScope, name: "CheckboxItem", part: "item", slot: "base" },
);

/** Checkbox item; inset by default to leave room for `ItemIndicator`. */
function CheckboxItem({
  inset = true,
  ...rest
}: DropdownMenuCheckboxItemProps) {
  return <CheckboxItemBase {...rest} inset={inset} />;
}

const RadioItemBase = withItemProvider<DropdownMenuRadioItemProps>(
  MenuPrimitive.RadioItem,
  { defaultProps: menuScope, name: "RadioItem", part: "item", slot: "base" },
);

/** Radio item; inset by default to leave room for `ItemIndicator`. */
function RadioItem({ inset = true, ...rest }: DropdownMenuRadioItemProps) {
  return <RadioItemBase {...rest} inset={inset} />;
}

const TriggerItem = withItemProvider<DropdownMenuTriggerItemProps>(
  MenuPrimitive.TriggerItem,
  { defaultProps: menuScope, name: "TriggerItem", slot: "base" },
);

const ItemText = withItemContext<DropdownMenuItemTextProps>(
  MenuPrimitive.ItemText,
  { defaultProps: menuScope, name: "ItemText", slot: "text" },
);

const ItemIndicator = withItemContext<DropdownMenuItemIndicatorProps>(
  MenuPrimitive.ItemIndicator,
  {
    defaultProps: menuScope,
    name: "ItemIndicator",
    slot: "indicator",
  },
);

QuickItem.displayName = "DropdownMenu.QuickItem";
CheckboxItem.displayName = "DropdownMenu.CheckboxItem";
RadioItem.displayName = "DropdownMenu.RadioItem";
// #endregion

// #region Shorthand
export function DropdownMenuShorthand({
  children,
  classNames,
  showArrow = false,
  trigger,
  ...rest
}: DropdownMenuProps) {
  return (
    <Root {...rest}>
      {trigger !== undefined && (
        <Trigger asChild className={classNames?.trigger}>
          {trigger}
        </Trigger>
      )}

      <Portal>
        <Positioner className={classNames?.positioner}>
          <Content className={classNames?.content}>
            {showArrow && (
              <Arrow className={classNames?.arrow}>
                <ArrowTip className={classNames?.arrowTip} />
              </Arrow>
            )}

            {children}
          </Content>
        </Positioner>
      </Portal>
    </Root>
  );
}
// #endregion

export const DropdownMenu = Object.assign(DropdownMenuShorthand, {
  Arrow,
  ArrowTip,
  CheckboxItem,
  Content,
  Indicator,
  Item,
  ItemGroup,
  ItemGroupLabel,
  ItemIndicator,
  ItemText,
  Positioner,
  QuickItem,
  RadioItem,
  RadioItemGroup,
  Root,
  Separator,
  Shortcut,
  Sub,
  Trigger,
  TriggerItem,
});
