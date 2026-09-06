import { ark } from "@ark-ui/vue/factory";
import {
  type TimelineVariantProps,
  timelineItemRecipe,
  timelineRecipe,
} from "@pisagor/recipes/timeline";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface TimelinePresetItem {
  /** Stable key for the item when title is not a string. */
  id?: string;
  title: VNodeChild;
  description?: VNodeChild;
  indicator?: VNodeChild;
}

export interface TimelineProps extends TimelineVariantProps {
  /**
   * Style recipe. Defaults to `timelineRecipe` from `@pisagor/recipes/timeline`.
   *
   * @defaultValue timelineRecipe
   */
  recipe?: typeof timelineRecipe;
  class?: unknown;
  items?: TimelinePresetItem[];
}

export interface TimelineItemProps {
  /**
   * Style recipe. Defaults to `timelineItemRecipe` from `@pisagor/recipes/timeline-item`.
   *
   * @defaultValue timelineItemRecipe
   */
  itemRecipe?: typeof timelineItemRecipe;
  class?: unknown;
}
// #endregion

// #region Parts
export const TimelineRoot = defineComponent({
  inheritAttrs: false,
  name: "TimelineRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    orientation: { default: "vertical", type: String as PropType<TimelineProps["orientation"]> },
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
          class: props.recipe({ class: props.class, orientation: props.orientation }),
          "data-orientation": props.orientation,
          "data-part": "root",
          "data-scope": "timeline",
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
    itemRecipe: {
      default: timelineItemRecipe,
      type: Function as PropType<typeof timelineItemRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.itemRecipe();

      return h(
        ark.li as ArkPart,
        {
          ...attrs,
          class: variantSlots.base({ class: props.class }),
          "data-part": "item",
          "data-scope": "timeline",
        },
        slots.default?.(),
      );
    };
  },
});

export const TimelineIndicator = defineComponent({
  inheritAttrs: false,
  name: "TimelineIndicator",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    itemRecipe: {
      default: timelineItemRecipe,
      type: Function as PropType<typeof timelineItemRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.itemRecipe();

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: variantSlots.indicator({ class: props.class }),
          "data-part": "indicator",
          "data-scope": "timeline",
        },
        slots.default?.(),
      );
    };
  },
});

export const TimelineSeparator = defineComponent({
  inheritAttrs: false,
  name: "TimelineSeparator",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    itemRecipe: {
      default: timelineItemRecipe,
      type: Function as PropType<typeof timelineItemRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.itemRecipe();

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          "aria-hidden": "true",
          class: variantSlots.separator({ class: props.class }),
          "data-part": "separator",
          "data-scope": "timeline",
        },
        slots.default?.(),
      );
    };
  },
});

export const TimelineContent = defineComponent({
  inheritAttrs: false,
  name: "TimelineContent",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    itemRecipe: {
      default: timelineItemRecipe,
      type: Function as PropType<typeof timelineItemRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.itemRecipe();

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: variantSlots.content({ class: props.class }),
          "data-part": "content",
          "data-scope": "timeline",
        },
        slots.default?.(),
      );
    };
  },
});

export const TimelineTitle = defineComponent({
  inheritAttrs: false,
  name: "TimelineTitle",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    itemRecipe: {
      default: timelineItemRecipe,
      type: Function as PropType<typeof timelineItemRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.itemRecipe();

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: variantSlots.title({ class: props.class }),
          "data-part": "title",
          "data-scope": "timeline",
        },
        slots.default?.(),
      );
    };
  },
});

export const TimelineDescription = defineComponent({
  inheritAttrs: false,
  name: "TimelineDescription",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    itemRecipe: {
      default: timelineItemRecipe,
      type: Function as PropType<typeof timelineItemRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.itemRecipe();

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: variantSlots.description({ class: props.class }),
          "data-part": "description",
          "data-scope": "timeline",
        },
        slots.default?.(),
      );
    };
  },
});

export const TimelineShorthand = defineComponent({
  inheritAttrs: false,
  name: "TimelineShorthand",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    items: { default: undefined, type: Array as PropType<TimelinePresetItem[]> },
    orientation: { default: "vertical", type: String as PropType<TimelineProps["orientation"]> },
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
