import { SegmentGroup as SegmentGroupPrimitive } from "@ark-ui/vue/segment-group";
import { segmentGroupVariants } from "@pisagor/recipes/segment-group";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";

// #region Types
export type SegmentGroupVariant = "default" | "underline";

export interface SegmentGroupPresetItem {
  disabled?: boolean;
  label: VNodeChild;
  value: string;
}

export interface SegmentGroupRootProps {
  class?: unknown;
  defaultValue?: string | null;
  disabled?: boolean;
  onValueChange?: (value: string | null) => void;
  orientation?: "horizontal" | "vertical";
  value?: string | null;
  variant?: SegmentGroupVariant;
}

export interface SegmentGroupProps extends Omit<SegmentGroupRootProps, "children"> {
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
export const SegmentGroupRoot = defineComponent({
  inheritAttrs: false,
  name: "SegmentGroupRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    defaultValue: { default: undefined, type: [String, null] as PropType<string | null> },
    disabled: { default: undefined, type: Boolean },
    onValueChange: {
      default: undefined,
      type: Function as PropType<SegmentGroupRootProps["onValueChange"]>,
    },
    orientation: { default: "horizontal", type: String as PropType<"horizontal" | "vertical"> },
    value: { default: undefined, type: [String, null] as PropType<string | null> },
    variant: { default: "default", type: String as PropType<SegmentGroupVariant> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = segmentGroupVariants();

      return h(
        SegmentGroupPrimitive.Root as ArkPart,
        {
          ...attrs,
          class: variantSlots.base({ class: props.class }),
          "data-orientation": props.orientation,
          "data-variant": props.variant,
          defaultValue: props.defaultValue,
          disabled: props.disabled,
          modelValue: props.value,
          onValueChange: props.onValueChange
            ? (details: { value: string | null }) => props.onValueChange?.(details.value)
            : undefined,
          orientation: props.orientation,
        },
        () => [h(SegmentGroupIndicator as ArkPart), slots.default?.()],
      );
    };
  },
});

export const SegmentGroupItem = defineComponent({
  inheritAttrs: false,
  name: "SegmentGroupItem",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    disabled: { default: undefined, type: Boolean },
    text: { default: undefined, type: [String, Object, Array] as PropType<VNodeChild> },
    value: { required: true, type: String },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const content = slots.default?.() ?? props.text;
      const variantSlots = segmentGroupVariants();

      return h(
        SegmentGroupPrimitive.Item as ArkPart,
        {
          ...attrs,
          class: variantSlots.item({ class: cn(props.class, attrs.class) }),
          disabled: props.disabled,
          value: props.value,
        },
        () => [
          content != null
            ? h(SegmentGroupItemText as ArkPart, null, () => content as VNodeChild)
            : null,
          h(SegmentGroupPrimitive.ItemControl as ArkPart, {}),
          h(SegmentGroupPrimitive.ItemHiddenInput as ArkPart, {}),
        ],
      );
    };
  },
});

export const SegmentGroupItemText = defineComponent({
  inheritAttrs: false,
  name: "SegmentGroupItemText",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = segmentGroupVariants();

      return h(
        SegmentGroupPrimitive.ItemText as ArkPart,
        {
          ...attrs,
          class: variantSlots.itemText({ class: cn(props.class, attrs.class) }),
        },
        slots.default?.(),
      );
    };
  },
});

export const SegmentGroupIndicator = defineComponent({
  inheritAttrs: false,
  name: "SegmentGroupIndicator",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = segmentGroupVariants();

      return h(
        SegmentGroupPrimitive.Indicator as ArkPart,
        {
          ...attrs,
          class: variantSlots.indicator({ class: cn(props.class, attrs.class) }),
        },
        slots.default?.(),
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
    items: { default: undefined, type: Array as PropType<SegmentGroupPresetItem[] | undefined> },
    ...({
      class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
      defaultValue: { default: undefined, type: [String, null] as PropType<string | null> },
      disabled: { default: undefined, type: Boolean },
      onValueChange: {
        default: undefined,
        type: Function as PropType<SegmentGroupRootProps["onValueChange"]>,
      },
      orientation: { default: "horizontal", type: String as PropType<"horizontal" | "vertical"> },
      value: { default: undefined, type: [String, null] as PropType<string | null> },
      variant: { default: "default", type: String as PropType<SegmentGroupVariant> },
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
