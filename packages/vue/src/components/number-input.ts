import { NumberInput as NumberInputPrimitive } from "@ark-ui/vue";
import type {
  NumberInputControlProps as NumberInputControlPrimitiveProps,
  NumberInputDecrementTriggerProps as NumberInputDecrementTriggerPrimitiveProps,
  NumberInputIncrementTriggerProps as NumberInputIncrementTriggerPrimitiveProps,
  NumberInputRootProps as NumberInputRootPrimitiveProps,
  NumberInputScrubberProps,
} from "@ark-ui/vue";
import { PhMinus, PhPlus } from "@phosphor-icons/vue";
import type { NumberInputRootContract } from "@pisagor/contracts";
import { numberInputRecipe } from "@pisagor/recipes";
import { defineComponent, h, type PropType } from "vue";
import { type ClassValue, createSlotRecipeContext } from "../internal";
import { Button } from "./button";
import { Field } from "./field";
import { Input, type InputProps } from "./input";
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

type NumberInputRootProps = Omit<NumberInputRootBaseProps, "onValueChange"> & {
  /** Called with the numeric value when the input changes. */
  onValueChange?: (value: number) => void;
};

export interface NumberInputProps extends NumberInputRootProps {
  /**
   * Whether to show a clear button when the input has a value.
   *
   * @defaultValue false
   */
  clearable?: boolean;
  /** Placeholder text for the auto-rendered input */
  placeholder?: string;
}

type NumberInputControlProps = NumberInputControlPrimitiveProps & {
  clearable?: boolean;
};

type NumberInputDecrementTriggerProps =
  NumberInputDecrementTriggerPrimitiveProps;

type NumberInputIncrementTriggerProps =
  NumberInputIncrementTriggerPrimitiveProps;

// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Parts
const RootBase = withProvider<NumberInputRootBaseProps>(
  NumberInputPrimitive.Root,
  { name: "Root" },
);

const Root = defineComponent({
  inheritAttrs: false,
  name: "NumberInput",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    clearable: { default: false, type: Boolean },
    onValueChange: {
      default: undefined,
      type: Function as PropType<NumberInputProps["onValueChange"]>,
    },
    placeholder: { default: undefined, type: String },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        RootBase,
        {
          ...attrs,
          class: props.class as string | undefined,
          onValueChange: props.onValueChange
            ? (details: { valueAsNumber: number }) =>
                props.onValueChange?.(details.valueAsNumber)
            : undefined,
        },
        () =>
          slots.default?.() ??
          h(Control, { clearable: props.clearable }, () => [
            h(DecrementTrigger),
            h(InputPart, { placeholder: props.placeholder }),
            props.clearable ? h(ClearTrigger) : null,
            h(IncrementTrigger),
          ]),
      );
  },
});

const ControlBase = withContext<NumberInputControlProps>(
  NumberInputPrimitive.Control,
  {
    name: "Control",
  },
);

const Control = defineComponent({
  inheritAttrs: false,
  name: "NumberInput.Control",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    clearable: { default: false, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ControlBase,
        {
          ...attrs,
          class: props.class as string | undefined,
          "data-clearable": props.clearable || undefined,
        },
        slots,
      );
  },
});

const ClearTrigger = defineComponent({
  name: "NumberInput.ClearTrigger",
  setup() {
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

          return h(Input.ClearButton, {
            class: styles.slots.clearTrigger(),
            onClear: () => api.clearValue(),
          });
        },
      });
  },
});

const DecrementTriggerBase = withContext<NumberInputDecrementTriggerProps>(
  NumberInputPrimitive.DecrementTrigger,
  { name: "DecrementTrigger" },
);

const DecrementTrigger = defineComponent({
  inheritAttrs: false,
  name: "NumberInput.DecrementTrigger",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs }) {
    const { m } = useLocale();

    return () =>
      h(
        DecrementTriggerBase,
        {
          ...attrs,
          asChild: true,
          class: props.class as string | undefined,
        },
        () =>
          h(
            Button,
            {
              "aria-label": m("numberInput.decrement"),
              variant: "ghost",
            },
            () => h(PhMinus, { "aria-hidden": true }),
          ),
      );
  },
});

const IncrementTriggerBase = withContext<NumberInputIncrementTriggerProps>(
  NumberInputPrimitive.IncrementTrigger,
  { name: "IncrementTrigger" },
);

const IncrementTrigger = defineComponent({
  inheritAttrs: false,
  name: "NumberInput.IncrementTrigger",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs }) {
    const { m } = useLocale();

    return () =>
      h(
        IncrementTriggerBase,
        {
          ...attrs,
          asChild: true,
          class: props.class as string | undefined,
        },
        () =>
          h(
            Button,
            {
              "aria-label": m("numberInput.increment"),
              variant: "ghost",
            },
            () => h(PhPlus, { "aria-hidden": true }),
          ),
      );
  },
});

const InputPart = defineComponent({
  inheritAttrs: false,
  name: "NumberInput.Input",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    classNames: {
      default: undefined,
      type: Object as PropType<InputProps["classNames"]>,
    },
    placeholder: { default: undefined, type: String },
    size: {
      default: undefined,
      type: String as PropType<InputProps["size"]>,
    },
    variant: {
      default: undefined,
      type: String as PropType<InputProps["variant"]>,
    },
  },
  setup(props, { attrs }) {
    const styles = useStyles();

    return () =>
      h(
        NumberInputPrimitive.Input as ArkPart,
        { ...attrs, asChild: true },
        () =>
          h(Input, {
            class: styles.slots.input({ class: props.class }),
            classNames: props.classNames,
            placeholder: props.placeholder,
            size: props.size,
            variant: props.variant,
          }),
      );
  },
});

const ScrubberBase = withContext<NumberInputScrubberProps>(
  NumberInputPrimitive.Scrubber,
  {
    name: "Scrubber",
  },
);

const Scrubber = defineComponent({
  inheritAttrs: false,
  name: "NumberInput.Scrubber",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ScrubberBase,
        {
          ...attrs,
          asChild: true,
          class: props.class as string | undefined,
        },
        () =>
          h(NumberInputPrimitive.Label as ArkPart, { asChild: true }, () =>
            h(Field.Label, null, slots.default),
          ),
      );
  },
});
// #endregion

export type { NumberInputScrubberProps } from "@ark-ui/vue";

export const NumberInput = Object.assign(Root, {
  ClearTrigger,
  Control,
  DecrementTrigger,
  IncrementTrigger,
  Input: InputPart,
  Scrubber,
});
