import { SegmentGroup as SegmentGroupPrimitive } from "@ark-ui/vue";
import type {
  SegmentGroupPresetItem as BaseSegmentGroupPresetItem,
  SegmentGroupRootContract,
  SegmentGroupContract,
} from "@pisagor/contracts";
import { segmentGroupRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { type ClassValue, createSlotRecipeContext } from "../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "SegmentGroup",
  recipe: segmentGroupRecipe,
});
// #endregion

// #region Types
export type SegmentGroupVariant = "default" | "underline";

export interface SegmentGroupPresetItem extends Omit<
  BaseSegmentGroupPresetItem,
  "label"
> {
  disabled?: boolean;
  label: VNodeChild;
  value: string;
}

export interface SegmentGroupRootProps extends Omit<
  SegmentGroupRootContract,
  "items"
> {
  class?: unknown;
  defaultValue?: string | null;
  disabled?: boolean;
  onValueChange?: (value: string | null) => void;
  orientation?: "horizontal" | "vertical";
  value?: string | null;
  variant?: SegmentGroupVariant;
}

export interface SegmentGroupProps
  extends
    Omit<SegmentGroupRootProps, "children">,
    SegmentGroupRootContract,
    SegmentGroupContract {
  items?: SegmentGroupPresetItem[];
}

export type {
  SegmentGroupIndicatorProps,
  SegmentGroupItemControlProps,
  SegmentGroupItemHiddenInputProps,
  SegmentGroupItemProps,
  SegmentGroupItemTextProps,
} from "@ark-ui/vue";
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Parts
const SegmentGroupRootBase = withProvider<SegmentGroupRootContract>(
  SegmentGroupPrimitive.Root,
  { name: "Root" },
);

export const SegmentGroupItemText = withContext(
  SegmentGroupPrimitive.ItemText,
  { name: "ItemText" },
);

export const SegmentGroupIndicator = withContext(
  SegmentGroupPrimitive.Indicator,
  { name: "Indicator" },
);

export const SegmentGroupRoot = defineComponent({
  inheritAttrs: false,
  name: "SegmentGroup.Root",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    defaultValue: {
      default: undefined,
      type: [String, null] as PropType<string | null>,
    },
    disabled: { default: undefined, type: Boolean },
    onValueChange: {
      default: undefined,
      type: Function as PropType<SegmentGroupRootProps["onValueChange"]>,
    },
    orientation: {
      default: "horizontal",
      type: String as PropType<"horizontal" | "vertical">,
    },
    value: {
      default: undefined,
      type: [String, null] as PropType<string | null>,
    },
    variant: {
      default: "default",
      type: String as PropType<SegmentGroupVariant>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      return h(
        SegmentGroupRootBase,
        {
          ...attrs,
          class: props.class,
          "data-orientation": props.orientation,
          "data-variant": props.variant,
          defaultValue: props.defaultValue,
          disabled: props.disabled,
          modelValue: props.value,
          onValueChange: props.onValueChange
            ? (details: { value: string | null }) =>
                props.onValueChange?.(details.value)
            : undefined,
          orientation: props.orientation,
        },
        slots,
      );
    };
  },
});

export const SegmentGroupItem = withContext(SegmentGroupPrimitive.Item, {
  name: "Item",
});

export const SegmentGroupItemControl = withContext(
  SegmentGroupPrimitive.ItemControl,
  { name: "ItemControl" },
);

export const SegmentGroupItemHiddenInput =
  SegmentGroupPrimitive.ItemHiddenInput;
// #endregion

// #region Shorthand
export const SegmentGroupShorthand = defineComponent({
  inheritAttrs: false,
  name: "SegmentGroup",
  props: {
    classNames: {
      default: undefined,
      type: Object as PropType<SegmentGroupProps["classNames"]>,
    },
    items: {
      default: undefined,
      type: Array as PropType<SegmentGroupPresetItem[] | undefined>,
    },
    ...({
      class: {
        default: undefined,
        type: [String, Object, Array] as PropType<ClassValue>,
      },
      defaultValue: {
        default: undefined,
        type: [String, null] as PropType<string | null>,
      },
      disabled: { default: undefined, type: Boolean },
      onValueChange: {
        default: undefined,
        type: Function as PropType<SegmentGroupRootProps["onValueChange"]>,
      },
      orientation: {
        default: "horizontal",
        type: String as PropType<"horizontal" | "vertical">,
      },
      value: {
        default: undefined,
        type: [String, null] as PropType<string | null>,
      },
      variant: {
        default: "default",
        type: String as PropType<SegmentGroupVariant>,
      },
    } as const),
  },
  setup(props, { slots, attrs }) {
    return () =>
      h(
        SegmentGroupRoot as ArkPart,
        {
          ...(attrs as object),
          class: cn(props.classNames?.base, props.class),
          defaultValue: props.defaultValue,
          disabled: props.disabled,
          onValueChange: props.onValueChange,
          orientation: props.orientation,
          value: props.value,
          variant: props.variant,
        },
        () => [
          h(SegmentGroupIndicator, { class: props.classNames?.indicator }),
          props.items?.map((item) =>
            h(
              SegmentGroupItem as ArkPart,
              {
                class: props.classNames?.item,
                disabled: item.disabled,
                key: item.value,
                value: item.value,
              },
              () => [
                h(
                  SegmentGroupItemText,
                  { class: props.classNames?.itemText },
                  () => item.label,
                ),
                h(SegmentGroupItemControl, {
                  class: props.classNames?.itemControl,
                }),
                h(SegmentGroupItemHiddenInput as ArkPart),
              ],
            ),
          ),
          slots.default?.(),
        ],
      );
  },
});
// #endregion

export const SegmentGroup = Object.assign(SegmentGroupShorthand, {
  Indicator: SegmentGroupIndicator,
  Item: SegmentGroupItem,
  ItemControl: SegmentGroupItemControl,
  ItemHiddenInput: SegmentGroupItemHiddenInput,
  ItemText: SegmentGroupItemText,
  Root: SegmentGroupRoot,
});
