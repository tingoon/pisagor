import { ark } from "@ark-ui/vue/factory";
import { visuallyHiddenRecipe } from "@pisagor/recipes/visually-hidden";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";

// #region Types
export interface VisuallyHiddenProps {
  /**
   * Style recipe. Defaults to `visuallyHiddenRecipe` from `@pisagor/recipes/visually-hidden`.
   *
   * @defaultValue visuallyHiddenRecipe
   */
  recipe?: typeof visuallyHiddenRecipe;
  class?: unknown;
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Component
/**
 * Hides content visually while keeping it available to assistive technology.
 */
export const VisuallyHidden = defineComponent({
  inheritAttrs: false,
  name: "VisuallyHidden",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    recipe: {
      default: visuallyHiddenRecipe,
      type: Function as PropType<typeof visuallyHiddenRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.span as ArkPart,
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
