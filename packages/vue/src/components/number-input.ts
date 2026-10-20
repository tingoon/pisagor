import { NumberInput as NumberInputPrimitive } from "@ark-ui/vue";
import type { NumberInputRootProps as NumberInputRootPrimitiveProps } from "@ark-ui/vue";
import { PhMinus, PhPlus } from "@phosphor-icons/vue";
import type {
  NumberInputContract,
  NumberInputRootContract,
} from "@pisagor/contracts";
import { numberInputRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { type Component, defineComponent, h, type PropType } from "vue";
import { type ClassValue, createSlotRecipeContext } from "../internal";
import { contentProp, slotOrProp } from "../internal/shorthand";
import { Button } from "./button";
import { Field } from "./field";
import { Input as TextInput } from "./input";
import { useLocale } from "./provider/context";

// #region Context
const { withContext, withProvider, useStyles } = createSlotRecipeContext({
  name: "NumberInput",
  recipe: numberInputRecipe,
});
// #endregion

// #region Types
type NumberInputRootBaseProps = NumberInputRootPrimitiveProps &
  NumberInputRootContract;

export type NumberInputRootProps = Omit<
  NumberInputRootBaseProps,
  "onValueChange"
> & {
  /** Called with the numeric value when the input changes. */
  onValueChange?: (value: number) => void;
};

export interface NumberInputProps
  extends NumberInputRootProps, NumberInputContract {
  /**
   * Whether to show a clear button when the input has a value.
   *
   * @defaultValue false
   */
  clearable?: boolean;
  /** Props forwarded to the text input. */
  inputProps?: Record<string, unknown>;
  /** Scrubbable label rendered above the control; also the `label` slot. */
  label?: unknown;
  /** Placeholder text for the input. */
  placeholder?: string;
  /**
   * Whether to render the decrement and increment buttons.
   *
   * @defaultValue true
   */
  showTriggers?: boolean;
}

export type {
  NumberInputDecrementTriggerProps,
  NumberInputIncrementTriggerProps,
  NumberInputInputProps,
  NumberInputLabelProps,
  NumberInputScrubberProps,
  NumberInputValueTextProps,
} from "@ark-ui/vue";
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Parts
const RootBase = withProvider(NumberInputPrimitive.Root, { name: "Root" });

/** Root; `onValueChange` receives the numeric value. */
const Root = defineComponent({
  inheritAttrs: false,
  name: "NumberInput.Root",
  props: {
    onValueChange: {
      default: undefined,
      type: Function as PropType<NumberInputRootProps["onValueChange"]>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        RootBase as ArkPart,
        {
          ...attrs,
          onValueChange: props.onValueChange
            ? (details: { valueAsNumber: number }) =>
                props.onValueChange?.(details.valueAsNumber)
            : undefined,
        },
        slots,
      );
  },
});

const Label = withContext(NumberInputPrimitive.Label, { name: "Label" });

const Scrubber = withContext(NumberInputPrimitive.Scrubber, {
  name: "Scrubber",
});

const Control = withContext(NumberInputPrimitive.Control, {
  name: "Control",
});

// Cast: the Ark input props union is too complex for `withContext` to infer.
const Input = withContext(NumberInputPrimitive.Input as Component, {
  name: "Input",
});

const ValueText = withContext(NumberInputPrimitive.ValueText, {
  name: "ValueText",
});

const DecrementTriggerBase = withContext(
  NumberInputPrimitive.DecrementTrigger,
  { name: "DecrementTrigger" },
);

/** Decrement trigger with a localized default `aria-label`. */
const DecrementTrigger = defineComponent({
  inheritAttrs: false,
  name: "NumberInput.DecrementTrigger",
  setup(_, { attrs, slots }) {
    const { m } = useLocale();

    return () =>
      h(
        DecrementTriggerBase as ArkPart,
        { "aria-label": m("numberInput.decrement"), ...attrs },
        slots,
      );
  },
});

const IncrementTriggerBase = withContext(
  NumberInputPrimitive.IncrementTrigger,
  { name: "IncrementTrigger" },
);

/** Increment trigger with a localized default `aria-label`. */
const IncrementTrigger = defineComponent({
  inheritAttrs: false,
  name: "NumberInput.IncrementTrigger",
  setup(_, { attrs, slots }) {
    const { m } = useLocale();

    return () =>
      h(
        IncrementTriggerBase as ArkPart,
        { "aria-label": m("numberInput.increment"), ...attrs },
        slots,
      );
  },
});

/** Clears the value; renders nothing while empty. Not an Ark part. */
const ClearTrigger = defineComponent({
  name: "NumberInput.ClearTrigger",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props) {
    const styles = useStyles();

    return () =>
      h(NumberInputPrimitive.Context as ArkPart, null, {
        default: (api: {
          clearValue: () => void;
          value: string | undefined | null;
        }) => {
          const hasValue =
            api.value !== undefined &&
            api.value !== null &&
            String(api.value).length > 0;

          if (!hasValue) {
            return null;
          }

          return h(TextInput.ClearButton, {
            class: styles.slots.clearTrigger({ class: cn(props.class) }),
            onClear: () => api.clearValue(),
          });
        },
      });
  },
});
// #endregion

// #region Shorthand
export const NumberInputShorthand = defineComponent({
  inheritAttrs: false,
  name: "NumberInput",
  props: {
    classNames: {
      default: undefined,
      type: Object as PropType<NumberInputProps["classNames"]>,
    },
    clearable: { default: false, type: Boolean },
    inputProps: {
      default: undefined,
      type: Object as PropType<NumberInputProps["inputProps"]>,
    },
    label: contentProp,
    placeholder: { default: undefined, type: String },
    showTriggers: { default: true, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const classNames = props.classNames;
      const label = slotOrProp(slots.label, props.label as never);

      return h(Root as ArkPart, { ...attrs }, () => [
        label
          ? h(Scrubber, { asChild: true, class: classNames?.scrubber }, () =>
              h(Label, { asChild: true }, () => h(Field.Label, null, label)),
            )
          : null,
        h(
          Control,
          {
            class: classNames?.control,
            "data-clearable": props.clearable || undefined,
          },
          () => [
            props.showTriggers
              ? h(
                  DecrementTrigger,
                  { asChild: true, class: classNames?.decrementTrigger },
                  () =>
                    h(Button, { variant: "ghost" }, () =>
                      h(PhMinus, { "aria-hidden": true }),
                    ),
                )
              : null,
            h(Input, { asChild: true, class: classNames?.input }, () =>
              h(TextInput as ArkPart, {
                ...props.inputProps,
                placeholder: props.placeholder,
              }),
            ),
            props.clearable
              ? h(ClearTrigger, { class: classNames?.clearTrigger })
              : null,
            props.showTriggers
              ? h(
                  IncrementTrigger,
                  { asChild: true, class: classNames?.incrementTrigger },
                  () =>
                    h(Button, { variant: "ghost" }, () =>
                      h(PhPlus, { "aria-hidden": true }),
                    ),
                )
              : null,
          ],
        ),
      ]);
    };
  },
});
// #endregion

export const NumberInput = Object.assign(NumberInputShorthand, {
  ClearTrigger,
  Control,
  DecrementTrigger,
  IncrementTrigger,
  Input,
  Label,
  Root,
  Scrubber,
  ValueText,
});
