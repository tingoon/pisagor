import { ark } from "@ark-ui/vue/factory";
import { visuallyHiddenVariants } from "@pisagor/styles/ui/visually-hidden";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import type { WithTestId } from "../../internal/types";

// #region Types
export interface VisuallyHiddenProps extends WithTestId {
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
    testId: String,
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.span as ArkPart,
        {
          ...attrs,
          class: cn(visuallyHiddenVariants(), props.class),
          "data-part": "root",
          "data-scope": "visually-hidden",
          "data-testid": props.testId,
        },
        slots,
      );
  },
});
// #endregion
