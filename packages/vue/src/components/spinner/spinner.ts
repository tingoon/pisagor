import { PhCircleNotch } from "@phosphor-icons/vue";
import { spinnerRecipe } from "@pisagor/recipes/spinner";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";

// #region Types
export interface SpinnerProps {
  /**
   * Style recipe. Defaults to `spinnerRecipe` from `@pisagor/recipes/spinner`.
   *
   * @defaultValue spinnerRecipe
   */
  recipe?: typeof spinnerRecipe;
  class?: unknown;
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Component
export const Spinner = defineComponent({
  inheritAttrs: false,
  name: "PisagorSpinner",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    recipe: {
      default: spinnerRecipe,
      type: Function as PropType<typeof spinnerRecipe>,
    },
  },
  setup(props, { attrs }) {
    return () =>
      h(PhCircleNotch as ArkPart, {
        ...attrs,
        "aria-label": attrs["aria-label"] ?? "Loading",
        class: cn(props.recipe(), props.class),
        "data-part": "root",
        "data-scope": "spinner",
        role: "status",
      });
  },
});
// #endregion
