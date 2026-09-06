import { Checkbox as CheckboxPrimitive } from "@ark-ui/vue/checkbox";
import { PhCheck, PhMinus } from "@phosphor-icons/vue";
import { checkboxGroupRecipe, checkboxRecipe } from "@pisagor/recipes/checkbox";
import { formControlToggleRecipe } from "@pisagor/recipes/form-control";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";

type FormControlVariant = "primary" | "secondary";

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface CheckboxGroupProps {
  /**
   * Style recipe. Defaults to `checkboxGroupRecipe` from `@pisagor/recipes/checkbox`.
   *
   * @defaultValue checkboxGroupRecipe
   */
  recipe?: typeof checkboxGroupRecipe;
  class?: unknown;
}

export interface CheckboxProps {
  /** Visual shell variant. Defaults to `primary`. */
  variant?: FormControlVariant;
  /**
   * Style recipe. Defaults to `checkboxRecipe` from `@pisagor/recipes/checkbox`.
   *
   * @defaultValue checkboxRecipe
   */
  recipe?: typeof checkboxRecipe;
  class?: unknown;
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
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
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
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    recipe: {
      default: checkboxRecipe,
      type: Function as PropType<typeof checkboxRecipe>,
    },
    tabIndex: { default: undefined, type: Number },
    variant: { default: undefined, type: String as PropType<FormControlVariant> },
  },
  setup(props, { attrs, emit }) {
    return () => {
      const resolved = {
        surfaceVariant: undefined,
        variant: props.variant ?? ("primary" as FormControlVariant),
      };
      const shellArgs = { variant: resolved.variant };
      const controlProps = { "data-variant": resolved.variant };
      const slots = props.recipe();

      return h(
        CheckboxPrimitive.Root as ArkPart,
        {
          ...attrs,
          ...controlProps,
          class: cn(
            formControlToggleRecipe({ size: "md", ...shellArgs }),
            slots.base({ class: props.class }),
          ),
          onCheckedChange: (details: { checked: boolean | "indeterminate" }) => {
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
          h(CheckboxPrimitive.HiddenInput as ArkPart, { tabIndex: props.tabIndex }),
        ],
      );
    };
  },
});
// #endregion
