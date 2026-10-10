import { ark } from "@ark-ui/vue/factory";
import type {
  TimelineItemProps as BaseTimelineItemProps,
  TimelineProps as BaseTimelineProps,
} from "@pisagor/props";
import { timelineItemRecipe, timelineRecipe } from "@pisagor/recipes";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";

// #region Slot recipe context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Timeline",
  recipe: timelineItemRecipe,
});
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface TimelinePresetItem {
  /** Stable key for the item when title is not a string. */
  id?: string;
  title: VNodeChild;
  description?: VNodeChild;
  indicator?: VNodeChild;
}

export interface TimelineProps extends BaseTimelineProps {
  class?: unknown;
  items?: TimelinePresetItem[];
}

export interface TimelineItemProps extends BaseTimelineItemProps {
  class?: unknown;
}
// #endregion

// #region Parts
export const TimelineRoot = defineComponent({
  inheritAttrs: false,
  name: "TimelineRoot",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    orientation: {
      default: "vertical",
      type: String as PropType<TimelineProps["orientation"]>,
    },
    recipe: {
      default: timelineRecipe,
      type: Function as PropType<typeof timelineRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.ol as ArkPart,
        {
          ...attrs,
          class: props.recipe({
            class: props.class,
            orientation: props.orientation,
          }),
          "data-orientation": props.orientation,
          "data-part": "root",
          "data-scope": "timeline",
        },
        slots.default?.(),
      );
  },
});

export const TimelineItem = withProvider(ark.li, {
  defaultProps: {
    "data-part": "item",
  },
  name: "Item",
  slot: "base",
});

export const TimelineIndicator = withContext(ark.div, {
  name: "Indicator",
  slot: "indicator",
});

export const TimelineSeparator = withContext(ark.div, {
  defaultProps: {
    "aria-hidden": "true",
  },
  name: "Separator",
  slot: "separator",
});

export const TimelineContent = withContext(ark.div, {
  name: "Content",
  slot: "content",
});

export const TimelineTitle = withContext(ark.div, {
  name: "Title",
  slot: "title",
});

export const TimelineDescription = withContext(ark.div, {
  name: "Description",
  slot: "description",
});

export const TimelineShorthand = defineComponent({
  inheritAttrs: false,
  name: "TimelineShorthand",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    items: {
      default: undefined,
      type: Array as PropType<TimelinePresetItem[]>,
    },
    orientation: {
      default: "vertical",
      type: String as PropType<TimelineProps["orientation"]>,
    },
  },
  setup(props, { attrs }) {
    return () =>
      h(
        TimelineRoot,
        {
          ...attrs,
          class: props.class,
          orientation: props.orientation,
        },
        () =>
          (props.items ?? []).map((item, index) => {
            const titleKey =
              item.id ??
              ((typeof item.title === "string" || typeof item.title === "number"
                ? String(item.title)
                : `timeline-item-${index}`) as string);

            return h(TimelineItem, { key: titleKey }, () => [
              h(TimelineSeparator),
              h(TimelineIndicator, null, () => item.indicator),
              h(TimelineContent, null, () => [
                h(TimelineTitle, null, () => item.title),
                item.description
                  ? h(TimelineDescription, null, () => item.description)
                  : null,
              ]),
            ]);
          }),
      );
  },
});

// #endregion

export const Timeline = Object.assign(TimelineShorthand, {
  Content: TimelineContent,
  Description: TimelineDescription,
  Indicator: TimelineIndicator,
  Item: TimelineItem,
  Root: TimelineRoot,
  Separator: TimelineSeparator,
  Title: TimelineTitle,
});
