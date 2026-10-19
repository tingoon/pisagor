import type { StatusRootContract } from "@pisagor/contracts";
import { statusRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import type { ClassValue } from "../internal";

// #region Types
export interface StatusProps extends StatusRootContract {
  class?: unknown;
}
// #endregion

// #region Component
export const Status = defineComponent({
  inheritAttrs: false,
  name: "PisagorStatus",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    recipe: {
      default: statusRecipe,
      type: Function as PropType<typeof statusRecipe>,
    },
    size: { default: undefined, type: String as PropType<StatusProps["size"]> },
    variant: {
      default: undefined,
      type: String as PropType<StatusProps["variant"]>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        "span",
        {
          ...attrs,
          class: cn(
            props.recipe({ size: props.size, variant: props.variant }),
            props.class,
          ),
          "data-part": "indicator",
          "data-scope": "status",
          "data-size": props.size,
        },
        slots,
      );
  },
});
// #endregion
