import { PhCircleNotch } from "@phosphor-icons/vue";
import { spinnerVariants } from "@pisagor/styles/ui/spinner";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import type { WithTestId } from "../../internal/types";

// #region Types
export interface SpinnerProps extends WithTestId {
  class?: unknown;
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Part
export const Spinner = defineComponent({
  inheritAttrs: false,
  name: "PisagorSpinner",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    testId: String,
  },
  setup(props, { attrs }) {
    return () =>
      h(PhCircleNotch as ArkPart, {
        ...attrs,
        "aria-label": attrs["aria-label"] ?? "Loading",
        class: cn(spinnerVariants(), props.class),
        "data-part": "root",
        "data-scope": "spinner",
        "data-testid": props.testId,
        role: "status",
      });
  },
});
// #endregion
