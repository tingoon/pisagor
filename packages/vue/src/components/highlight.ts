import {
  type HighlightChunk,
  type UseHighlightProps,
  useHighlight,
} from "@ark-ui/vue/highlight";
import type { HighlightProps as BaseHighlightProps } from "@pisagor/props";
import { highlightRecipe } from "@pisagor/recipes";
import type { ClassValue } from "tailwind-variants";
import { computed, defineComponent, Fragment, h, type PropType } from "vue";

// #region Types
export interface HighlightProps extends UseHighlightProps, BaseHighlightProps {
  class?: unknown;
}
// #endregion

// #region Component
/**
 * Renders `text` with every `query` match wrapped in a `<mark>` that carries
 * the recipe classes and forwarded attributes (React / Ark parity).
 */
export const Highlight = defineComponent({
  inheritAttrs: false,
  name: "PisagorHighlight",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    exactMatch: { default: undefined, type: Boolean },
    ignoreCase: { default: undefined, type: Boolean },
    matchAll: { default: undefined, type: Boolean },
    query: {
      required: true,
      type: [String, Array] as PropType<UseHighlightProps["query"]>,
    },
    recipe: {
      default: highlightRecipe,
      type: Function as PropType<typeof highlightRecipe>,
    },
    text: { required: true, type: String },
  },
  setup(props, { attrs }) {
    const chunks = useHighlight(
      computed(() => ({
        exactMatch: props.exactMatch,
        ignoreCase: props.ignoreCase,
        matchAll: props.matchAll,
        query: props.query,
        text: props.text,
      })),
    );

    return () => {
      const className = props.recipe({ class: props.class as ClassValue });

      return h(
        Fragment,
        chunks.value.map((chunk: HighlightChunk) =>
          chunk.match
            ? h("mark", { ...attrs, class: className }, chunk.text)
            : chunk.text,
        ),
      );
    };
  },
});
// #endregion
