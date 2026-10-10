import { ark } from "@ark-ui/vue/factory";
import type { AnnouncementProps as BaseAnnouncementRootProps } from "@pisagor/props";
import { announcementRecipe } from "@pisagor/recipes";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Announcement",
  recipe: announcementRecipe,
});
// #endregion

// #region Parts
export const AnnouncementRoot = withProvider(ark.div, {
  defaultProps: {
    role: "status",
  },
  name: "Root",
  slot: "base",
});

export const AnnouncementTitle = withContext(ark.span, {
  name: "Title",
  slot: "title",
});
// #endregion

// #region Types
export interface AnnouncementProps extends BaseAnnouncementRootProps {
  /** Optional badge or label rendered before the title. */
  badge?: VNodeChild;
  /** Title content rendered inside `Announcement.Title`. */
  title?: VNodeChild;
  class?: unknown;
  /** Extra props forwarded to the announcement title element */
  titleProps?: Record<string, unknown>;
}
// #endregion

// #region Shorthand
export const AnnouncementShorthand = defineComponent({
  inheritAttrs: false,
  name: "Announcement",
  props: {
    badge: {
      default: undefined,
      type: [String, Object, Array] as PropType<VNodeChild>,
    },
    class: { default: undefined },
    title: {
      default: undefined,
      type: [String, Object, Array] as PropType<VNodeChild>,
    },
    titleProps: {
      default: undefined,
      type: Object as PropType<Record<string, unknown>>,
    },
  },
  setup(props, { attrs }) {
    return () => {
      const nodes: VNodeChild[] = [];
      if (props.badge !== undefined) nodes.push(props.badge);
      if (props.title !== undefined) {
        nodes.push(
          h(AnnouncementTitle, props.titleProps ?? null, () => props.title),
        );
      }
      return h(AnnouncementRoot, { ...attrs, class: props.class }, () => nodes);
    };
  },
});
// #endregion

export const Announcement = Object.assign(AnnouncementShorthand, {
  Root: AnnouncementRoot,
  Title: AnnouncementTitle,
});
