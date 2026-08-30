import { ark } from "@ark-ui/vue/factory";
import { proseRecipe } from "@pisagor/recipes/prose";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface ProseProps {
  class?: unknown;
  /**
   * Trusted HTML content rendered as-is.
   *
   * @remarks
   * When set, the default slot content is ignored.
   */
  html?: string;
}
// #endregion

// #region Component
export const Prose = defineComponent({
  inheritAttrs: false,
  name: "PisagorProse",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    html: { default: undefined, type: String },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: cn(proseRecipe(), props.class),
          "data-part": "root",
          "data-scope": "prose",
          ...(props.html ? { innerHTML: props.html } : null),
        },
        props.html ? undefined : slots.default?.(),
      );
  },
});
// #endregion
