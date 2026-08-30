import type { RadioGroupRootProps } from "@pisagor/vue";
import { Field, RadioGroup } from "@pisagor/vue";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import type { FieldPresentationProps } from "../../internal/field-shell";

type ArkPart = Parameters<typeof h>[0];

// #region Types
interface RadioGroupOption {
  description?: VNodeChild;
  label: VNodeChild;
  value: string;
}

export interface RadioGroupFieldProps
  extends Omit<FieldPresentationProps, "orientation">,
    Omit<RadioGroupRootProps, "invalid" | "name" | "onValueChange" | "value"> {
  name?: string;
  onBlur?: () => void;
  onValueChange: (value: string) => void;
  options: Array<RadioGroupOption | string>;
  value?: string;
  orientation?: RadioGroupRootProps["orientation"];
}
// #endregion

// #region Component
export const RadioGroupField = defineComponent({
  inheritAttrs: false,
  name: "RadioGroupField",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    defaultValue: { default: undefined, type: [String, null] as PropType<string | null> },
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
    name: { default: undefined, type: String },
    onBlur: { default: undefined, type: Function as PropType<() => void> },
    onValueChange: {
      required: true,
      type: Function as PropType<(value: string) => void>,
    },
    options: {
      required: true,
      type: Array as PropType<Array<RadioGroupOption | string>>,
    },
    orientation: {
      default: undefined,
      type: String as PropType<RadioGroupRootProps["orientation"]>,
    },
    value: { default: undefined, type: String },
  },
  setup(props, { attrs }) {
    return () => {
      const normalizedOptions = props.options.map((option) =>
        typeof option === "string" ? { label: option, value: option } : option,
      );
      const hasLabel = Boolean(props.label ?? props.labelAccessory);

      return h(
        Field.Set as ArkPart,
        {
          class: props.class,
          "data-invalid": props.invalid || undefined,
          invalid: props.invalid,
        },
        () => [
          hasLabel
            ? h(
                Field.Legend as ArkPart,
                {
                  class: props.labelProps?.class,
                  id: props.id,
                  variant: "label",
                },
                () => [props.label, props.labelAccessory],
              )
            : null,
          props.description ? h(Field.Description as ArkPart, null, () => props.description) : null,
          h(
            RadioGroup.Root as ArkPart,
            {
              ...attrs,
              "aria-labelledby": hasLabel && props.id ? props.id : undefined,
              defaultValue: props.defaultValue,
              disabled: props.disabled,
              invalid: props.invalid,
              name: props.name,
              onBlur: props.onBlur,
              onValueChange: (nextValue: string | null) => props.onValueChange(nextValue ?? ""),
              orientation: props.orientation,
              ...(props.value !== undefined ? { value: props.value || null } : {}),
            },
            () =>
              normalizedOptions.map((option) => {
                const optionId = props.id ? `${props.id}-${option.value}` : undefined;

                if (option.description) {
                  return h(Field as ArkPart, { key: option.value }, () => [
                    h(
                      RadioGroup.Item as ArkPart,
                      { id: optionId, value: option.value },
                      () => option.label,
                    ),
                    h(Field.Description as ArkPart, null, () => option.description),
                  ]);
                }

                return h(
                  RadioGroup.Item as ArkPart,
                  { id: optionId, key: option.value, value: option.value },
                  () => option.label,
                );
              }),
          ),
          props.error
            ? h(Field as ArkPart, { invalid: props.invalid }, () =>
                h(Field.Error as ArkPart, null, () => props.error),
              )
            : null,
        ],
      );
    };
  },
});
// #endregion
