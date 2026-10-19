import {
  PinInput as PinInputPrimitive,
  type PinInputValueChangeDetails,
} from "@ark-ui/vue";
import type {
  InputOtpContract,
  InputOtpRootContract,
} from "@pisagor/contracts";
import { inputOtpRecipe, inputRootRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import {
  computed,
  defineComponent,
  Fragment,
  h,
  type PropType,
  unref,
} from "vue";
import {
  type ClassValue,
  createContext,
  createSlotRecipeContext,
} from "../internal";
import type { InputProps } from "./input";
import { useFormControlSurface } from "./surface/use-form-control-surface";

type FormControlVariant = "primary" | "secondary";
type ArkPart = Parameters<typeof h>[0];

// #region Context
const { useStyles, withContext, withProvider } = createSlotRecipeContext({
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

// #region Types
export interface InputOTPRootProps extends InputOtpRootContract {
  defaultValue?: string[];
  /** Called with the slot values when they change. */
  onValueChange?: (value: string[]) => void;
  otp?: boolean;
  placeholder?: string;
  value?: string[];
}

export interface InputOTPProps extends InputOTPRootProps, InputOtpContract {
  /** Insert a separator after every `groupSize` slots. */
  groupSize?: number;
  /**
   * Number of input slots.
   *
   * @defaultValue 6
   */
  length?: number;
}

export type InputOTPInputProps = Pick<InputOtpRootContract, "size" | "variant">;

export type {
  PinInputControlProps as InputOTPControlProps,
  PinInputLabelProps as InputOTPLabelProps,
} from "@ark-ui/vue";
// #endregion

// #region Parts
const RootBase = withProvider(PinInputPrimitive.Root, {
  name: "Root",
  slot: "base",
});

/** Root; renders the hidden form input and shares `size` / `variant`. */
export const InputOTPRoot = defineComponent({
  inheritAttrs: false,
  name: "InputOTP.Root",
  props: {
    onValueChange: {
      default: undefined,
      type: Function as PropType<InputOTPRootProps["onValueChange"]>,
    },
    otp: { default: true, type: Boolean },
    placeholder: { default: undefined, type: String },
    size: {
      default: undefined,
      type: String as PropType<InputOTPRootProps["size"]>,
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
    provideInputOTPOptions(
      computed(() => ({ size: props.size, variant: props.variant })),
    );

    return () =>
      h(
        RootBase as ArkPart,
        {
          ...attrs,
          modelValue: props.value,
          onValueChange: props.onValueChange
            ? (details: PinInputValueChangeDetails) =>
                props.onValueChange?.(details.value)
            : undefined,
          otp: props.otp,
          placeholder: props.placeholder ?? "",
          size: props.size,
        },
        () => [slots.default?.(), h(PinInputPrimitive.HiddenInput as ArkPart)],
      );
  },
});

export const InputOTPLabel = withContext(PinInputPrimitive.Label, {
  name: "Label",
});

export const InputOTPControl = withContext(PinInputPrimitive.Control, {
  name: "Control",
});

/** One character slot, styled like a form input. */
export const InputOTPInput = defineComponent({
  inheritAttrs: false,
  name: "InputOTP.Input",
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
    const styles = useStyles();
    const optionsRef = useInputOTPOptionsRef();
    const surfaceVariant = useFormControlSurface();

    // Plain input (not Field.Input) so each slot keeps its own pin-input id.
    return () => {
      const options = unref(optionsRef);
      const size = props.size ?? options.size ?? "md";
      const variant = props.variant ?? options.variant ?? "primary";

      return h(PinInputPrimitive.Input as ArkPart, {
        ...attrs,
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

export const InputOTPSeparator = withContext("hr", { name: "Separator" });
// #endregion

// #region Shorthand
export const InputOTPShorthand = defineComponent({
  inheritAttrs: false,
  name: "InputOTP",
  props: {
    classNames: {
      default: undefined,
      type: Object as PropType<InputOTPProps["classNames"]>,
    },
    groupSize: { default: undefined, type: Number },
    length: { default: 6, type: Number },
  },
  setup(props, { attrs }) {
    return () => {
      const classNames = props.classNames;

      return h(InputOTPRoot as ArkPart, { ...attrs }, () =>
        h(InputOTPControl, { class: classNames?.control }, () =>
          Array.from({ length: props.length }, (_, index) =>
            h(Fragment, { key: index }, [
              props.groupSize !== undefined &&
              index > 0 &&
              index % props.groupSize === 0
                ? h(InputOTPSeparator, { class: classNames?.separator })
                : null,
              h(InputOTPInput as ArkPart, { class: classNames?.input, index }),
            ]),
          ),
        ),
      );
    };
  },
});
// #endregion

export const InputOTP = Object.assign(InputOTPShorthand, {
  Control: InputOTPControl,
  Input: InputOTPInput,
  Label: InputOTPLabel,
  Root: InputOTPRoot,
  Separator: InputOTPSeparator,
});
