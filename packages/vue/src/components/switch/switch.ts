import { Switch as SwitchPrimitive } from "@ark-ui/vue/switch";
import { type SwitchSlots, switchVariants } from "@pisagor/styles/ui/switch";
import { defineComponent, h, type PropType } from "vue";
import {
  type FormControlVariant,
  formControlShellProps,
  shellVariantArgs,
} from "../../internal/form-control/form-control-variants";
import { useFormControlVariant } from "../../internal/form-control/use-form-control-variant";
import type { VariantClassNames } from "../../internal/types";

type SwitchClassNames = VariantClassNames<SwitchSlots>;

type ArkPart = Parameters<typeof h>[0];

// #region Part
export const Switch = defineComponent({
  emits: {
    checkedChange: (_details: { checked: boolean }) => true,
    valueChange: (_value: boolean) => true,
  },
  inheritAttrs: false,
  name: "PisagorSwitch",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    classNames: { default: undefined, type: Object as PropType<SwitchClassNames> },
    variant: { default: undefined, type: String as PropType<FormControlVariant> },
  },
  setup(props, { attrs, emit }) {
    return () => {
      const resolved = useFormControlVariant(props.variant);
      const shellArgs = shellVariantArgs(resolved);
      const controlShellProps = formControlShellProps(resolved);
      const slots_ = switchVariants({ ...shellArgs });

      return h(
        SwitchPrimitive.Root as ArkPart,
        {
          ...attrs,
          ...controlShellProps,
          class: slots_.base({ class: props.class }),
          onCheckedChange: (details: { checked: boolean }) => {
            emit("checkedChange", details);
            emit("valueChange", details.checked === true);
          },
        },
        () => [
          h(
            SwitchPrimitive.Control as ArkPart,
            {
              class: slots_.control({ class: props.classNames?.control }),
            },
            () =>
              h(SwitchPrimitive.Thumb as ArkPart, {
                class: slots_.thumb({ class: props.classNames?.thumb }),
              }),
          ),
          h(SwitchPrimitive.HiddenInput as ArkPart),
        ],
      );
    };
  },
});
// #endregion
