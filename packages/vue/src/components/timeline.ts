import type {
  TimelineItemRootContract,
  TimelineItemContract,
  TimelinePresetItem as BaseTimelinePresetItem,
  TimelineRootContract,
  TimelineContract,
} from "@pisagor/contracts";
import { timelineItemRecipe, timelineRecipe } from "@pisagor/recipes";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { type ClassValue, createSlotRecipeContext } from "../internal";

// #region Slot recipe context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Timeline",
  recipe: timelineItemRecipe,
});
// #endregion

// #region Types
export interface TimelinePresetItem extends Omit<
  BaseTimelinePresetItem,
  "title" | "description" | "indicator"
> {
  /** Stable key for the item when title is not a string. */
  id?: string;
  title: VNodeChild;
  description?: VNodeChild;
  indicator?: VNodeChild;
}

export interface TimelineRootProps extends Omit<TimelineRootContract, "items"> {
  class?: unknown;
}

export interface TimelineProps
  extends
    TimelineRootProps,
    Omit<TimelineRootContract, "items">,
    TimelineContract {
  class?: unknown;
  items?: TimelinePresetItem[];
}

export interface TimelineItemProps
  extends TimelineItemRootContract, TimelineItemContract {
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
      type: [String, Object, Array] as PropType<ClassValue>,
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
        "ol",
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

export const TimelineItem = withProvider<TimelineItemRootContract>("li", {
  name: "Item",
  slot: "base",
});

export const TimelineIndicator = withContext("div", { name: "Indicator" });

export const TimelineSeparator = withContext("div", {
  defaultProps: {
    "aria-hidden": "true",
  },
  name: "Separator",
});

export const TimelineContent = withContext("div", { name: "Content" });

export const TimelineTitle = withContext("div", { name: "Title" });

export const TimelineDescription = withContext("div", { name: "Description" });

export const TimelineShorthand = defineComponent({
  inheritAttrs: false,
  name: "TimelineShorthand",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
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
