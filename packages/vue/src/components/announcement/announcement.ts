import { ark } from "@ark-ui/vue/factory";
import { announcementTitleVariants, announcementVariants } from "@pisagor/styles/ui/announcement";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";

// #region Types
export interface AnnouncementProps {
  /** Optional badge or label rendered before the title. */
  badge?: VNodeChild;
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
    role: { default: "status", type: String as PropType<AnnouncementProps["role"]> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: cn(announcementVariants(), props.class),
          "data-part": "root",
          "data-scope": "announcement",
          role: props.role,
        },
        slots,
      );
  },
});

export const AnnouncementTitle = defineComponent({
  inheritAttrs: false,
  name: "AnnouncementTitle",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.span as ArkPart,
        {
          ...attrs,
          class: cn(announcementTitleVariants(), props.class),
          "data-part": "title",
          "data-scope": "announcement",
        },
        slots,
      );
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
