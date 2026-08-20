import { ark } from "@ark-ui/vue/factory";
import { badgeVariants } from "@pisagor/styles/ui/badge";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import type { WithTestId } from "../../internal/types";

// #region Types
export type BadgeVariant =
  | "default"
  | "secondary"
  | "outline"
  | "destructive"
  | "info"
  | "success"
  | "warning";

export interface BadgeProps extends WithTestId {
  class?: unknown;
  pill?: boolean;
  size: "sm" | "md" | "lg";
  variant: BadgeVariant;
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Part
export const Badge = defineComponent({
  inheritAttrs: false,
  name: "PisagorBadge",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    pill: { default: false, type: Boolean },
    size: { default: "md", type: String as PropType<BadgeProps["size"]> },
    testId: String,
    variant: { default: "default", type: String as PropType<BadgeProps["variant"]> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.span as ArkPart,
        {
          ...attrs,
          class: cn(
            badgeVariants({ pill: props.pill, size: props.size, variant: props.variant }),
            props.class,
          ),
          "data-part": "root",
          "data-scope": "badge",
          "data-size": props.size,
          "data-testid": props.testId,
          "data-variant": props.variant,
        },
        slots,
      );
  },
});
// #endregion
