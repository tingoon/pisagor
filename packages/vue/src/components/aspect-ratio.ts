import { ark } from "@ark-ui/vue/factory";
import type { AspectRatioProps as BaseAspectRatioProps } from "@pisagor/props";
import { aspectRatioRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import type { ClassValue } from "../internal/types";

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface AspectRatioProps extends BaseAspectRatioProps {
  class?: unknown;
  /**
   * Width divided by height, e.g. `16 / 9`. Overrides the `--ratio` CSS variable.
   *
   * @defaultValue 1
   */
  ratio?: number;
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
    ratio: { default: undefined, type: Number },
    recipe: {
      default: aspectRatioRecipe,
      type: Function as PropType<typeof aspectRatioRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.div as ArkPart,
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
