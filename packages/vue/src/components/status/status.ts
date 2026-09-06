import { ark } from "@ark-ui/vue/factory";
import { type StatusVariantProps, statusRecipe } from "@pisagor/recipes/status";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";

// #region Types
export interface StatusProps extends StatusVariantProps {
  /**
   * Style recipe. Defaults to `statusRecipe` from `@pisagor/recipes/status`.
   *
   * @defaultValue statusRecipe
   */
  recipe?: typeof statusRecipe;
  class?: unknown;
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Component
export const Status = defineComponent({
  inheritAttrs: false,
  name: "PisagorStatus",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    recipe: {
      default: statusRecipe,
      type: Function as PropType<typeof statusRecipe>,
    },
    size: { default: undefined, type: String as PropType<StatusProps["size"]> },
    variant: { default: undefined, type: String as PropType<StatusProps["variant"]> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.span as ArkPart,
        {
          ...attrs,
          class: cn(props.recipe({ size: props.size, variant: props.variant }), props.class),
          "data-part": "indicator",
          "data-scope": "status",
          "data-size": props.size,
        },
        slots,
      );
  },
});
// #endregion
