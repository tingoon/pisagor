import { ark } from "@ark-ui/vue/factory";
import { statusVariants } from "@pisagor/styles/ui/status";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import type { WithTestId } from "../../internal/types";

// #region Types
export interface StatusProps extends WithTestId {
  class?: unknown;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "success" | "info" | "warning" | "destructive";
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Component
export const Status = defineComponent({
  inheritAttrs: false,
  name: "PisagorStatus",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    size: { default: undefined, type: String as PropType<StatusProps["size"]> },
    testId: String,
    variant: { default: undefined, type: String as PropType<StatusProps["variant"]> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.span as ArkPart,
        {
          ...attrs,
          class: cn(statusVariants({ size: props.size, variant: props.variant }), props.class),
          "data-part": "indicator",
          "data-scope": "status",
          "data-size": props.size,
          "data-testid": props.testId,
        },
        slots,
      );
  },
});
// #endregion
