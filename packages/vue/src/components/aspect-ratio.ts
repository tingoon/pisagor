import type {
  AspectRatioRootContract,
  AspectRatioContract,
} from "@pisagor/contracts";
import { aspectRatioRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import type { ClassValue } from "../internal";

// #region Types
export interface AspectRatioProps
  extends AspectRatioRootContract, AspectRatioContract {
  class?: unknown;
}
// #endregion

// #region Component
export const AspectRatio = defineComponent({
  inheritAttrs: false,
  name: "AspectRatio",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    ratio: { default: undefined, type: [Number, String] },
    recipe: {
      default: aspectRatioRecipe,
      type: Function as PropType<typeof aspectRatioRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        "div",
        {
          ...attrs,
          class: cn(props.recipe(), props.class),
          "data-part": "root",
          "data-scope": "aspect-ratio",
          style:
            props.ratio === undefined
              ? attrs.style
              : [{ "--ratio": props.ratio }, attrs.style],
        },
        slots,
      );
  },
});
// #endregion
