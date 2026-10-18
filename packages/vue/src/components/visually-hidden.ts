import type { VisuallyHiddenRootContract } from "@pisagor/props";
import { visuallyHiddenRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import type { ClassValue } from "../internal";

// #region Types
export interface VisuallyHiddenProps extends VisuallyHiddenRootContract {
  class?: unknown;
}
// #endregion

// #region Component
/** Hides content visually while keeping it available to assistive technology. */
export const VisuallyHidden = defineComponent({
  inheritAttrs: false,
  name: "VisuallyHidden",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    recipe: {
      default: visuallyHiddenRecipe,
      type: Function as PropType<typeof visuallyHiddenRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        "span",
        {
          ...attrs,
          class: cn(props.recipe(), props.class),
          "data-part": "root",
          "data-scope": "visually-hidden",
        },
        slots,
      );
  },
});
// #endregion
