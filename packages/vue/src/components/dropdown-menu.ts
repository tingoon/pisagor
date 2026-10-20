import { type HTMLArkProps, Menu as MenuPrimitive } from "@ark-ui/vue";
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
} from "@ark-ui/vue";
import type {
  DropdownMenuContract,
  DropdownMenuItemRootContract,
  DropdownMenuRootContract,
} from "@pisagor/contracts";
import { dropdownMenuItemRecipe, dropdownMenuRecipe } from "@pisagor/recipes";
import { defineComponent, h, type PropType, Teleport } from "vue";
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

type ArkPart = Parameters<typeof h>[0];
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

/**
 * Slots: `trigger` (single element, rendered `as-child`) and `default` (menu
 * items).
 */
export interface DropdownMenuProps
  extends DropdownMenuRootProps, DropdownMenuContract {
  /**
   * Whether to render an arrow pointing at the trigger.
   *
   * @defaultValue false
   */
  showArrow?: boolean;
}
// #endregion

// #region Parts
// The root renders no element; `base` is an empty slot.
const Root = withProvider<DropdownMenuRootProps>(MenuPrimitive.Root, {
  defaultProps: { positioning: { placement: "bottom-end" } },
  name: "Root",
  renderless: true,
  slot: "base",
});

/** Nested menu root; opens to the side of its `TriggerItem`. */
const Sub = withProvider<DropdownMenuRootProps>(MenuPrimitive.Root, {
  defaultProps: { positioning: { placement: "right-start" } },
  name: "Sub",
  renderless: true,
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

const ArrowBase = withContext<DropdownMenuArrowProps>(MenuPrimitive.Arrow, {
  defaultProps: {
    ...menuScope,
    style: {
      "--arrow-background": "var(--popover)",
      "--arrow-size": "calc(1.5 * var(--spacing))",
    },
  },
  name: "Arrow",
});

/** Renders an `ArrowTip` when no children are passed. */
const Arrow = defineComponent({
  inheritAttrs: false,
  name: "DropdownMenu.Arrow",
  setup(_, { attrs, slots }) {
    return () =>
      h(ArrowBase, attrs, {
        default: () => slots.default?.() ?? h(ArrowTip),
      });
  },
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

const Shortcut = withContext("span", { name: "Shortcut" });

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
const QuickItem = defineComponent({
  inheritAttrs: false,
  name: "DropdownMenu.QuickItem",
  setup(_, { attrs, slots }) {
    const styles = useStyles();

    return () =>
      h(
        QuickItemBase as ArkPart,
        {
          ...attrs,
          class: styles.slots.quickItem({
            class: attrs.class as string | undefined,
          }),
        },
        slots,
      );
  },
});

const CheckboxItemBase = withItemProvider<DropdownMenuCheckboxItemProps>(
  MenuPrimitive.CheckboxItem,
  { defaultProps: menuScope, name: "CheckboxItem", part: "item", slot: "base" },
);

const insetProp = { default: true, type: Boolean };

/** Checkbox item; inset by default to leave room for `ItemIndicator`. */
const CheckboxItem = defineComponent({
  inheritAttrs: false,
  name: "DropdownMenu.CheckboxItem",
  props: { inset: insetProp },
  setup(props, { attrs, slots }) {
    return () =>
      h(CheckboxItemBase as ArkPart, { ...attrs, inset: props.inset }, slots);
  },
});

const RadioItemBase = withItemProvider<DropdownMenuRadioItemProps>(
  MenuPrimitive.RadioItem,
  { defaultProps: menuScope, name: "RadioItem", part: "item", slot: "base" },
);

/** Radio item; inset by default to leave room for `ItemIndicator`. */
const RadioItem = defineComponent({
  inheritAttrs: false,
  name: "DropdownMenu.RadioItem",
  props: { inset: insetProp },
  setup(props, { attrs, slots }) {
    return () =>
      h(RadioItemBase as ArkPart, { ...attrs, inset: props.inset }, slots);
  },
});

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
export const DropdownMenuShorthand = defineComponent({
  inheritAttrs: false,
  name: "DropdownMenu",
  props: {
    classNames: {
      default: undefined,
      type: Object as PropType<DropdownMenuProps["classNames"]>,
    },
    showArrow: { default: false, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const classNames = props.classNames;

      return h(Root, attrs, () => [
        slots.trigger
          ? h(
              Trigger,
              { asChild: true, class: classNames?.trigger },
              { default: slots.trigger },
            )
          : null,

        h(Teleport, { to: "body" }, [
          h(Positioner, { class: classNames?.positioner }, () =>
            h(Content, { class: classNames?.content }, () => [
              props.showArrow
                ? h(Arrow, { class: classNames?.arrow }, () =>
                    h(ArrowTip, { class: classNames?.arrowTip }),
                  )
                : null,

              slots.default?.(),
            ]),
          ),
        ]),
      ]);
    };
  },
});
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
