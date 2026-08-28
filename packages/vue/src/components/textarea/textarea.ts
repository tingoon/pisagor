import { Field as FieldPrimitive } from "@ark-ui/vue/field";
import { formControlShellVariants } from "@pisagor/recipes/form-control";
import { type TextareaSlots, textareaVariants } from "@pisagor/recipes/textarea";
import { cn } from "@pisagor/utils";
import { computed, defineComponent, h, type PropType } from "vue";
import {
  type ClearableChangeEvent,
  useClearableInput,
} from "../../internal/hooks/use-clearable-input";
import type { VariantClassNames } from "../../internal/types";
import { InputClearButton } from "../input/input-clear-button";
import { InputGroupAddon, InputGroupRoot } from "../input-group/input-group-core";

type FormControlVariant = "primary" | "secondary";

type ArkPart = Parameters<typeof h>[0];
type TextareaClassNames = VariantClassNames<TextareaSlots>;

type ClearableInputChangeHandler = (event: ClearableChangeEvent) => void;

// #region Types
export interface TextareaProps {
  class?: unknown;
  classNames?: TextareaClassNames;
  clearable?: boolean;
  defaultValue?: string | number | readonly string[];
  disabled?: boolean;
  onChange?: ClearableInputChangeHandler;
  onValueChange?: (value: string) => void;
  readOnly?: boolean;
  value?: string | number | readonly string[];
  variant?: FormControlVariant;
}
// #endregion

// #region Part
export const Textarea = defineComponent({
  inheritAttrs: false,
  name: "PisagorTextarea",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    classNames: { default: undefined, type: Object as PropType<TextareaClassNames> },
    clearable: { default: false, type: Boolean },
    defaultValue: {
      default: undefined,
      type: [String, Number, Array] as PropType<TextareaProps["defaultValue"]>,
    },
    disabled: { default: undefined, type: Boolean },
    onChange: { default: undefined, type: Function as PropType<TextareaProps["onChange"]> },
    onValueChange: {
      default: undefined,
      type: Function as PropType<TextareaProps["onValueChange"]>,
    },
    readOnly: { default: undefined, type: Boolean },
    value: {
      default: undefined,
      type: [String, Number, Array] as PropType<TextareaProps["value"]>,
    },
    variant: { default: undefined, type: String as PropType<FormControlVariant> },
  },
  setup(props, { attrs }) {
    const resolvedVariant = computed(() => ({
      surfaceVariant: undefined,
      variant: props.variant ?? ("primary" as FormControlVariant),
    }));

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
      const resolved = resolvedVariant.value;
      const skipClearable = !props.clearable;
      const shellArgs = { variant: resolved.variant };
      const controlProps = { "data-variant": resolved.variant };
      const slots = textareaVariants();

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
        return h(FieldPrimitive.Textarea as ArkPart, {
          ...attrs,
          ...controlProps,
          class: cn(
            formControlShellVariants({ size: "md", ...shellArgs }),
            slots.rootLayout({
              class: cn(props.class, props.classNames?.rootLayout),
            }),
          ),
          defaultValue: props.defaultValue,
          disabled: props.disabled,
          onInput: changeHandler,
          readOnly: props.readOnly,
          value: props.value,
        });
      }

      return h(
        InputGroupRoot as ArkPart,
        { class: slots.group({ class: props.classNames?.group }), variant: props.variant },
        () => [
          h(FieldPrimitive.Textarea as ArkPart, {
            ...attrs,
            class: slots.clearableRoot({
              class: cn(canClear.value && "pe-9", props.class, props.classNames?.clearableRoot),
            }),
            defaultValue: props.defaultValue,
            disabled: props.disabled,
            onInput: handleChange,
            readOnly: props.readOnly,
            ref: inputRef,
            value: props.value,
          }),
          canClear.value
            ? h(
                InputGroupAddon as ArkPart,
                { align: "inline-end", class: slots.clearAddon() },
                () => h(InputClearButton as ArkPart, { onClear: handleClear }),
              )
            : null,
        ],
      );
    };
  },
});
// #endregion
