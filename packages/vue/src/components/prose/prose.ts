import { ark } from "@ark-ui/vue/factory";
import { proseVariants } from "@pisagor/styles/ui/prose";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import type { WithTestId } from "../../internal/types";

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface ProseProps extends WithTestId {
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

// #region Part
export const Prose = defineComponent({
  inheritAttrs: false,
  name: "PisagorProse",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    html: { default: undefined, type: String },
    testId: String,
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: cn(proseVariants(), props.class),
          "data-part": "root",
          "data-scope": "prose",
          "data-testid": props.testId,
          ...(props.html ? { innerHTML: props.html } : null),
        },
        props.html ? undefined : slots.default?.(),
      );
  },
});
// #endregion
