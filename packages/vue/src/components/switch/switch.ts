import { Switch as SwitchPrimitive } from "@ark-ui/vue/switch";
import { type SwitchRecipeSlot, switchRecipe } from "@pisagor/recipes/switch";
import { defineComponent, h, type PropType } from "vue";
import type { VariantClassNames } from "../../internal/types";

type FormControlVariant = "primary" | "secondary";

type SwitchClassNames = VariantClassNames<SwitchRecipeSlot>;

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface SwitchProps {
  /**
   * Style recipe. Defaults to `switchRecipe` from `@pisagor/recipes/switch`.
   *
   * @defaultValue switchRecipe
   */
  recipe?: typeof switchRecipe;
  class?: unknown;
}
// #endregion

// #region Component
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
    recipe: {
      default: switchRecipe,
      type: Function as PropType<typeof switchRecipe>,
    },
    variant: { default: undefined, type: String as PropType<FormControlVariant> },
  },
  setup(props, { attrs, emit }) {
    return () => {
      const resolved = {
        surfaceVariant: undefined,
        variant: props.variant ?? ("primary" as FormControlVariant),
      };
      const shellArgs = { variant: resolved.variant };
      const controlShellProps = { "data-variant": resolved.variant };
      const slots_ = props.recipe({ ...shellArgs });

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
