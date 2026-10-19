import { Checkbox as CheckboxPrimitive } from "@ark-ui/vue";
import type {
  CheckboxControlProps,
  CheckboxGroupProps as CheckboxGroupPrimitiveProps,
  CheckboxIndicatorProps,
  CheckboxLabelProps,
  CheckboxRootProps as CheckboxRootPrimitiveProps,
} from "@ark-ui/vue";
import { PhCheck, PhMinus } from "@phosphor-icons/vue";
import type {
  CheckboxContract,
  CheckboxGroupRootContract,
  CheckboxRootContract,
} from "@pisagor/contracts";
import { checkboxGroupRecipe, checkboxRecipe } from "@pisagor/recipes";
import { defineComponent, h, type PropType } from "vue";
import { type ClassValue, createSlotRecipeContext } from "../internal";
import { contentProp, slotOrProp } from "../internal/shorthand";

// #region Context
const { useStyles, withContext, withProvider } = createSlotRecipeContext({
  name: "Checkbox",
  recipe: checkboxRecipe,
});
// #endregion

// #region Types
export interface CheckboxGroupProps
  extends
    Omit<CheckboxGroupPrimitiveProps, "onValueChange">,
    CheckboxGroupRootContract {
  onValueChange?: (value: string[]) => void;
}

type CheckboxRootProps = CheckboxRootPrimitiveProps & CheckboxRootContract;

export interface CheckboxProps extends CheckboxRootProps, CheckboxContract {
  /** Visible label rendered next to the control; also the `label` slot. */
  label?: string;
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Parts
const Group = defineComponent({
  inheritAttrs: false,
  name: "Checkbox.Group",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    onValueChange: {
      default: undefined,
      type: Function as PropType<CheckboxGroupProps["onValueChange"]>,
    },
    recipe: {
      default: checkboxGroupRecipe,
      type: Function as PropType<typeof checkboxGroupRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        CheckboxPrimitive.Group as ArkPart,
        {
          ...attrs,
          class: props.recipe({ class: props.class }),
          onValueChange: props.onValueChange
            ? (details: { value: string[] }) =>
                props.onValueChange?.(details.value)
            : undefined,
        },
        slots,
      );
  },
});

const Root = withProvider<CheckboxRootProps>(CheckboxPrimitive.Root, {
  name: "Root",
  slot: "root",
});

const ControlBase = withContext<CheckboxControlProps>(
  CheckboxPrimitive.Control,
  {
    name: "Control",
    slot: "base",
  },
);

/**
 * Control; mirrors the root `variant` as `data-variant`. Render your own
 * indicators.
 */
const Control = defineComponent({
  inheritAttrs: false,
  name: "Checkbox.Control",
  setup(_, { attrs, slots }) {
    const styles = useStyles();

    return () =>
      h(
        ControlBase,
        {
          ...attrs,
          "data-variant":
            (styles.variants as CheckboxRootContract).variant ?? "primary",
        },
        slots,
      );
  },
});

const Indicator = withContext<CheckboxIndicatorProps>(
  CheckboxPrimitive.Indicator,
  {
    name: "Indicator",
  },
);

const Label = withContext<CheckboxLabelProps>(CheckboxPrimitive.Label, {
  name: "Label",
});
// #endregion

// #region Shorthand
const CheckboxShorthand = defineComponent({
  inheritAttrs: false,
  name: "Checkbox",
  props: {
    classNames: {
      default: undefined,
      type: Object as PropType<CheckboxProps["classNames"]>,
    },
    label: contentProp,
    tabIndex: { default: undefined, type: Number },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const classNames = props.classNames;
      const label = slotOrProp(slots.label, props.label);

      return h(Root, attrs, () => [
        h(Control, { class: classNames?.base }, () => [
          h(Indicator, { class: classNames?.indicator }, () => h(PhCheck)),
          h(
            Indicator,
            { class: classNames?.indicator, indeterminate: true },
            () => h(PhMinus),
          ),
        ]),
        label ? h(Label, { class: classNames?.label }, label) : null,
        h(CheckboxPrimitive.HiddenInput as ArkPart, {
          tabIndex: props.tabIndex,
        }),
      ]);
    };
  },
});
// #endregion

export type { CheckboxCheckedState, CheckboxRootProps } from "@ark-ui/vue";

export const Checkbox = Object.assign(CheckboxShorthand, {
  Control,
  Group,
  HiddenInput: CheckboxPrimitive.HiddenInput,
  Indicator,
  Label,
  Root,
});
