import { NumberInput as NumberInputPrimitive } from "@ark-ui/vue/number-input";
import { PhMinus, PhPlus } from "@phosphor-icons/vue";
import type { NumberInputProps as BaseNumberInputProps } from "@pisagor/props";
import {
  type FormControlGroupShellVariantProps,
  formControlGroupShellRecipe,
  numberInputRecipe,
} from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { computed, defineComponent, h, type PropType } from "vue";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { Button } from "./button";
import { FieldLabel } from "./field";
import { Input, type InputProps } from "./input";
import { InputClearButton } from "./input/input-clear-button";
import { useFormControlSurface } from "./surface/use-form-control-surface";

// #region Slot recipe context
const { provideStyles: provideNumberInputStyles, useStyles: useNumberInput } =
  createSlotRecipeContext({
    name: "NumberInput",
    recipe: numberInputRecipe,
  });
// #endregion

type FormControlVariant = "primary" | "secondary";

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface NumberInputProps
  extends FormControlGroupShellVariantProps,
    BaseNumberInputProps {
  class?: unknown;
  clearable?: boolean;
  defaultValue?: string;
  disabled?: boolean;
  max?: number;
  min?: number;
  onValueChange?: (value: number) => void;
  placeholder?: string;
  readOnly?: boolean;
  step?: number;
  value?: string;
}

export interface NumberInputControlProps
  extends Pick<FormControlGroupShellVariantProps, "variant"> {
  class?: unknown;
  clearable?: boolean;
}
// #endregion

// #region Parts
export const NumberInputRoot = defineComponent({
  inheritAttrs: false,
  name: "NumberInputRoot",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    clearable: { default: false, type: Boolean },
    defaultValue: { default: undefined, type: String },
    disabled: { default: undefined, type: Boolean },
    max: { default: undefined, type: Number },
    min: { default: undefined, type: Number },
    onValueChange: {
      default: undefined,
      type: Function as PropType<NumberInputProps["onValueChange"]>,
    },
    placeholder: { default: undefined, type: String },
    readOnly: { default: undefined, type: Boolean },
    recipe: {
      default: numberInputRecipe,
      type: Function as PropType<typeof numberInputRecipe>,
    },
    size: { default: "md", type: String as PropType<NumberInputProps["size"]> },
    step: { default: undefined, type: Number },
    value: { default: undefined, type: String },
    variant: {
      default: undefined,
      type: String as PropType<FormControlVariant>,
    },
  },
  setup(props, { attrs, slots }) {
    const recipeSlots = computed(() => props.recipe());

    provideNumberInputStyles({
      get slots() {
        return recipeSlots.value;
      },
      variants: {},
    });

    return () =>
      h(
        NumberInputPrimitive.Root as ArkPart,
        {
          ...attrs,
          class: cn(recipeSlots.value.base(), props.class),
          "data-size": props.size,
          defaultValue: props.defaultValue,
          disabled: props.disabled,
          max: props.max,
          min: props.min,
          modelValue: props.value,
          onValueChange: props.onValueChange
            ? (details: { value: string }) =>
                props.onValueChange?.(Number(details.value))
            : undefined,
          readOnly: props.readOnly,
          step: props.step,
        },
        () =>
          slots.default?.() ?? [
            h(
              NumberInputControl as ArkPart,
              { clearable: props.clearable, variant: props.variant },
              () => [
                h(NumberInputDecrementTrigger as ArkPart),
                h(NumberInputInput as ArkPart, {
                  placeholder: props.placeholder,
                  size: props.size,
                  variant: props.variant,
                }),
                h(NumberInputClearTrigger as ArkPart),
                h(NumberInputIncrementTrigger as ArkPart),
              ],
            ),
          ],
      );
  },
});

export const NumberInputControl = defineComponent({
  inheritAttrs: false,
  name: "NumberInputControl",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    clearable: { default: false, type: Boolean },
    variant: {
      default: undefined,
      type: String as PropType<FormControlVariant>,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useNumberInput();

    const surfaceVariant = useFormControlSurface();

    return () => {
      const resolved = {
        surfaceVariant,
        variant: props.variant ?? ("primary" as FormControlVariant),
      };
      const shellArgs = {
        surfaceVariant: resolved.surfaceVariant,
        variant: resolved.variant,
      };
      const controlProps = { "data-variant": resolved.variant };

      return h(
        NumberInputPrimitive.Control as ArkPart,
        {
          ...attrs,
          ...controlProps,
          class: cn(
            styles.slots.control(),
            formControlGroupShellRecipe({ size: "md", ...shellArgs }),
            props.class,
          ),
          "data-clearable": props.clearable || undefined,
        },
        slots,
      );
    };
  },
});

export const NumberInputClearTrigger = defineComponent({
  name: "NumberInputClearTrigger",
  setup(_props) {
    const styles = useNumberInput();

    return () =>
      h(NumberInputPrimitive.Context as ArkPart, null, {
        default: (api: {
          setValue: (value: number) => void;
          value: string | undefined;
        }) => {
          const hasValue =
            api.value !== undefined &&
            api.value !== null &&
            String(api.value).length > 0;

          if (!hasValue) {
            return null;
          }

          return h(InputClearButton as ArkPart, {
            class: styles.slots.clearTrigger(),
            onClear: () => api.setValue(Number.NaN),
          });
        },
      });
  },
});

export const NumberInputDecrementTrigger = defineComponent({
  inheritAttrs: false,
  name: "NumberInputDecrementTrigger",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
  },
  setup(props, { attrs }) {
    const styles = useNumberInput();

    return () =>
      h(
        NumberInputPrimitive.DecrementTrigger as ArkPart,
        {
          ...attrs,
          asChild: true,
          class: cn(styles.slots.decrementTrigger(), props.class),
        },
        () =>
          h(
            Button as ArkPart,
            { "aria-label": "Decrement", variant: "ghost" },
            () => h(PhMinus, { "aria-hidden": true }),
          ),
      );
  },
});

export const NumberInputIncrementTrigger = defineComponent({
  inheritAttrs: false,
  name: "NumberInputIncrementTrigger",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
  },
  setup(props, { attrs }) {
    const styles = useNumberInput();

    return () =>
      h(
        NumberInputPrimitive.IncrementTrigger as ArkPart,
        {
          ...attrs,
          asChild: true,
          class: cn(styles.slots.incrementTrigger(), props.class),
        },
        () =>
          h(
            Button as ArkPart,
            { "aria-label": "Increment", variant: "ghost" },
            () => h(PhPlus, { "aria-hidden": true }),
          ),
      );
  },
});

export const NumberInputInput = defineComponent({
  inheritAttrs: false,
  name: "NumberInputInput",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    classNames: {
      default: undefined,
      type: Object as PropType<InputProps["classNames"]>,
    },
    placeholder: { default: undefined, type: String },
    size: {
      default: undefined,
      type: String as PropType<NumberInputProps["size"]>,
    },
    variant: {
      default: undefined,
      type: String as PropType<FormControlVariant>,
    },
  },
  setup(props, { attrs }) {
    const styles = useNumberInput();

    return () =>
      h(
        NumberInputPrimitive.Input as ArkPart,
        { asChild: true, ...attrs },
        () =>
          h(Input as ArkPart, {
            ...(attrs as object),
            class: cn(styles.slots.input(), props.class),
            classNames: props.classNames,
            placeholder: props.placeholder,
            size: props.size,
            variant: props.variant,
          }),
      );
  },
});

export const NumberInputScrubber = defineComponent({
  inheritAttrs: false,
  name: "NumberInputScrubber",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useNumberInput();

    return () =>
      h(
        NumberInputPrimitive.Scrubber as ArkPart,
        {
          ...attrs,
          asChild: true,
          class: cn(styles.slots.scrubber(), props.class),
        },
        () =>
          h(NumberInputPrimitive.Label as ArkPart, { asChild: true }, () =>
            h(FieldLabel as ArkPart, null, slots.default),
          ),
      );
  },
});
// #endregion

export const NumberInput = Object.assign(NumberInputRoot, {
  ClearTrigger: NumberInputClearTrigger,
  Control: NumberInputControl,
  DecrementTrigger: NumberInputDecrementTrigger,
  IncrementTrigger: NumberInputIncrementTrigger,
  Input: NumberInputInput,
  Scrubber: NumberInputScrubber,
});
