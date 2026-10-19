import {
  type HTMLArkProps,
  type TimerActionTriggerProps,
  Timer as TimerPrimitive,
  useTimerContext as useTimer,
} from "@ark-ui/vue";
import { PhArrowCounterClockwise, PhPause, PhPlay } from "@phosphor-icons/vue";
import type {
  TimerContract,
  TimerItemGroupRootContract,
  TimerRootContract,
} from "@pisagor/contracts";
import { timerItemGroupRecipe, timerRecipe } from "@pisagor/recipes";
import { cn, type MessageKey } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import { type ClassValue, createSlotRecipeContext } from "../internal";
import { Button } from "./button";
import { useLocale } from "./provider/context";

// #region Context
const { withContext: withTimerContext, withProvider: withTimerProvider } =
  createSlotRecipeContext({
    name: "Timer",
    recipe: timerRecipe,
  });

const {
  useOptionalStyles: useOptionalTimerItemGroupStyles,
  withContext: withTimerItemGroupContext,
  withProvider: withTimerItemGroupProvider,
} = createSlotRecipeContext({
  // Same scope as Timer so recipe selectors ([data-scope=timer]) keep matching.
  name: "Timer",
  recipe: timerItemGroupRecipe,
});
// #endregion

// #region Types
type TimerUnit = "days" | "hours" | "minutes" | "seconds";

type ArkPart = Parameters<typeof h>[0];

export type TimerRootProps = TimerRootContract;

export interface TimerItemGroupProps extends TimerItemGroupRootContract {
  /**
   * The orientation of the timer item group.
   *
   * @defaultValue "vertical"
   */
  orientation?: "horizontal" | "vertical";
}

export type TimerActionProps = Omit<TimerActionTriggerProps, "action">;

export interface TimerProps extends TimerRootProps, TimerContract {
  /**
   * Whether to render play/pause and reset buttons.
   *
   * @defaultValue false
   */
  showControls?: boolean;
  /**
   * Units to render, each with a localized label.
   *
   * @defaultValue ["hours", "minutes", "seconds"]
   */
  units?: TimerUnit[];
}

export type TimerItemLabelProps = HTMLArkProps<"div">;

export type {
  TimerActionTriggerProps,
  TimerAreaProps,
  TimerControlProps,
  TimerItemProps,
  TimerSeparatorProps,
} from "@ark-ui/vue";
// #endregion

// #region Parts
export const TimerRoot = withTimerProvider<TimerRootContract>(
  TimerPrimitive.Root,
  { name: "Root", slot: "base" },
);

export const TimerArea = withTimerContext(TimerPrimitive.Area, {
  name: "Area",
});

const TimerItemGroupBase =
  withTimerItemGroupProvider<TimerItemGroupRootContract>("div", {
    name: "ItemGroup",
    slot: "base",
  });

export const TimerItemGroup = defineComponent({
  inheritAttrs: false,
  name: "Timer.ItemGroup",
  props: {
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
          "data-orientation": props.orientation,
          "data-part": "item-group",
        },
        slots,
      );
  },
});

/**
 * Usable inside or outside `Timer.ItemGroup` (falls back to the default
 * item-group recipe).
 */
export const TimerItem = defineComponent({
  inheritAttrs: false,
  name: "Timer.Item",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useOptionalTimerItemGroupStyles();

    return () =>
      h(
        TimerPrimitive.Item as ArkPart,
        {
          "data-part": "item",
          "data-scope": "timer",
          ...attrs,
          class: (styles?.slots ?? timerItemGroupRecipe()).item({
            class: cn(props.class),
          }),
        },
        slots,
      );
  },
});

export const TimerItemLabel = withTimerItemGroupContext("div", {
  name: "ItemLabel",
  slot: "label",
});

const TimerSeparatorBase = withTimerContext(TimerPrimitive.Separator, {
  name: "Separator",
});

export const TimerSeparator = defineComponent({
  inheritAttrs: false,
  name: "Timer.Separator",
  setup(_, { attrs, slots }) {
    return () => h(TimerSeparatorBase, attrs, () => slots.default?.() ?? ":");
  },
});

export const TimerControl = withTimerContext(TimerPrimitive.Control, {
  name: "Control",
});

export const TimerActionTrigger = withTimerContext(
  TimerPrimitive.ActionTrigger,
  { name: "ActionTrigger" },
);

function defineAction(action: TimerActionTriggerProps["action"], name: string) {
  return defineComponent({
    inheritAttrs: false,
    name,
    setup(_, { attrs, slots }) {
      const { m } = useLocale();

      return () =>
        h(
          TimerActionTrigger as ArkPart,
          { "aria-label": m(`timer.${action}`), ...attrs, action },
          slots,
        );
    },
  });
}

export const TimerPause = defineAction("pause", "Timer.Pause");

export const TimerResume = defineAction("resume", "Timer.Resume");

export const TimerStart = defineAction("start", "Timer.Start");

export const TimerReset = defineAction("reset", "Timer.Reset");

export const TimerRestart = defineAction("restart", "Timer.Restart");

/** Renders Pause while running, Resume while paused, otherwise Start. */
export const TimerPlay = defineComponent({
  inheritAttrs: false,
  name: "Timer.Play",
  setup(_, { attrs, slots }) {
    const timer = useTimer();

    return () => {
      if (timer.value.running) {
        return h(TimerPause, attrs, slots);
      }

      if (timer.value.paused) {
        return h(TimerResume, attrs, slots);
      }

      return h(TimerStart, attrs, slots);
    };
  },
});
// #endregion

// #region Shorthand
/** Play/pause toggle with a matching icon. */
const ShorthandPlay = defineComponent({
  name: "Timer.ShorthandPlay",
  props: { class: { default: undefined, type: String } },
  setup(props) {
    const timer = useTimer();

    return () =>
      h(TimerPlay, { asChild: true, class: props.class }, () =>
        h(Button, { size: "icon-sm", variant: "ghost" }, () =>
          h(timer.value.running ? PhPause : PhPlay),
        ),
      );
  },
});

export const TimerShorthand = defineComponent({
  inheritAttrs: false,
  name: "Timer",
  props: {
    classNames: {
      default: undefined,
      type: Object as PropType<TimerProps["classNames"]>,
    },
    showControls: { default: false, type: Boolean },
    units: {
      default: () => ["hours", "minutes", "seconds"],
      type: Array as PropType<TimerUnit[]>,
    },
  },
  setup(props, { attrs }) {
    const { m } = useLocale();

    return () => {
      const classNames = props.classNames;

      return h(TimerRoot as ArkPart, attrs, () => [
        h(TimerArea, { class: classNames?.area }, () =>
          props.units.flatMap((unit, index) => [
            index > 0
              ? h(TimerSeparator, {
                  class: classNames?.separator,
                  key: `separator-${unit}`,
                })
              : null,
            h(TimerItemGroup, { key: unit }, () => [
              h(TimerItem, { type: unit }),
              h(TimerItemLabel, null, () => m(`timer.${unit}` as MessageKey)),
            ]),
          ]),
        ),
        props.showControls
          ? h(TimerControl, { class: classNames?.control }, () => [
              h(ShorthandPlay, { class: classNames?.actionTrigger }),
              h(
                TimerReset,
                { asChild: true, class: classNames?.actionTrigger },
                () =>
                  h(Button, { size: "icon-sm", variant: "ghost" }, () =>
                    h(PhArrowCounterClockwise),
                  ),
              ),
            ])
          : null,
      ]);
    };
  },
});
// #endregion

export const Timer = Object.assign(TimerShorthand, {
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
  Root: TimerRoot,
  Separator: TimerSeparator,
  Start: TimerStart,
});
