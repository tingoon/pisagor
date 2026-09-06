import { ark } from "@ark-ui/vue/factory";
import { type BadgeVariantProps, badgeRecipe } from "@pisagor/recipes/badge";
import { defineComponent, h, type PropType } from "vue";

// #region Types
export type BadgeVariant = NonNullable<BadgeVariantProps["variant"]>;

export interface BadgeProps extends BadgeVariantProps {
  /**
   * Style recipe. Defaults to `badgeRecipe` from `@pisagor/recipes/badge`.
   *
   * @defaultValue badgeRecipe
   */
  recipe?: typeof badgeRecipe;
  class?: unknown;
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Component
export const Badge = defineComponent({
  inheritAttrs: false,
  name: "PisagorBadge",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    pill: { default: false, type: Boolean },
    recipe: {
      default: badgeRecipe,
      type: Function as PropType<typeof badgeRecipe>,
    },
    size: { default: "md", type: String as PropType<BadgeProps["size"]> },
    variant: { default: "default", type: String as PropType<BadgeProps["variant"]> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.span as ArkPart,
        {
          ...attrs,
          class: props.recipe({
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
