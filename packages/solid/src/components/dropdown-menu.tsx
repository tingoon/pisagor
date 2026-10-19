import { Menu as MenuPrimitive, type HTMLArkProps } from "@ark-ui/solid";
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
} from "@ark-ui/solid";
import type {
  DropdownMenuContract,
  DropdownMenuItemRootContract,
  DropdownMenuRootContract,
} from "@pisagor/contracts";
import { dropdownMenuItemRecipe, dropdownMenuRecipe } from "@pisagor/recipes";
import type { JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import { createSlotRecipeContext } from "../internal";
import { type DialogTriggerRender, renderTrigger } from "./dialog";

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

export type DropdownMenuShortcutProps = HTMLArkProps<"span">;

export interface DropdownMenuProps
  extends DropdownMenuRootProps, DropdownMenuContract {
  /** Menu items. */
  children?: JSX.Element;
  /**
   * Whether to render an arrow pointing at the trigger.
   *
   * @defaultValue false
   */
  showArrow?: boolean;
  /** Trigger element that opens the menu (render fn preferred). */
  trigger?: DialogTriggerRender;
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

const Arrow = withContext<DropdownMenuArrowProps>(MenuPrimitive.Arrow, {
  defaultProps: {
    ...menuScope,
    style: {
      "--arrow-background": "var(--popover)",
      "--arrow-size": "calc(1.5 * var(--spacing))",
    },
  },
  name: "Arrow",
});

const ArrowTip = withContext<DropdownMenuArrowTipProps>(
  MenuPrimitive.ArrowTip,
  { defaultProps: menuScope, name: "ArrowTip" },
);

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
function QuickItem(props: DropdownMenuItemProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useStyles();

  return (
    <QuickItemBase
      {...rest}
      class={styles.slots.quickItem({ class: local.class })}
    />
  );
}

const CheckboxItemBase = withItemProvider<DropdownMenuCheckboxItemProps>(
  MenuPrimitive.CheckboxItem,
  { defaultProps: menuScope, name: "CheckboxItem", part: "item", slot: "base" },
);

/** Checkbox item; inset by default to leave room for `ItemIndicator`. */
function CheckboxItem(props: DropdownMenuCheckboxItemProps): JSX.Element {
  const [local, rest] = splitProps(props, ["inset"]);

  return <CheckboxItemBase {...rest} inset={local.inset ?? true} />;
}

const RadioItemBase = withItemProvider<DropdownMenuRadioItemProps>(
  MenuPrimitive.RadioItem,
  { defaultProps: menuScope, name: "RadioItem", part: "item", slot: "base" },
);

/** Radio item; inset by default to leave room for `ItemIndicator`. */
function RadioItem(props: DropdownMenuRadioItemProps): JSX.Element {
  const [local, rest] = splitProps(props, ["inset"]);

  return <RadioItemBase {...rest} inset={local.inset ?? true} />;
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
  { defaultProps: menuScope, name: "ItemIndicator", slot: "indicator" },
);
// #endregion

// #region Shorthand
export function DropdownMenuShorthand(props: DropdownMenuProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "children",
    "classNames",
    "showArrow",
    "trigger",
  ]);

  return (
    <Root {...rest}>
      <Show when={local.trigger !== undefined}>
        <Trigger
          asChild={renderTrigger(local.trigger)}
          class={local.classNames?.trigger}
        />
      </Show>

      <Portal>
        <Positioner class={local.classNames?.positioner}>
          <Content class={local.classNames?.content}>
            <Show when={local.showArrow ?? false}>
              <Arrow class={local.classNames?.arrow}>
                <ArrowTip class={local.classNames?.arrowTip} />
              </Arrow>
            </Show>

            {local.children}
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
