import { Highlight as HighlightPrimitive } from "@ark-ui/vue/highlight";
import { highlightRecipe } from "@pisagor/recipes/highlight";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface HighlightProps {
  /**
   * Style recipe. Defaults to `highlightRecipe` from `@pisagor/recipes/highlight`.
   *
   * @defaultValue highlightRecipe
   */
  recipe?: typeof highlightRecipe;
  class?: unknown;
}
// #endregion

// #region Component
export const Highlight = defineComponent({
  inheritAttrs: false,
  name: "PisagorHighlight",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    recipe: {
      default: highlightRecipe,
      type: Function as PropType<typeof highlightRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        HighlightPrimitive as ArkPart,
        {
          ...attrs,
          class: cn(props.recipe(), props.class),
        },
        slots.default?.(),
      );
  },
});
// #endregion
