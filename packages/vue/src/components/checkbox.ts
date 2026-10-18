import { Checkbox as CheckboxPrimitive } from "@ark-ui/vue";
import { PhCheck, PhMinus } from "@phosphor-icons/vue";
import type {
  CheckboxGroupProps as BaseCheckboxGroupProps,
  CheckboxProps as BaseCheckboxProps,
} from "@pisagor/props";
import {
  checkboxGroupRecipe,
  checkboxRecipe,
  formControlToggleRecipe,
} from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import type { ClassValue } from "../internal";
import { useFormControlSurface } from "./surface/use-form-control-surface";

type FormControlVariant = "primary" | "secondary";

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface CheckboxGroupProps extends BaseCheckboxGroupProps {
  class?: unknown;
}

export interface CheckboxProps extends BaseCheckboxProps {
  class?: unknown;
  /** Visual shell variant. Defaults to `primary`. */
  variant?: FormControlVariant;
}
// #endregion

// #region Parts
export const CheckboxGroup = defineComponent({
  emits: {
    valueChange: (_value: string[]) => true,
  },
  inheritAttrs: false,
  name: "CheckboxGroup",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    recipe: {
      default: checkboxGroupRecipe,
      type: Function as PropType<typeof checkboxGroupRecipe>,
    },
  },
  setup(props, { attrs, emit, slots }) {
    return () =>
      h(
        CheckboxPrimitive.Group as ArkPart,
        {
          ...attrs,
          class: cn(props.recipe(), props.class),
          onValueChange: (value: string[]) => emit("valueChange", value),
        },
        slots,
      );
  },
});

export const CheckboxRoot = defineComponent({
  emits: {
    checkedChange: (_details: { checked: boolean | "indeterminate" }) => true,
    valueChange: (_value: boolean) => true,
  },
  inheritAttrs: false,
  name: "CheckboxRoot",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    recipe: {
      default: checkboxRecipe,
      type: Function as PropType<typeof checkboxRecipe>,
    },
    size: {
      default: "md",
      type: String as PropType<"sm" | "md" | "lg">,
    },
    tabIndex: { default: undefined, type: Number },
    variant: {
      default: undefined,
      type: String as PropType<FormControlVariant>,
    },
  },
  setup(props, { attrs, emit }) {
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
      const slots = props.recipe();

      return h(
        CheckboxPrimitive.Root as ArkPart,
        {
          ...attrs,
          ...controlProps,
          class: cn(
            formControlToggleRecipe({ size: props.size, ...shellArgs }),
            slots.base({ class: props.class }),
          ),
          onCheckedChange: (details: {
            checked: boolean | "indeterminate";
          }) => {
            emit("checkedChange", details);
            emit("valueChange", details.checked === true);
          },
          role: "checkbox",
        },
        () => [
          h(CheckboxPrimitive.Control as ArkPart, {}, () => [
            h(
              CheckboxPrimitive.Indicator as ArkPart,
              {
                class: slots.indicator(),
              },
              () => h(PhCheck),
            ),
            h(
              CheckboxPrimitive.Indicator as ArkPart,
              {
                class: slots.indicator(),
                indeterminate: true,
              },
              () => h(PhMinus),
            ),
          ]),
          h(CheckboxPrimitive.HiddenInput as ArkPart, {
            tabIndex: props.tabIndex,
          }),
        ],
      );
    };
  },
});

const classProp = {
  default: undefined,
  type: [String, Object, Array] as PropType<ClassValue>,
};

const CheckboxIndicator = defineComponent({
  inheritAttrs: false,
  name: "CheckboxIndicator",
  props: {
    class: classProp,
    recipe: {
      default: checkboxRecipe,
      type: Function as PropType<typeof checkboxRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        CheckboxPrimitive.Indicator as ArkPart,
        { ...attrs, class: props.recipe().indicator({ class: props.class }) },
        slots,
      );
  },
});

/** Compound root: lays out `Checkbox.Control` and `Checkbox.Label`. */
export const CheckboxCompoundRoot = defineComponent({
  inheritAttrs: false,
  name: "CheckboxCompoundRoot",
  props: {
    class: classProp,
    recipe: {
      default: checkboxRecipe,
      type: Function as PropType<typeof checkboxRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        CheckboxPrimitive.Root as ArkPart,
        { ...attrs, class: props.recipe().root({ class: props.class }) },
        slots,
      );
  },
});

/** The styled box; renders check / minus indicators when empty. */
export const CheckboxControl = defineComponent({
  inheritAttrs: false,
  name: "CheckboxControl",
  props: {
    class: classProp,
    recipe: {
      default: checkboxRecipe,
      type: Function as PropType<typeof checkboxRecipe>,
    },
    size: {
      default: "md",
      type: String as PropType<"sm" | "md" | "lg">,
    },
    variant: {
      default: undefined,
      type: String as PropType<FormControlVariant>,
    },
  },
  setup(props, { attrs, slots }) {
    const surfaceVariant = useFormControlSurface();

    return () => {
      const variant = props.variant ?? "primary";
      const styles = props.recipe();

      return h(
        CheckboxPrimitive.Control as ArkPart,
        {
          ...attrs,
          class: cn(
            formControlToggleRecipe({
              size: props.size,
              surfaceVariant,
              variant,
            }),
            styles.base(),
            styles.control({ class: props.class }),
          ),
          "data-variant": variant,
        },
        () =>
          slots.default?.() ?? [
            h(CheckboxIndicator, { recipe: props.recipe }, () => h(PhCheck)),
            h(
              CheckboxIndicator,
              { indeterminate: true, recipe: props.recipe },
              () => h(PhMinus),
            ),
          ],
      );
    };
  },
});

export const CheckboxLabel = defineComponent({
  inheritAttrs: false,
  name: "CheckboxLabel",
  props: {
    class: classProp,
    recipe: {
      default: checkboxRecipe,
      type: Function as PropType<typeof checkboxRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        CheckboxPrimitive.Label as ArkPart,
        { ...attrs, class: props.recipe().label({ class: props.class }) },
        slots,
      );
  },
});
// #endregion

export const Checkbox = Object.assign(CheckboxRoot, {
  Control: CheckboxControl,
  Group: CheckboxGroup,
  HiddenInput: CheckboxPrimitive.HiddenInput,
  Indicator: CheckboxIndicator,
  Label: CheckboxLabel,
  Root: CheckboxCompoundRoot,
});
