import { RadioGroup as RadioGroupPrimitive } from "@ark-ui/vue/radio-group";
import {
  radioGroupItemControlVariants,
  radioGroupItemVariants,
  radioGroupVariants,
} from "@pisagor/styles/ui/radio-group";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import {
  formControlRadioToggleVariants,
  formControlShellProps,
  shellVariantArgs,
} from "../../internal/form-control/form-control-variants";
import { useFormControlVariant } from "../../internal/form-control/use-form-control-variant";
import type { WithTestId } from "../../internal/types";
import { FieldLabel } from "../field/field";

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface RadioGroupPresetItem {
  disabled?: boolean;
  label: VNodeChild;
  value: string;
}

export interface RadioGroupRootProps extends WithTestId {
  class?: unknown;
  defaultValue?: string | null;
  disabled?: boolean;
  name?: string;
  onValueChange?: (value: string | null) => void;
  orientation?: "horizontal" | "vertical";
  value?: string | null;
}

export interface RadioGroupProps extends Omit<RadioGroupRootProps, "class"> {
  items?: RadioGroupPresetItem[];
}

export interface RadioGroupItemProps {
  class?: unknown;
  disabled?: boolean;
  tabIndex?: number;
  value: string;
  variant?: FormControlVariant;
}
// #endregion

// #region Components
export const RadioGroupRoot = defineComponent({
  inheritAttrs: false,
  name: "RadioGroupRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    defaultValue: { default: undefined, type: [String, null] as PropType<string | null> },
    disabled: { default: undefined, type: Boolean },
    name: { default: undefined, type: String },
    onValueChange: {
      default: undefined,
      type: Function as PropType<RadioGroupRootProps["onValueChange"]>,
    },
    orientation: { default: undefined, type: String as PropType<"horizontal" | "vertical"> },
    testId: String,
    value: { default: undefined, type: [String, null] as PropType<string | null> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        RadioGroupPrimitive.Root as ArkPart,
        {
          ...attrs,
          class: cn(radioGroupVariants(), props.class),
          "data-testid": props.testId,
          defaultValue: props.defaultValue,
          disabled: props.disabled,
          modelValue: props.value,
          name: props.name,
          onValueChange: props.onValueChange
            ? (details: { value: string | null }) => props.onValueChange?.(details.value)
            : undefined,
          orientation: props.orientation,
        },
        slots,
      );
  },
});

export const RadioGroupItem = defineComponent({
  inheritAttrs: false,
  name: "RadioGroupItem",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    disabled: { default: undefined, type: Boolean },
    tabIndex: { default: undefined, type: Number },
    value: { required: true, type: String },
    variant: { default: undefined, type: String as PropType<FormControlVariant> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const resolved = useFormControlVariant(props.variant);
      const shellArgs = shellVariantArgs(resolved);
      const controlProps = formControlShellProps(resolved);

      return h(
        RadioGroupPrimitive.Item as ArkPart,
        {
          ...attrs,
          class: cn(radioGroupItemVariants(), props.class),
          disabled: props.disabled,
          value: props.value,
        },
        () => [
          h(RadioGroupPrimitive.ItemControl as ArkPart, {
            ...controlProps,
            class: cn(
              formControlRadioToggleVariants({ ...shellArgs }),
              radioGroupItemControlVariants(),
            ),
          }),
          h(RadioGroupText as ArkPart, null, slots.default),
          h(RadioGroupPrimitive.ItemHiddenInput as ArkPart, { tabIndex: props.tabIndex }),
        ],
      );
    };
  },
});

export const RadioGroupText = defineComponent({
  inheritAttrs: false,
  name: "RadioGroupText",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(FieldLabel as ArkPart, { asChild: true }, () =>
        h(
          RadioGroupPrimitive.ItemText as ArkPart,
          {
            ...(attrs as object),
            class: props.class,
          },
          slots,
        ),
      );
  },
});

export const RadioGroupLabel = defineComponent({
  inheritAttrs: false,
  name: "RadioGroupLabel",
  setup(_props, { attrs, slots }) {
    return () =>
      h(FieldLabel as ArkPart, { asChild: true }, () =>
        h(
          RadioGroupPrimitive.Label as ArkPart,
          {
            ...(attrs as object),
          },
          slots,
        ),
      );
  },
});

export const RadioGroupShorthand = defineComponent({
  inheritAttrs: false,
  name: "RadioGroupShorthand",
  props: {
    defaultValue: { default: undefined, type: [String, null] as PropType<string | null> },
    disabled: { default: undefined, type: Boolean },
    items: { default: () => [], type: Array as PropType<RadioGroupPresetItem[]> },
    name: { default: undefined, type: String },
    onValueChange: {
      default: undefined,
      type: Function as PropType<RadioGroupRootProps["onValueChange"]>,
    },
    orientation: { default: undefined, type: String as PropType<"horizontal" | "vertical"> },
    testId: String,
    value: { default: undefined, type: [String, null] as PropType<string | null> },
  },
  setup(props, { attrs }) {
    return () =>
      h(
        RadioGroupRoot as ArkPart,
        {
          ...(attrs as object),
          defaultValue: props.defaultValue,
          disabled: props.disabled,
          name: props.name,
          onValueChange: props.onValueChange,
          orientation: props.orientation,
          testId: props.testId,
          value: props.value,
        },
        () =>
          props.items?.map((item) =>
            h(
              RadioGroupItem as ArkPart,
              { disabled: item.disabled, key: item.value, value: item.value },
              () => item.label,
            ),
          ),
      );
  },
});
// #endregion
