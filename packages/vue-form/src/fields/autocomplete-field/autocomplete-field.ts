import type { AutocompleteProps } from "@pisagor/vue";
import { Autocomplete } from "@pisagor/vue";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { type FieldPresentationProps, FieldShell } from "../../internal/field-shell";

type ArkPart = Parameters<typeof h>[0];

// #region Types
interface AutocompleteOption {
  label: string;
  value: string;
}

export interface AutocompleteFieldProps
  extends FieldPresentationProps,
    Omit<AutocompleteProps, "class" | "invalid" | "name" | "onValueChange" | "value" | "items"> {
  items: Array<AutocompleteOption | string>;
  name?: string;
  onBlur?: () => void;
  onValueChange: (value: string) => void;
  value?: string;
}
// #endregion

// #region Part
export const AutocompleteField = defineComponent({
  inheritAttrs: false,
  name: "AutocompleteField",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    clearable: { default: undefined, type: Boolean },
    description: { default: undefined, type: null as unknown as PropType<VNodeChild> },
    disabled: { default: undefined, type: Boolean },
    error: { default: undefined, type: null as unknown as PropType<VNodeChild> },
    id: { default: undefined, type: String },
    invalid: { default: undefined, type: Boolean },
    items: {
      required: true,
      type: Array as PropType<Array<AutocompleteOption | string>>,
    },
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
    orientation: {
      default: undefined,
      type: String as PropType<FieldPresentationProps["orientation"]>,
    },
    placeholder: { default: undefined, type: String },
    value: { default: undefined, type: String },
    variant: { default: undefined, type: String as PropType<AutocompleteProps["variant"]> },
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
          orientation: props.orientation,
        },
        () =>
          h(Autocomplete as ArkPart, {
            ...attrs,
            clearable: props.clearable,
            disabled: props.disabled,
            id: props.id,
            invalid: props.invalid,
            items: props.items,
            name: props.name,
            onFocusOutside: props.onBlur,
            onValueChange: (nextValue: string | string[]) => {
              const list = Array.isArray(nextValue) ? nextValue : [nextValue];
              props.onValueChange(list.at(0) ?? "");
            },
            placeholder: props.placeholder,
            variant: props.variant,
            ...(props.value !== undefined ? { value: props.value ? [props.value] : [] } : {}),
          }),
      );
  },
});
// #endregion
