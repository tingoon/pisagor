import { ark } from "@ark-ui/vue/factory";
import { Timer as TimerPrimitive, useTimerContext as useTimer } from "@ark-ui/vue/timer";
import { timerVariants } from "@pisagor/styles/ui/timer";
import { defineComponent, h, type PropType } from "vue";

// #region Types
type TimerUnit = "hours" | "minutes" | "seconds";

export interface TimerRootProps {
  units?: TimerUnit[];
  /** Auto-render Timer.Control with play and reset buttons */
  isControlsVisible?: boolean;
  class?: unknown;
}

type ArkPart = Parameters<typeof h>[0];
// #endregion

// #region Parts
export const TimerRoot = defineComponent({
  inheritAttrs: false,
  name: "TimerRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    isControlsVisible: { default: undefined, type: Boolean },
    units: { default: undefined, type: Array as PropType<TimerUnit[]> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = timerVariants();

      return h(
        TimerPrimitive.Root as ArkPart,
        {
          ...attrs,
          class: variantSlots.base({ class: props.class }),
        },
        () => [
          props.units
            ? h(TimerArea, null, () =>
                props.units?.map((unit, index) => [
                  index > 0 ? h(TimerSeparator, { key: `sep-${unit}-${index}` }) : null,
                  h(TimerItemGroup, { key: `group-${unit}-${index}` }, () => [
                    h(TimerItem, { type: unit }),
                    h(TimerItemLabel, null, () => unit),
                  ]),
                ]),
              )
            : null,
          props.isControlsVisible
            ? h(TimerControl, null, () => [h(TimerPlay), h(TimerReset)])
            : null,
          slots.default?.(),
        ],
      );
    };
  },
});

export const TimerArea = defineComponent({
  inheritAttrs: false,
  name: "TimerArea",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = timerVariants();

      return h(
        TimerPrimitive.Area as ArkPart,
        {
          ...attrs,
          class: variantSlots.area({ class: props.class }),
        },
        slots,
      );
    };
  },
});

export const TimerItemGroup = defineComponent({
  inheritAttrs: false,
  name: "TimerItemGroup",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    orientation: {
      default: "vertical",
      type: String as PropType<"horizontal" | "vertical">,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = timerVariants();

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: variantSlots.itemGroup({ class: props.class }),
          "data-orientation": props.orientation,
          "data-part": "item-group",
          "data-scope": "timer",
        },
        slots,
      );
    };
  },
});

export const TimerItem = defineComponent({
  inheritAttrs: false,
  name: "TimerItem",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = timerVariants();

      return h(
        TimerPrimitive.Item as ArkPart,
        {
          ...attrs,
          class: variantSlots.item({ class: props.class }),
        },
        slots,
      );
    };
  },
});

export const TimerItemLabel = defineComponent({
  inheritAttrs: false,
  name: "TimerItemLabel",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = timerVariants();

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: variantSlots.itemLabel({ class: props.class }),
          "data-part": "item-label",
          "data-scope": "timer",
        },
        slots,
      );
    };
  },
});

export const TimerSeparator = defineComponent({
  inheritAttrs: false,
  name: "TimerSeparator",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = timerVariants();

      return h(
        TimerPrimitive.Separator as ArkPart,
        {
          ...attrs,
          class: variantSlots.separator({ class: props.class }),
        },
        () => slots.default?.() ?? ":",
      );
    };
  },
});

export const TimerControl = defineComponent({
  inheritAttrs: false,
  name: "TimerControl",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = timerVariants();

      return h(
        TimerPrimitive.Control as ArkPart,
        {
          ...attrs,
          class: variantSlots.control({ class: props.class }),
        },
        slots,
      );
    };
  },
});

export const TimerActionTrigger = defineComponent({
  inheritAttrs: false,
  name: "TimerActionTrigger",
  setup(_, { attrs, slots }) {
    return () => h(TimerPrimitive.ActionTrigger as ArkPart, { ...attrs }, slots);
  },
});

export const TimerPause = defineComponent({
  inheritAttrs: false,
  name: "TimerPause",
  setup(_, { attrs, slots }) {
    return () =>
      h(
        TimerPrimitive.ActionTrigger as ArkPart,
        { ...attrs, action: "pause", "aria-label": "Pause" },
        slots,
      );
  },
});

export const TimerResume = defineComponent({
  inheritAttrs: false,
  name: "TimerResume",
  setup(_, { attrs, slots }) {
    return () =>
      h(
        TimerPrimitive.ActionTrigger as ArkPart,
        { ...attrs, action: "resume", "aria-label": "Resume" },
        slots,
      );
  },
});

export const TimerStart = defineComponent({
  inheritAttrs: false,
  name: "TimerStart",
  setup(_, { attrs, slots }) {
    return () =>
      h(
        TimerPrimitive.ActionTrigger as ArkPart,
        { ...attrs, action: "start", "aria-label": "Start" },
        slots,
      );
  },
});

export const TimerReset = defineComponent({
  inheritAttrs: false,
  name: "TimerReset",
  setup(_, { attrs, slots }) {
    return () =>
      h(
        TimerPrimitive.ActionTrigger as ArkPart,
        { ...attrs, action: "reset", "aria-label": "Reset" },
        slots,
      );
  },
});

export const TimerRestart = defineComponent({
  inheritAttrs: false,
  name: "TimerRestart",
  setup(_, { attrs, slots }) {
    return () =>
      h(
        TimerPrimitive.ActionTrigger as ArkPart,
        { ...attrs, action: "restart", "aria-label": "Restart" },
        slots,
      );
  },
});

export const TimerPlay = defineComponent({
  inheritAttrs: false,
  name: "TimerPlay",
  setup(_, { attrs, slots }) {
    const timer = useTimer();
    return () =>
      timer.value.paused ? h(TimerResume, { ...attrs }, slots) : h(TimerStart, { ...attrs }, slots);
  },
});
// #endregion
