import { ark } from "@ark-ui/vue/factory";
import {
  timelineContentVariants,
  timelineDescriptionVariants,
  timelineIndicatorVariants,
  timelineItemVariants,
  timelineSeparatorVariants,
  timelineTitleVariants,
  timelineVariants,
} from "@pisagor/styles/ui/timeline";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import type { WithTestId } from "../../internal/types";

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface TimelinePresetItem {
  /** Stable key for the item when title is not a string. */
  id?: string;
  title: VNodeChild;
  description?: VNodeChild;
  indicator?: VNodeChild;
}

export interface TimelineProps extends WithTestId {
  /**
   * Timeline layout.
   *
   * @defaultValue "vertical"
   */
  orientation?: "vertical" | "horizontal";
  class?: unknown;
  items?: TimelinePresetItem[];
}
// #endregion

// #region Parts
export const TimelineRoot = defineComponent({
  inheritAttrs: false,
  name: "TimelineRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    orientation: { default: "vertical", type: String as PropType<TimelineProps["orientation"]> },
    testId: String,
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.ol as ArkPart,
        {
          ...attrs,
          class: cn(timelineVariants({ orientation: props.orientation }), props.class),
          "data-orientation": props.orientation,
          "data-part": "root",
          "data-scope": "timeline",
          "data-testid": props.testId,
        },
        slots.default?.(),
      );
  },
});

export const TimelineItem = defineComponent({
  inheritAttrs: false,
  name: "TimelineItem",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.li as ArkPart,
        {
          ...attrs,
          class: cn(timelineItemVariants(), props.class),
          "data-part": "item",
          "data-scope": "timeline",
        },
        slots.default?.(),
      );
  },
});

export const TimelineIndicator = defineComponent({
  inheritAttrs: false,
  name: "TimelineIndicator",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: cn(timelineIndicatorVariants(), props.class),
          "data-part": "indicator",
          "data-scope": "timeline",
        },
        slots.default?.(),
      );
  },
});

export const TimelineSeparator = defineComponent({
  inheritAttrs: false,
  name: "TimelineSeparator",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.div as ArkPart,
        {
          ...attrs,
          "aria-hidden": "true",
          class: cn(timelineSeparatorVariants(), props.class),
          "data-part": "separator",
          "data-scope": "timeline",
        },
        slots.default?.(),
      );
  },
});

export const TimelineContent = defineComponent({
  inheritAttrs: false,
  name: "TimelineContent",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: cn(timelineContentVariants(), props.class),
          "data-part": "content",
          "data-scope": "timeline",
        },
        slots.default?.(),
      );
  },
});

export const TimelineTitle = defineComponent({
  inheritAttrs: false,
  name: "TimelineTitle",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: cn(timelineTitleVariants(), props.class),
          "data-part": "title",
          "data-scope": "timeline",
        },
        slots.default?.(),
      );
  },
});

export const TimelineDescription = defineComponent({
  inheritAttrs: false,
  name: "TimelineDescription",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: cn(timelineDescriptionVariants(), props.class),
          "data-part": "description",
          "data-scope": "timeline",
        },
        slots.default?.(),
      );
  },
});

export const TimelineShorthand = defineComponent({
  inheritAttrs: false,
  name: "TimelineShorthand",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    items: { default: undefined, type: Array as PropType<TimelinePresetItem[]> },
    orientation: { default: "vertical", type: String as PropType<TimelineProps["orientation"]> },
    testId: String,
  },
  setup(props, { attrs }) {
    return () =>
      h(
        TimelineRoot,
        {
          ...attrs,
          class: props.class,
          orientation: props.orientation,
          testId: props.testId,
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
                item.description ? h(TimelineDescription, null, () => item.description) : null,
              ]),
            ]);
          }),
      );
  },
});

TimelineRoot.displayName = "Timeline.Root";
TimelineItem.displayName = "Timeline.Item";
TimelineIndicator.displayName = "Timeline.Indicator";
TimelineSeparator.displayName = "Timeline.Separator";
TimelineContent.displayName = "Timeline.Content";
TimelineTitle.displayName = "Timeline.Title";
TimelineDescription.displayName = "Timeline.Description";
TimelineShorthand.displayName = "Timeline";
// #endregion
