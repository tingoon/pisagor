import { Checkbox as CheckboxPrimitive } from "@ark-ui/vue/checkbox";
import { PhCheck, PhMinus } from "@phosphor-icons/vue";
import {
  checkbox2Variants,
  checkboxGroupVariants,
  checkboxIndicatorVariants,
} from "@pisagor/styles/ui/checkbox";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import {
  type FormControlVariant,
  formControlShellProps,
  formControlToggleVariants,
  shellVariantArgs,
} from "../../internal/form-control/form-control-variants";
import { useFormControlVariant } from "../../internal/form-control/use-form-control-variant";
import type { WithTestId } from "../../internal/types";

type ArkPart = Parameters<typeof h>[0];

export interface CheckboxProps extends WithTestId {
  /** Visual shell variant. When omitted, resolves from the nearest `Surface` context. */
  variant?: FormControlVariant;
}

// #region Components
export const CheckboxGroup = defineComponent({
  emits: {
    valueChange: (_value: string[]) => true,
  },
  inheritAttrs: false,
  name: "CheckboxGroup",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, emit, slots }) {
    return () =>
      h(
        CheckboxPrimitive.Group as ArkPart,
        {
          ...attrs,
          class: cn(checkboxGroupVariants(), props.class),
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
    tabIndex: { default: undefined, type: Number },
    testId: String,
    variant: { default: undefined, type: String as PropType<FormControlVariant> },
  },
  setup(props, { attrs, emit }) {
    return () => {
      const resolved = useFormControlVariant(props.variant);
      const shellArgs = shellVariantArgs(resolved);
      const controlProps = formControlShellProps(resolved);

      return h(
        CheckboxPrimitive.Root as ArkPart,
        {
          ...attrs,
          ...controlProps,
          class: cn(
            formControlToggleVariants({ size: "md", ...shellArgs }),
            checkbox2Variants(),
            props.class,
          ),
          "data-testid": props.testId,
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
                class: checkboxIndicatorVariants(),
              },
              () => h(PhCheck),
            ),
            h(
              CheckboxPrimitive.Indicator as ArkPart,
              {
                class: checkboxIndicatorVariants(),
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

export const checkboxVariants = formControlToggleVariants;
// #endregion
