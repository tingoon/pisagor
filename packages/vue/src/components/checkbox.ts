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
  CheckboxGroupRootContract,
  CheckboxRootContract,
} from "@pisagor/contracts";
import { checkboxGroupRecipe, checkboxRecipe } from "@pisagor/recipes";
import { defineComponent, h, type PropType } from "vue";
import { type ClassValue, createSlotRecipeContext } from "../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
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

export type CheckboxProps = CheckboxRootProps;
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

const Control = defineComponent({
  inheritAttrs: false,
  name: "Checkbox.Control",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    size: {
      default: undefined,
      type: String as PropType<CheckboxRootContract["size"]>,
    },
    variant: {
      default: undefined,
      type: String as PropType<CheckboxRootContract["variant"]>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ControlBase,
        {
          ...attrs,
          class: props.class as string | undefined,
          "data-variant": props.variant ?? "primary",
        },
        () =>
          slots.default?.() ?? [
            h(Indicator, null, () => h(PhCheck)),
            h(Indicator, { indeterminate: true }, () => h(PhMinus)),
          ],
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

// #region Closed
const CheckboxShorthand = defineComponent({
  inheritAttrs: false,
  name: "Checkbox",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    tabIndex: { default: undefined, type: Number },
  },
  setup(props, { attrs }) {
    return () =>
      h(
        Root,
        {
          ...attrs,
          class: props.class as string | undefined,
        },
        () => [
          h(Control),
          h(CheckboxPrimitive.HiddenInput as ArkPart, {
            tabIndex: props.tabIndex,
          }),
        ],
      );
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
