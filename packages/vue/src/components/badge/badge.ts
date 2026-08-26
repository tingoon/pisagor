import { ark } from "@ark-ui/vue/factory";
import { badgeVariants } from "@pisagor/styles/ui/badge";
import { defineComponent, h, type PropType } from "vue";

// #region Types
export type BadgeVariant =
  | "default"
  | "secondary"
  | "outline"
  | "destructive"
  | "info"
  | "success"
  | "warning";

export interface BadgeProps {
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
    variant: { default: "default", type: String as PropType<BadgeProps["variant"]> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.span as ArkPart,
        {
          ...attrs,
          class: badgeVariants({
            class: props.class as string | undefined,
            pill: props.pill,
            size: props.size,
            variant: props.variant,
          }),
          "data-part": "root",
          "data-scope": "badge",
          "data-size": props.size,
          "data-variant": props.variant,
        },
        slots,
      );
  },
});
// #endregion
