import { Highlight as HighlightPrimitive } from "@ark-ui/vue/highlight";
import { highlightVariants } from "@pisagor/styles/ui/highlight";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import type { WithTestId } from "../../internal/types";

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface HighlightProps extends WithTestId {
  class?: unknown;
}
// #endregion

// #region Part
export const Highlight = defineComponent({
  inheritAttrs: false,
  name: "PisagorHighlight",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    testId: String,
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        HighlightPrimitive as ArkPart,
        {
          ...attrs,
          class: cn(highlightVariants(), props.class),
          "data-testid": props.testId,
        },
        slots.default?.(),
      );
  },
});
// #endregion
