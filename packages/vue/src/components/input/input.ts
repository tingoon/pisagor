import { Field as FieldPrimitive } from "@ark-ui/vue/field";
import { type InputSlots, inputRootVariants, inputVariants } from "@pisagor/styles/ui/input";
import { cn } from "@pisagor/utils";
import { computed, defineComponent, h, type PropType } from "vue";
import { type ClearableChangeEvent, useClearableInput } from "../../hooks/use-clearable-input";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import {
  formControlShellProps,
  shellVariantArgs,
} from "../../internal/form-control/form-control-variants";
import { useFormControlVariant } from "../../internal/form-control/use-form-control-variant";
import type { VariantClassNames } from "../../internal/types";
import { InputGroupRoot } from "../input-group/input-group-core";
import { InputClearAddon } from "./input-clear-button";

type ArkPart = Parameters<typeof h>[0];
type InputSize = "lg" | "md" | "sm";
type InputClassNames = VariantClassNames<InputSlots>;

type ClearableInputChangeHandler = (event: ClearableChangeEvent) => void;

// #region Types
export interface InputProps {
  class?: unknown;
  classNames?: InputClassNames;
  clearable?: boolean;
  defaultValue?: string | number | readonly string[];
  disabled?: boolean;
  onChange?: ClearableInputChangeHandler;
  onValueChange?: (value: string) => void;
  readOnly?: boolean;
  size?: InputSize;
  type?: string;
  value?: string | number | readonly string[];
  variant?: FormControlVariant;
}
// #endregion

// #region Part
export const Input = defineComponent({
  inheritAttrs: false,
  name: "PisagorInput",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    classNames: { default: undefined, type: Object as PropType<InputClassNames> },
    clearable: { default: false, type: Boolean },
    defaultValue: {
      default: undefined,
      type: [String, Number, Array] as PropType<InputProps["defaultValue"]>,
    },
    disabled: { default: undefined, type: Boolean },
    onChange: { default: undefined, type: Function as PropType<InputProps["onChange"]> },
    onValueChange: { default: undefined, type: Function as PropType<InputProps["onValueChange"]> },
    readOnly: { default: undefined, type: Boolean },
    size: { default: "md", type: String as PropType<InputSize> },
    type: { default: "text", type: String },
    value: { default: undefined, type: [String, Number, Array] as PropType<InputProps["value"]> },
    variant: { default: undefined, type: String as PropType<FormControlVariant> },
  },
  setup(props, { attrs }) {
    const resolvedVariant = computed(() => useFormControlVariant(props.variant));

    const clearableEnabled = computed(
      () => props.clearable && props.type !== "file" && props.type !== "password",
    );

    const { canClear, handleChange, handleClear, inputRef } = useClearableInput({
      clearable: clearableEnabled,
      defaultValue: props.defaultValue,
      disabled: () => props.disabled,
      onChange: props.onChange,
      onValueChange: props.onValueChange,
      readOnly: () => props.readOnly,
      type: () => props.type,
      value: () => props.value,
    });

    return () => {
      const resolved = resolvedVariant.value;
      const skipClearable = !props.clearable || props.type === "file" || props.type === "password";
      const shellArgs = shellVariantArgs(resolved);
      const controlProps = formControlShellProps(resolved);
      const slots = inputVariants();

      const changeHandler = skipClearable
        ? props.onChange || props.onValueChange
          ? (event: Event) => {
              const typed = event as ClearableChangeEvent;
              props.onChange?.(typed);
              props.onValueChange?.(typed.target.value);
            }
          : undefined
        : handleChange;

      if (skipClearable) {
        return h(FieldPrimitive.Input as ArkPart, {
          ...attrs,
          ...controlProps,
          class: cn(inputRootVariants({ size: props.size, ...shellArgs }), props.class),
          "data-size": props.size,
          defaultValue: props.defaultValue,
          disabled: props.disabled,
          onInput: changeHandler,
          readOnly: props.readOnly,
          type: props.type,
          value: props.value,
        });
      }

      return h(InputGroupRoot as ArkPart, { size: props.size, variant: props.variant }, () => [
        h(FieldPrimitive.Input as ArkPart, {
          ...attrs,
          class: slots.clearableRoot({ class: cn(props.class, props.classNames?.clearableRoot) }),
          "data-size": props.size,
          defaultValue: props.defaultValue,
          disabled: props.disabled,
          onInput: handleChange,
          readOnly: props.readOnly,
          ref: inputRef,
          type: props.type,
          value: props.value,
        }),
        canClear.value ? h(InputClearAddon as ArkPart, { onClear: handleClear }) : null,
      ]);
    };
  },
});
// #endregion
