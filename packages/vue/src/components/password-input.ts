import { PasswordInput as PasswordInputPrimitive } from "@ark-ui/vue";
import { PhEye, PhEyeSlash, PhX } from "@phosphor-icons/vue";
import type { PasswordInputProps as BasePasswordInputProps } from "@pisagor/props";
import { passwordInputRecipe } from "@pisagor/recipes";
import { defineComponent, h, type PropType } from "vue";
import {
  type ClearableChangeEvent,
  useClearableInput,
} from "../hooks/use-clearable-input";
import type { ClassValue } from "../internal";
import { InputGroup } from "./input-group";
import type { InputGroupButtonProps } from "./input-group/input-group-core";
import { useLocale } from "./provider/context";

type ArkPart = Parameters<typeof h>[0];

type ClearableInputChangeHandler = (event: ClearableChangeEvent) => void;

// #region Types
export interface PasswordInputProps extends BasePasswordInputProps {
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
  value?: string;
  visibilityTriggerProps?: Record<string, unknown>;
  visible?: boolean;
}
// #endregion

// #region Parts
const classProp = {
  default: undefined,
  type: [String, Object, Array] as PropType<ClassValue>,
};

const PasswordInputRoot = defineComponent({
  inheritAttrs: false,
  name: "PasswordInput.Root",
  props: {
    class: classProp,
    recipe: {
      default: passwordInputRecipe,
      type: Function as PropType<typeof passwordInputRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        PasswordInputPrimitive.Root as ArkPart,
        { ...attrs, class: props.recipe().base({ class: props.class }) },
        slots,
      );
  },
});

const PasswordInputControl = defineComponent({
  inheritAttrs: false,
  name: "PasswordInput.Control",
  props: { class: classProp },
  setup(props, { attrs, slots }) {
    return () =>
      h(PasswordInputPrimitive.Control as ArkPart, { asChild: true }, () =>
        h(
          InputGroup as ArkPart,
          {
            ...attrs,
            class: passwordInputRecipe().control({ class: props.class }),
          },
          slots,
        ),
      );
  },
});

const PasswordInputInput = defineComponent({
  inheritAttrs: false,
  name: "PasswordInput.Input",
  setup(_, { attrs }) {
    return () =>
      h(
        PasswordInputPrimitive.Input as ArkPart,
        { ...attrs, asChild: true },
        () => h(InputGroup.Input as ArkPart, { clearable: false }),
      );
  },
});

const PasswordInputVisibilityTrigger = defineComponent({
  inheritAttrs: false,
  name: "PasswordInput.VisibilityTrigger",
  setup(_, { attrs, slots }) {
    const { m } = useLocale();

    return () =>
      h(InputGroup.Addon as ArkPart, { align: "inline-end" }, () =>
        h(
          PasswordInputPrimitive.VisibilityTrigger as ArkPart,
          { ...attrs, asChild: true },
          () =>
            h(
              InputGroup.Button as ArkPart,
              {
                "aria-label": m("passwordInput.togglePasswordVisibility"),
                size: "icon-xs",
                type: "button",
                variant: "ghost",
              },
              () =>
                slots.default?.() ??
                h(PasswordInputPrimitive.Indicator as ArkPart, null, {
                  default: () => h(PhEye),
                  fallback: () => h(PhEyeSlash),
                }),
            ),
        ),
      );
  },
});
// #endregion

// #region Component
const PasswordInputShorthand = defineComponent({
  inheritAttrs: false,
  name: "PasswordInput",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    clearable: { default: false, type: Boolean },
    clearButtonProps: {
      default: undefined,
      type: Object as PropType<InputGroupButtonProps>,
    },
    defaultValue: { default: undefined, type: String },
    defaultVisible: { default: undefined, type: Boolean },
    disabled: { default: undefined, type: Boolean },
    indicatorProps: {
      default: undefined,
      type: Object as PropType<Record<string, unknown>>,
    },
    invalid: { default: undefined, type: Boolean },
    onChange: {
      default: undefined,
      type: Function as PropType<PasswordInputProps["onChange"]>,
    },
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
    recipe: {
      default: passwordInputRecipe,
      type: Function as PropType<typeof passwordInputRecipe>,
    },
    size: {
      default: "md",
      type: String as PropType<PasswordInputProps["size"]>,
    },
    value: { default: undefined, type: String },
    variant: {
      default: undefined,
      type: String as PropType<PasswordInputProps["variant"]>,
    },
    visibilityTriggerProps: {
      default: undefined,
      type: Object as PropType<Record<string, unknown>>,
    },
    visible: { default: undefined, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    const { m } = useLocale();
    const { canClear, handleChange, handleClear, inputRef } = useClearableInput(
      {
        clearable: () => props.clearable,
        defaultValue: props.defaultValue,
        disabled: () => props.disabled,
        onChange: props.onChange,
        onValueChange: props.onValueChange,
        readOnly: () => props.readOnly,
        value: () => props.value,
      },
    );

    return () => {
      const { onClick: onClearClick, ...restClearButtonProps } =
        props.clearButtonProps ?? {};
      const { fallback, ...restIndicatorProps } = props.indicatorProps ?? {};
      const variantSlots = props.recipe();

      return h(
        PasswordInputPrimitive.Root as ArkPart,
        {
          class: variantSlots.base({ class: props.class }),
          "data-size": props.size,
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
                class: variantSlots.control(),
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
                      { align: "inline-end", class: variantSlots.clearAddon() },
                      () =>
                        h(
                          InputGroup.Button as ArkPart,
                          {
                            "aria-label": m("passwordInput.clear"),
                            ...restClearButtonProps,
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
                          "aria-label": m(
                            "passwordInput.togglePasswordVisibility",
                          ),
                          size: "icon-xs",
                          type: "button",
                          variant: "ghost",
                        },
                        () =>
                          h(
                            PasswordInputPrimitive.Indicator as ArkPart,
                            {
                              ...restIndicatorProps,
                            },
                            {
                              default: () => slots.indicator?.() ?? h(PhEye),
                              fallback: () => fallback ?? h(PhEyeSlash),
                            },
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

export const PasswordInput = Object.assign(PasswordInputShorthand, {
  Control: PasswordInputControl,
  Indicator: PasswordInputPrimitive.Indicator,
  Input: PasswordInputInput,
  Root: PasswordInputRoot,
  VisibilityTrigger: PasswordInputVisibilityTrigger,
});
