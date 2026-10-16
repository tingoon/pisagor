import { ark } from "@ark-ui/vue/factory";
import type { ProseProps as BaseProseProps } from "@pisagor/props";
import { proseRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import type { ClassValue } from "../internal/types";

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface ProseProps extends BaseProseProps {
  class?: unknown;
  /**
   * Trusted HTML content rendered as-is.
   *
   * @remarks
   *   When set, the default slot content is ignored.
   */
  html?: string;
  /**
   * Sanitizer applied to `html` before injection, e.g. `(html) =>
   * DOMPurify.sanitize(html)`. Recommended for user-generated content.
   */
  sanitize?: (html: string) => string;
}
// #endregion

// #region Component
export const Prose = defineComponent({
  inheritAttrs: false,
  name: "PisagorProse",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    html: { default: undefined, type: String },
    recipe: {
      default: proseRecipe,
      type: Function as PropType<typeof proseRecipe>,
    },
    sanitize: {
      default: undefined,
      type: Function as PropType<(html: string) => string>,
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
          "data-scope": "prose",
          ...(props.html
            ? {
                innerHTML: props.sanitize
                  ? props.sanitize(props.html)
                  : props.html,
              }
            : null),
        },
        props.html ? undefined : slots.default?.(),
      );
  },
});
// #endregion
