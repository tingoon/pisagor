import { SegmentGroup as SegmentGroupPrimitive } from "@ark-ui/vue/segment-group";
import type { SegmentGroupProps as BaseSegmentGroupRootProps } from "@pisagor/props";
import { segmentGroupRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";

// #region Context
const {
  useStyles: useSegmentGroup,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "SegmentGroup",
  recipe: segmentGroupRecipe,
});
// #endregion

// #region Types
export type SegmentGroupVariant = "default" | "underline";

export interface SegmentGroupPresetItem {
  disabled?: boolean;
  label: VNodeChild;
  value: string;
}

export interface SegmentGroupRootProps extends BaseSegmentGroupRootProps {
  class?: unknown;
  defaultValue?: string | null;
  disabled?: boolean;
  onValueChange?: (value: string | null) => void;
  orientation?: "horizontal" | "vertical";
  value?: string | null;
  variant?: SegmentGroupVariant;
}

export interface SegmentGroupProps
  extends Omit<SegmentGroupRootProps, "children"> {
  items?: SegmentGroupPresetItem[];
}

export interface SegmentGroupItemProps {
  class?: unknown;
  disabled?: boolean;
  text?: VNodeChild;
  value: string;
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Parts
const SegmentGroupRootBase = withProvider(SegmentGroupPrimitive.Root, {
  name: "Root",
  slot: "base",
});

export const SegmentGroupItemText = withContext(
  SegmentGroupPrimitive.ItemText,
  {
    defaultProps: { "data-part": "item-text" },
    name: "ItemText",
    slot: "itemText",
  },
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
      type: [String, Object, Array] as PropType<unknown>,
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
        () => [h(SegmentGroupIndicator), slots.default?.()],
      );
    };
  },
});

export const SegmentGroupItem = defineComponent({
  inheritAttrs: false,
  name: "SegmentGroup.Item",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    disabled: { default: undefined, type: Boolean },
    text: {
      default: undefined,
      type: [String, Object, Array] as PropType<VNodeChild>,
    },
    value: { required: true, type: String },
  },
  setup(props, { attrs, slots }) {
    const styles = useSegmentGroup();

    return () => {
      const content = slots.default?.() ?? props.text;

      return h(
        SegmentGroupPrimitive.Item as ArkPart,
        {
          ...attrs,
          class: styles.slots.item({ class: cn(props.class) }),
          disabled: props.disabled,
          value: props.value,
        },
        () => [
          content != null
            ? h(SegmentGroupItemText, null, () => content as VNodeChild)
            : null,
          h(SegmentGroupPrimitive.ItemControl as ArkPart, {}),
          h(SegmentGroupPrimitive.ItemHiddenInput as ArkPart, {}),
        ],
      );
    };
  },
});
// #endregion

// #region Shorthand
export const SegmentGroupShorthand = defineComponent({
  inheritAttrs: false,
  name: "SegmentGroup",
  props: {
    items: {
      default: undefined,
      type: Array as PropType<SegmentGroupPresetItem[] | undefined>,
    },
    ...({
      class: {
        default: undefined,
        type: [String, Object, Array] as PropType<unknown>,
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
          class: props.class,
          defaultValue: props.defaultValue,
          disabled: props.disabled,
          onValueChange: props.onValueChange,
          orientation: props.orientation,
          value: props.value,
          variant: props.variant,
        },
        () => [
          props.items?.map((item) =>
            h(
              SegmentGroupItem as ArkPart,
              { disabled: item.disabled, key: item.value, value: item.value },
              () => item.label,
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
  ItemText: SegmentGroupItemText,
  Root: SegmentGroupRoot,
});
