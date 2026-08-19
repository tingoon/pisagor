import { PasswordInput as PasswordInputPrimitive } from "@ark-ui/vue/password-input";
import { PhEye, PhEyeSlash, PhX } from "@phosphor-icons/vue";
import {
  passwordInputInline2Variants,
  passwordInputInlineVariants,
  passwordInputVariants,
} from "@pisagor/styles/ui/password-input";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import { type ClearableChangeEvent, useClearableInput } from "../../hooks/use-clearable-input";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import type { WithTestId } from "../../internal/types";
import { InputGroup } from "../input-group";
import type { InputGroupButtonProps, InputGroupProps } from "../input-group/input-group-core";

type ArkPart = Parameters<typeof h>[0];
type InputGroupSize = InputGroupProps["size"];

type ClearableInputChangeHandler = (event: ClearableChangeEvent) => void;

// #region Types
export interface PasswordInputProps extends WithTestId {
  class?: unknown;
  clearButtonProps?: InputGroupButtonProps;
  clearable?: boolean;
  defaultValue?: string;
  defaultVisible?: boolean;
  disabled?: boolean;
  indicatorProps?: Record<string, unknown>;
  invalid?: boolean;
  onChange?: ClearableInputChangeHandler;
  onValueChange?: (value: string) => void;
  onVisibilityChange?: (details: { visible: boolean }) => void;
  placeholder?: string;
  readOnly?: boolean;
  size?: InputGroupSize;
  value?: string;
  variant?: FormControlVariant;
  visibilityTriggerProps?: Record<string, unknown>;
  visible?: boolean;
}
// #endregion

// #region Component
export const PasswordInput = defineComponent({
  inheritAttrs: false,
  name: "PasswordInput",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    clearable: { default: false, type: Boolean },
    clearButtonProps: { default: undefined, type: Object as PropType<InputGroupButtonProps> },
    defaultValue: { default: undefined, type: String },
    defaultVisible: { default: undefined, type: Boolean },
    disabled: { default: undefined, type: Boolean },
    indicatorProps: { default: undefined, type: Object as PropType<Record<string, unknown>> },
    invalid: { default: undefined, type: Boolean },
    onChange: { default: undefined, type: Function as PropType<PasswordInputProps["onChange"]> },
    onValueChange: {
      default: undefined,
      type: Function as PropType<PasswordInputProps["onValueChange"]>,
    },
    onVisibilityChange: {
      default: undefined,
      type: Function as PropType<PasswordInputProps["onVisibilityChange"]>,
    },
    placeholder: { default: undefined, type: String },
    readOnly: { default: undefined, type: Boolean },
    size: { default: "md", type: String as PropType<InputGroupSize> },
    testId: String,
    value: { default: undefined, type: String },
    variant: { default: undefined, type: String as PropType<FormControlVariant> },
    visibilityTriggerProps: {
      default: undefined,
      type: Object as PropType<Record<string, unknown>>,
    },
    visible: { default: undefined, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    const { canClear, handleChange, handleClear, inputRef } = useClearableInput({
      clearable: () => props.clearable,
      defaultValue: props.defaultValue,
      disabled: () => props.disabled,
      onChange: props.onChange,
      onValueChange: props.onValueChange,
      readOnly: () => props.readOnly,
      value: () => props.value,
    });

    return () => {
      const { onClick: onClearClick, ...restClearButtonProps } = props.clearButtonProps ?? {};
      const { fallback, ...restIndicatorProps } = props.indicatorProps ?? {};

      return h(
        PasswordInputPrimitive.Root as ArkPart,
        {
          class: cn(passwordInputVariants(), props.class),
          "data-size": props.size,
          "data-testid": props.testId,
          defaultVisible: props.defaultVisible,
          invalid: props.invalid,
          onVisibilityChange: props.onVisibilityChange,
          visible: props.visible,
        },
        () =>
          h(PasswordInputPrimitive.Control as ArkPart, { asChild: true }, () =>
            h(
              InputGroup as ArkPart,
              {
                class: cn(passwordInputInlineVariants()),
                "data-clearable": props.clearable || undefined,
                size: props.size,
                variant: props.variant,
              },
              () => [
                h(
                  PasswordInputPrimitive.Input as ArkPart,
                  {
                    asChild: true,
                    defaultValue: props.defaultValue,
                    disabled: props.disabled,
                    onInput: handleChange,
                    placeholder: props.placeholder,
                    readOnly: props.readOnly,
                    ref: inputRef,
                    value: props.value,
                    ...(attrs as object),
                  },
                  () => h(InputGroup.Input as ArkPart, { clearable: false }),
                ),
                canClear.value
                  ? h(
                      InputGroup.Addon as ArkPart,
                      { align: "inline-end", class: passwordInputInline2Variants() },
                      () =>
                        h(
                          InputGroup.Button as ArkPart,
                          {
                            ...restClearButtonProps,
                            "aria-label": "Clear",
                            "data-part": "clear-trigger",
                            "data-scope": "password-input",
                            onClick: (event: MouseEvent) => {
                              handleClear();
                              onClearClick?.(event);
                            },
                            size: "icon-xs",
                            type: "button",
                            variant: "ghost",
                          },
                          () => slots.clearButton?.() ?? h(PhX),
                        ),
                    )
                  : null,
                h(InputGroup.Addon as ArkPart, { align: "inline-end" }, () =>
                  h(
                    PasswordInputPrimitive.VisibilityTrigger as ArkPart,
                    {
                      asChild: true,
                      ...props.visibilityTriggerProps,
                    },
                    () =>
                      h(
                        InputGroup.Button as ArkPart,
                        {
                          "aria-label": "Toggle password visibility",
                          size: "icon-xs",
                          type: "button",
                          variant: "ghost",
                        },
                        () =>
                          h(
                            PasswordInputPrimitive.Indicator as ArkPart,
                            {
                              fallback: fallback ?? h(PhEyeSlash),
                              ...restIndicatorProps,
                            },
                            () => slots.indicator?.() ?? h(PhEye),
                          ),
                      ),
                  ),
                ),
              ],
            ),
          ),
      );
    };
  },
});
// #endregion
