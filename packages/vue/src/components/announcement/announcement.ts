import { ark } from "@ark-ui/vue/factory";
import { announcementRecipe } from "@pisagor/recipes/announcement";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";

// #region Types
export interface AnnouncementProps {
  /** Optional badge or label rendered before the title. */
  badge?: VNodeChild;
  /**
   * Style recipe. Defaults to `announcementRecipe` from `@pisagor/recipes/announcement`.
   *
   * @defaultValue announcementRecipe
   */
  recipe?: typeof announcementRecipe;
  class?: unknown;
  /**
   * The ARIA role of the announcement.
   *
   * @defaultValue "status"
   */
  role?: "status" | "alert";
  /** Title content rendered inside `Announcement.Title`. */
  title?: VNodeChild;
  /** Extra props forwarded to the announcement title element */
  titleProps?: Record<string, unknown>;
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Parts
export const AnnouncementRoot = defineComponent({
  inheritAttrs: false,
  name: "AnnouncementRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    recipe: {
      default: announcementRecipe,
      type: Function as PropType<typeof announcementRecipe>,
    },
    role: { default: "status", type: String as PropType<AnnouncementProps["role"]> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.recipe();

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: variantSlots.base({ class: props.class }),
          "data-part": "root",
          "data-scope": "announcement",
          role: props.role,
        },
        slots,
      );
    };
  },
});

export const AnnouncementTitle = defineComponent({
  inheritAttrs: false,
  name: "AnnouncementTitle",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    recipe: {
      default: announcementRecipe,
      type: Function as PropType<typeof announcementRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.recipe();

      return h(
        ark.span as ArkPart,
        {
          ...attrs,
          class: variantSlots.title({ class: props.class }),
          "data-part": "title",
          "data-scope": "announcement",
        },
        slots,
      );
    };
  },
});

export const AnnouncementShorthand = defineComponent({
  inheritAttrs: false,
  name: "AnnouncementShorthand",
  props: {
    badge: { default: undefined, type: [String, Object, Array] as PropType<VNodeChild> },
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    role: { default: undefined, type: String as PropType<AnnouncementProps["role"]> },
    title: { default: undefined, type: [String, Object, Array] as PropType<VNodeChild> },
    titleProps: { default: undefined, type: Object as PropType<Record<string, unknown>> },
  },
  setup(props, { attrs }) {
    return () =>
      h(
        AnnouncementRoot,
        {
          ...attrs,
          class: props.class,
          role: props.role,
        },
        () => [
          props.badge,
          props.title !== undefined
            ? h(AnnouncementTitle, props.titleProps, () => props.title)
            : null,
        ],
      );
  },
});
// #endregion
