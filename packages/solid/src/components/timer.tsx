import {
  type HTMLArkProps,
  Timer as TimerPrimitive,
  useTimerContext,
} from "@ark-ui/solid";
import type {
  TimerActionTriggerProps,
  TimerAreaProps,
  TimerControlProps,
  TimerItemProps,
  TimerRootProps as TimerRootPrimitiveProps,
  TimerSeparatorProps,
} from "@ark-ui/solid";
import type {
  TimerContract,
  TimerItemGroupRootContract,
  TimerRootContract,
} from "@pisagor/contracts";
import { timerItemGroupRecipe, timerRecipe } from "@pisagor/recipes";
import type { JSX } from "solid-js";
import { For, Match, Show, splitProps, Switch, useContext } from "solid-js";
import {
  ArrowCounterClockwiseIcon,
  PauseIcon,
  PlayIcon,
  createSlotRecipeContext,
} from "../internal";
import { Button } from "./button";
import { type MessageKey, useLocale } from "./provider/context";

// #region Context
const { withContext: withTimerContext, withProvider: withTimerProvider } =
  createSlotRecipeContext({
    name: "Timer",
    recipe: timerRecipe,
  });

const {
  Context: TimerItemGroupStylesContext,
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

export interface TimerItemGroupProps
  extends HTMLArkProps<"div">, TimerItemGroupRootContract {
  /**
   * The orientation of the timer item group.
   *
   * @defaultValue "vertical"
   */
  orientation?: "horizontal" | "vertical";
}

export type TimerActionProps = Omit<TimerActionTriggerProps, "action">;

export type TimerRootProps = TimerRootPrimitiveProps & TimerRootContract;

export interface TimerProps
  extends Omit<TimerRootProps, "children">, TimerContract {
  /**
   * Units to render, each with a localized label.
   *
   * @defaultValue ["hours", "minutes", "seconds"]
   */
  units?: TimerUnit[];
  /**
   * Whether to render play/pause and reset buttons.
   *
   * @defaultValue false
   */
  showControls?: boolean;
}

export type TimerItemLabelProps = HTMLArkProps<"div">;
// #endregion

// #region Parts
const Root = withTimerProvider<TimerRootProps>(TimerPrimitive.Root, {
  name: "Root",
  slot: "base",
});

const TimerArea = withTimerContext<TimerAreaProps>(TimerPrimitive.Area, {
  name: "Area",
});

const TimerItemGroupBase = withTimerItemGroupProvider<TimerItemGroupProps>(
  "div",
  {
    name: "ItemGroup",
    slot: "base",
  },
);

function TimerItemGroup(props: TimerItemGroupProps): JSX.Element {
  const [local, rest] = splitProps(props, ["orientation"]);

  return (
    <TimerItemGroupBase
      {...rest}
      data-orientation={local.orientation ?? "vertical"}
      data-part="item-group"
    />
  );
}

/**
 * Usable inside or outside `Timer.ItemGroup` (falls back to the default
 * item-group recipe).
 */
function TimerItem(props: TimerItemProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useContext(TimerItemGroupStylesContext);
  const slots = () => styles?.slots ?? timerItemGroupRecipe();

  return (
    <TimerPrimitive.Item
      data-part="item"
      data-scope="timer"
      {...rest}
      class={slots().item({ class: local.class })}
    />
  );
}

const TimerItemLabel = withTimerItemGroupContext<TimerItemLabelProps>("div", {
  name: "ItemLabel",
  slot: "label",
});

const TimerSeparator = withTimerContext<TimerSeparatorProps>(
  TimerPrimitive.Separator,
  { defaultProps: { children: ":" }, name: "Separator" },
);

const TimerControl = withTimerContext<TimerControlProps>(
  TimerPrimitive.Control,
  {
    name: "Control",
  },
);

const TimerActionTrigger = withTimerContext<TimerActionTriggerProps>(
  TimerPrimitive.ActionTrigger,
  { name: "ActionTrigger" },
);

function TimerPause(props: TimerActionProps): JSX.Element {
  const { m } = useLocale();

  return (
    <TimerActionTrigger
      {...props}
      action="pause"
      aria-label={m("timer.pause")}
    />
  );
}

function TimerResume(props: TimerActionProps): JSX.Element {
  const { m } = useLocale();

  return (
    <TimerActionTrigger
      {...props}
      action="resume"
      aria-label={m("timer.resume")}
    />
  );
}

function TimerStart(props: TimerActionProps): JSX.Element {
  const { m } = useLocale();

  return (
    <TimerActionTrigger
      {...props}
      action="start"
      aria-label={m("timer.start")}
    />
  );
}

function TimerReset(props: TimerActionProps): JSX.Element {
  const { m } = useLocale();

  return (
    <TimerActionTrigger
      {...props}
      action="reset"
      aria-label={m("timer.reset")}
    />
  );
}

function TimerRestart(props: TimerActionProps): JSX.Element {
  const { m } = useLocale();

  return (
    <TimerActionTrigger
      {...props}
      action="restart"
      aria-label={m("timer.restart")}
    />
  );
}

function TimerPlay(props: TimerActionProps): JSX.Element {
  const timer = useTimerContext();

  return (
    <Switch fallback={<TimerStart {...props} />}>
      <Match when={timer().running}>
        <TimerPause {...props} />
      </Match>
      <Match when={timer().paused}>
        <TimerResume {...props} />
      </Match>
    </Switch>
  );
}
// #endregion

// #region Shorthand
/** Play/pause toggle with a matching icon. */
function ShorthandPlay(props: { class?: string }): JSX.Element {
  const timer = useTimerContext();

  return (
    <TimerPlay
      asChild={(triggerProps) => (
        <Button {...triggerProps()} size="icon-sm" variant="ghost">
          <Show fallback={<PlayIcon />} when={timer().running}>
            <PauseIcon />
          </Show>
        </Button>
      )}
      class={props.class}
    />
  );
}

export function TimerShorthand(props: TimerProps): JSX.Element {
  const { m } = useLocale();
  const [local, rest] = splitProps(props, [
    "classNames",
    "showControls",
    "units",
  ]);
  const units = () => local.units ?? ["hours", "minutes", "seconds"];

  return (
    <Root {...rest}>
      <TimerArea class={local.classNames?.area}>
        <For each={units()}>
          {(unit, index) => (
            <>
              <Show when={index() > 0}>
                <TimerSeparator class={local.classNames?.separator} />
              </Show>
              <TimerItemGroup>
                <TimerItem type={unit} />
                <TimerItemLabel>
                  {m(`timer.${unit}` as MessageKey)}
                </TimerItemLabel>
              </TimerItemGroup>
            </>
          )}
        </For>
      </TimerArea>

      <Show when={local.showControls ?? false}>
        <TimerControl class={local.classNames?.control}>
          <ShorthandPlay class={local.classNames?.actionTrigger} />
          <TimerReset
            asChild={(triggerProps) => (
              <Button {...triggerProps()} size="icon-sm" variant="ghost">
                <ArrowCounterClockwiseIcon />
              </Button>
            )}
            class={local.classNames?.actionTrigger}
          />
        </TimerControl>
      </Show>
    </Root>
  );
}
// #endregion

export type {
  TimerActionTriggerProps,
  TimerAreaProps,
  TimerControlProps,
  TimerItemProps,
  TimerSeparatorProps,
} from "@ark-ui/solid";

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
  Root,
  Separator: TimerSeparator,
  Start: TimerStart,
});
