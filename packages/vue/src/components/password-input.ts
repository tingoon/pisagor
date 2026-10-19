import { PasswordInput as PasswordInputPrimitive } from "@ark-ui/vue";
import { PhEye, PhEyeSlash, PhX } from "@phosphor-icons/vue";
import type {
  PasswordInputContract,
  PasswordInputRootContract,
} from "@pisagor/contracts";
import { passwordInputRecipe } from "@pisagor/recipes";
import { type Component, defineComponent, h, type PropType } from "vue";
import {
  type ClearableChangeEvent,
  useClearableInput,
} from "../hooks/use-clearable-input";
import { type ClassValue, createSlotRecipeContext } from "../internal";
import { InputGroup } from "./input-group";
import type { InputGroupButtonProps } from "./input-group/input-group-core";
import { useLocale } from "./provider/context";

type ArkPart = Parameters<typeof h>[0];

type ClearableInputChangeHandler = (event: ClearableChangeEvent) => void;

// #region Types
export interface PasswordInputProps
  extends PasswordInputRootContract, PasswordInputContract {
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
const { withContext, withProvider } = createSlotRecipeContext({
  name: "PasswordInput",
  recipe: passwordInputRecipe,
});

export const PasswordInputRoot = withProvider<PasswordInputRootContract>(
  PasswordInputPrimitive.Root,
  { name: "Root", slot: "base" },
);

export const PasswordInputLabel = withContext(PasswordInputPrimitive.Label, {
  name: "Label",
});

export const PasswordInputControl = withContext(
  PasswordInputPrimitive.Control,
  { name: "Control" },
);

// Cast: Ark's Input props union is too complex for `withContext` (TS2590).
export const PasswordInputInput = withContext(
  PasswordInputPrimitive.Input as Component,
  { name: "Input" },
);

const VisibilityTriggerBase = withContext(
  PasswordInputPrimitive.VisibilityTrigger,
  { name: "VisibilityTrigger" },
);

/** Visibility trigger with a localized default `aria-label`. */
export const PasswordInputVisibilityTrigger = defineComponent({
  inheritAttrs: false,
  name: "PasswordInput.VisibilityTrigger",
  setup(_, { attrs, slots }) {
    const { m } = useLocale();

    return () =>
      h(
        VisibilityTriggerBase as ArkPart,
        {
          "aria-label": m("passwordInput.togglePasswordVisibility"),
          ...attrs,
        },
        slots,
      );
  },
});

export const PasswordInputIndicator = withContext(
  PasswordInputPrimitive.Indicator,
  { name: "Indicator" },
);
// #endregion

// #region Shorthand
const PasswordInputShorthand = defineComponent({
  inheritAttrs: false,
  name: "PasswordInput",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    classNames: {
      default: undefined,
      type: Object as PropType<PasswordInputProps["classNames"]>,
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

      const classNames = props.classNames;
      const { surfaceVariant: _surfaceVariant, ...inputAttrs } =
        attrs as Record<string, unknown>;

      return h(
        PasswordInputRoot as ArkPart,
        {
          class: props.class,
          "data-size": props.size,
          defaultVisible: props.defaultVisible,
          invalid: props.invalid,
          onVisibilityChange: props.onVisibilityChange,
          recipe: props.recipe,
          visible: props.visible,
        },
        () =>
          h(
            PasswordInputControl as ArkPart,
            { asChild: true, class: classNames?.control },
            () =>
              h(
                InputGroup as ArkPart,
                {
                  "data-clearable": props.clearable || undefined,
                  size: props.size,
                  variant: props.variant,
                },
                () => [
                  h(
                    PasswordInputInput as ArkPart,
                    {
                      asChild: true,
                      class: classNames?.input,
                      defaultValue: props.defaultValue,
                      disabled: props.disabled,
                      onInput: handleChange,
                      placeholder: props.placeholder,
                      readOnly: props.readOnly,
                      ref: inputRef,
                      value: props.value,
                      ...inputAttrs,
                    },
                    () => h(InputGroup.Input as ArkPart, { clearable: false }),
                  ),
                  canClear.value
                    ? h(
                        InputGroup.Addon as ArkPart,
                        {
                          align: "inline-end",
                          class: variantSlots.clearAddon({
                            class: classNames?.clearAddon,
                          }),
                        },
                        () =>
                          h(
                            InputGroup.Button as ArkPart,
                            {
                              ...restClearButtonProps,
                              "aria-label": m("passwordInput.clear"),
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
                      PasswordInputVisibilityTrigger as ArkPart,
                      {
                        ...props.visibilityTriggerProps,
                        asChild: true,
                        class: classNames?.visibilityTrigger,
                      },
                      () =>
                        h(
                          InputGroup.Button as ArkPart,
                          { size: "icon-xs", type: "button", variant: "ghost" },
                          () =>
                            h(
                              PasswordInputIndicator as ArkPart,
                              {
                                ...restIndicatorProps,
                                class: classNames?.indicator,
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
  Indicator: PasswordInputIndicator,
  Input: PasswordInputInput,
  Label: PasswordInputLabel,
  Root: PasswordInputRoot,
  VisibilityTrigger: PasswordInputVisibilityTrigger,
});
