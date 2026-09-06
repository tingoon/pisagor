import { ark } from "@ark-ui/vue/factory";
import { aspectRatioRecipe } from "@pisagor/recipes/aspect-ratio";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface AspectRatioProps {
  /**
   * Style recipe. Defaults to `aspectRatioRecipe` from `@pisagor/recipes/aspect-ratio`.
   *
   * @defaultValue aspectRatioRecipe
   */
  recipe?: typeof aspectRatioRecipe;
  class?: unknown;
}
// #endregion

// #region Component
export const AspectRatio = defineComponent({
  inheritAttrs: false,
  name: "AspectRatio",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
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
        },
        slots,
      );
  },
});
// #endregion
