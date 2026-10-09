import { ark } from "@ark-ui/vue/factory";
import {
  Timer as TimerPrimitive,
  useTimerContext as useTimer,
} from "@ark-ui/vue/timer";
import type {
  TimerItemGroupProps as BaseTimerItemGroupProps,
  TimerProps as BaseTimerRootProps,
} from "@pisagor/props";
import { timerItemGroupRecipe, timerRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";

// #region Context
const {
  useStyles: useTimerStyles,
  withContext: withTimerContext,
  withProvider: withTimerProvider,
} = createSlotRecipeContext({
  name: "Timer",
  recipe: timerRecipe,
});

const {
  withContext: withTimerItemGroupContext,
  withProvider: withTimerItemGroupProvider,
} = createSlotRecipeContext({
  // Same scope as Timer so recipe selectors ([data-scope=timer]) keep matching.
  name: "Timer",
  recipe: timerItemGroupRecipe,
});
// #endregion

// #region Types
type TimerUnit = "hours" | "minutes" | "seconds";

export interface TimerRootProps extends BaseTimerRootProps {
  units?: TimerUnit[];
  /** Auto-render Timer.Control with play and reset buttons */
  isControlsVisible?: boolean;
  class?: unknown;
}

type ArkPart = Parameters<typeof h>[0];

export interface TimerItemGroupProps extends BaseTimerItemGroupProps {
  class?: unknown;
  /**
   * The orientation of the timer item group.
   *
   * @defaultValue "vertical"
   */
  orientation?: "horizontal" | "vertical";
}
// #endregion

// #region Parts
const TimerRootBase = withTimerProvider(TimerPrimitive.Root, {
  name: "Root",
  slot: "base",
});

export const TimerArea = withTimerContext(TimerPrimitive.Area, {
  name: "Area",
});

const TimerItemGroupBase = withTimerItemGroupProvider(ark.div, {
  defaultProps: { "data-part": "item-group" },
  name: "ItemGroup",
  slot: "base",
});

export const TimerItem = withTimerItemGroupContext(TimerPrimitive.Item, {
  name: "Item",
});

export const TimerItemLabel = withTimerItemGroupContext(ark.div, {
  defaultProps: { "data-part": "item-label" },
  name: "ItemLabel",
  slot: "label",
});

export const TimerControl = withTimerContext(TimerPrimitive.Control, {
  name: "Control",
});

export const TimerRoot = defineComponent({
  inheritAttrs: false,
  name: "Timer.Root",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    isControlsVisible: { default: undefined, type: Boolean },
    units: { default: undefined, type: Array as PropType<TimerUnit[]> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(TimerRootBase, { ...attrs, class: props.class }, () => [
        props.units
          ? h(TimerArea, null, () =>
              props.units?.map((unit, index) => [
                index > 0
                  ? h(TimerSeparator, { key: `sep-${unit}-${index}` })
                  : null,
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
      ]);
  },
});

export const TimerItemGroup = defineComponent({
  inheritAttrs: false,
  name: "Timer.ItemGroup",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    orientation: {
      default: "vertical",
      type: String as PropType<"horizontal" | "vertical">,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        TimerItemGroupBase,
        {
          ...attrs,
          class: props.class,
          "data-orientation": props.orientation,
        },
        slots,
      );
  },
});

export const TimerSeparator = defineComponent({
  inheritAttrs: false,
  name: "Timer.Separator",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useTimerStyles();

    return () =>
      h(
        TimerPrimitive.Separator as ArkPart,
        {
          ...attrs,
          class: styles.slots.separator({ class: cn(props.class) }),
        },
        () => slots.default?.() ?? ":",
      );
  },
});

export const TimerActionTrigger = defineComponent({
  inheritAttrs: false,
  name: "TimerActionTrigger",
  setup(_, { attrs, slots }) {
    return () =>
      h(TimerPrimitive.ActionTrigger as ArkPart, { ...attrs }, slots);
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
      timer.value.paused
        ? h(TimerResume, { ...attrs }, slots)
        : h(TimerStart, { ...attrs }, slots);
  },
});
// #endregion

export const Timer = Object.assign(TimerRoot, {
  ActionTrigger: TimerActionTrigger,
  Area: TimerArea,
  Control: TimerControl,
  Item: TimerItem,
  ItemGroup: TimerItemGroup,
  ItemLabel: TimerItemLabel,
  Pause: TimerPause,
  Play: TimerPlay,
  Reset: TimerReset,
  Restart: TimerRestart,
  Resume: TimerResume,
  Separator: TimerSeparator,
  Start: TimerStart,
});
