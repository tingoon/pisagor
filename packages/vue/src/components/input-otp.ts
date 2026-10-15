import { ark } from "@ark-ui/vue/factory";
import {
  PinInput as PinInputPrimitive,
  type PinInputValueChangeDetails,
} from "@ark-ui/vue/pin-input";
import type { InputOtpProps as BaseInputOTPProps } from "@pisagor/props";
import { inputOtpRecipe, inputRootRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { computed, defineComponent, h, type PropType, unref } from "vue";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import type { ClassValue } from "../internal/types";
import { createContext } from "../internal/utils/create-context";
import type { InputProps } from "./input";
import { useFormControlSurface } from "./surface/use-form-control-surface";

type FormControlVariant = "primary" | "secondary";

// #region Context
const {
  Context: InputOTPStylesContext,
  useStyles: useInputOTPStyles,
  withContext,
} = createSlotRecipeContext({
  name: "InputOTP",
  recipe: inputOtpRecipe,
});

interface InputOTPOptionsContextValue {
  size?: InputProps["size"];
  variant?: FormControlVariant;
}

const [provideInputOTPOptions, , useInputOTPOptionsRef] = createContext(
  "InputOTPOptions",
)<InputOTPOptionsContextValue>({ defaultValue: {}, strict: false });
// #endregion

type ArkPart = Parameters<typeof h>[0];

export interface InputOTPProps extends BaseInputOTPProps {
  class?: unknown;
  otp?: boolean;
  placeholder?: string;
  size?: InputProps["size"];
  variant?: FormControlVariant;
  blurOnComplete?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  mask?: boolean;
  onValueChange?: (value: string[]) => void;
  value?: string[];
  defaultValue?: string[];
  count?: number;
}

export const InputOTPRoot = defineComponent({
  inheritAttrs: false,
  name: "InputOTP",
  props: {
    blurOnComplete: { default: undefined, type: Boolean },
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    count: { default: undefined, type: Number },
    defaultValue: {
      default: undefined,
      type: Array as PropType<string[] | undefined>,
    },
    disabled: { default: undefined, type: Boolean },
    invalid: { default: undefined, type: Boolean },
    mask: { default: undefined, type: Boolean },
    onValueChange: {
      default: undefined,
      type: Function as PropType<InputOTPProps["onValueChange"]>,
    },
    otp: { default: true, type: Boolean },
    placeholder: { default: undefined, type: String },
    recipe: {
      default: inputOtpRecipe,
      type: Function as PropType<typeof inputOtpRecipe>,
    },
    size: {
      default: undefined,
      type: String as PropType<InputOTPProps["size"]>,
    },
    value: {
      default: undefined,
      type: Array as PropType<string[] | undefined>,
    },
    variant: {
      default: undefined,
      type: String as PropType<FormControlVariant | undefined>,
    },
  },
  setup(props, { attrs, slots }) {
    const recipeSlots = computed(() =>
      props.recipe({ size: props.size ?? "md" }),
    );

    provideInputOTPOptions(
      computed(() => ({
        size: props.size,
        variant: props.variant,
      })),
    );

    return () => {
      const variantSlots = recipeSlots.value;

      return h(
        InputOTPStylesContext,
        { value: { slots: variantSlots, variants: {} } },
        () =>
          h(
            PinInputPrimitive.Root as ArkPart,
            {
              ...attrs,
              blurOnComplete: props.blurOnComplete,
              class: variantSlots.base({ class: cn(props.class) }),
              count: props.count,
              defaultValue: props.defaultValue,
              disabled: props.disabled,
              invalid: props.invalid,
              mask: props.mask,
              modelValue: props.value,
              onValueChange: props.onValueChange
                ? (details: PinInputValueChangeDetails) =>
                    props.onValueChange?.(details.value)
                : undefined,
              otp: props.otp,
              placeholder: props.placeholder ?? "",
            },
            () => [
              h(
                PinInputPrimitive.Control as ArkPart,
                {
                  class: variantSlots.control(),
                },
                () => slots.default?.(),
              ),
              h(PinInputPrimitive.HiddenInput as ArkPart),
            ],
          ),
      );
    };
  },
});

export const InputOTPSlot = defineComponent({
  inheritAttrs: false,
  name: "InputOTP.Slot",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    size: {
      default: undefined,
      type: String as PropType<InputProps["size"]>,
    },
    variant: {
      default: undefined,
      type: String as PropType<FormControlVariant | undefined>,
    },
  },
  setup(props, { attrs }) {
    const styles = useInputOTPStyles();
    const optionsRef = useInputOTPOptionsRef();
    const surfaceVariant = useFormControlSurface();

    // Render a plain input (not Field.Input) so each slot keeps its own pin-input id
    // instead of every slot inheriting the surrounding Field's id.
    return () => {
      const ctx = unref(optionsRef);
      const size = props.size ?? ctx.size ?? "md";
      const variant = props.variant ?? ctx.variant ?? "primary";

      return h(PinInputPrimitive.Input as ArkPart, {
        ...(attrs as object),
        class: inputRootRecipe({
          class: styles.slots.input({ class: cn(props.class) }),
          size,
          surfaceVariant,
          variant,
        }),
        "data-size": size,
        "data-variant": variant,
      });
    };
  },
});

export const InputOTPSeparator = withContext(ark.hr, {
  name: "Separator",
});

export const InputOTP = Object.assign(InputOTPRoot, {
  Separator: InputOTPSeparator,
  Slot: InputOTPSlot,
});
