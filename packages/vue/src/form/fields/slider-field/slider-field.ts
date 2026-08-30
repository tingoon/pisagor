import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import type { SliderProps } from "../../../components";
import { Slider } from "../../../components";
import { type FieldPresentationProps, FieldShell } from "../../internal/field-shell";
import type { SetRequired } from "../../internal/types";

type ArkPart = Parameters<typeof h>[0];

// #region Types
type SliderControlProps = SetRequired<
  Omit<SliderProps, "invalid" | "label" | "name">,
  "onValueChange"
>;

export interface SliderFieldProps
  extends Omit<FieldPresentationProps, "orientation">,
    SliderControlProps {
  name?: string;
  onBlur?: () => void;
}
// #endregion

// #region Component
export const SliderField = defineComponent({
  inheritAttrs: false,
  name: "SliderField",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    defaultValue: { default: undefined, type: Array as PropType<number[]> },
    description: { default: undefined, type: null as unknown as PropType<VNodeChild> },
    disabled: { default: undefined, type: Boolean },
    error: { default: undefined, type: null as unknown as PropType<VNodeChild> },
    id: { default: undefined, type: String },
    invalid: { default: undefined, type: Boolean },
    label: { default: undefined, type: null as unknown as PropType<VNodeChild> },
    labelAccessory: { default: undefined, type: null as unknown as PropType<VNodeChild> },
    labelProps: {
      default: undefined,
      type: Object as PropType<FieldPresentationProps["labelProps"]>,
    },
    markerInterval: { default: undefined, type: Number },
    markerLabels: { default: undefined, type: Array as PropType<string[]> },
    max: { default: undefined, type: Number },
    min: { default: undefined, type: Number },
    name: { default: undefined, type: String },
    onBlur: { default: undefined, type: Function as PropType<() => void> },
    onValueChange: {
      required: true,
      type: Function as PropType<(value: number[]) => void>,
    },
    showMarkers: { default: undefined, type: Boolean },
    showValue: { default: undefined, type: Boolean },
    step: { default: undefined, type: Number },
    value: { default: undefined, type: Array as PropType<number[]> },
    variant: { default: undefined, type: String as PropType<SliderProps["variant"]> },
  },
  setup(props, { attrs }) {
    return () =>
      h(
        FieldShell as ArkPart,
        {
          class: props.class,
          description: props.description,
          error: props.error,
          id: props.id,
          invalid: props.invalid,
          label: props.label,
          labelAccessory: props.labelAccessory,
          labelProps: props.labelProps,
        },
        () =>
          h(Slider as ArkPart, {
            ...attrs,
            defaultValue: props.defaultValue,
            disabled: props.disabled,
            id: props.id,
            invalid: props.invalid,
            markerInterval: props.markerInterval,
            markerLabels: props.markerLabels,
            max: props.max,
            min: props.min,
            name: props.name,
            onBlur: props.onBlur,
            onValueChange: props.onValueChange,
            showMarkers: props.showMarkers,
            showValue: props.showValue,
            step: props.step,
            variant: props.variant,
            ...(props.value !== undefined ? { value: props.value } : {}),
          }),
      );
  },
});
// #endregion
