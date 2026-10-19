import { Timer as TimerPrimitive, useTimerContext } from "@ark-ui/react";
import type {
  TimerActionTriggerProps,
  TimerAreaProps,
  TimerControlProps,
  TimerRootProps as TimerRootPrimitiveProps,
  TimerSeparatorProps,
} from "@ark-ui/react";
import {
  ArrowCounterClockwiseIcon,
  PauseIcon,
  PlayIcon,
} from "@phosphor-icons/react";
import type {
  TimerContract,
  TimerItemGroupRootContract,
  TimerRootContract,
} from "@pisagor/contracts";
import { timerItemGroupRecipe, timerRecipe } from "@pisagor/recipes";
import type { ComponentProps, ComponentPropsWithRef } from "react";
import { Fragment, use } from "react";
import { createSlotRecipeContext } from "../internal";
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
  extends ComponentPropsWithRef<"div">, TimerItemGroupRootContract {
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

export type TimerItemLabelProps = ComponentPropsWithRef<"div">;
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

function TimerItemGroup({
  orientation = "vertical",
  ...rest
}: TimerItemGroupProps) {
  return (
    <TimerItemGroupBase
      {...rest}
      data-orientation={orientation}
      data-part="item-group"
    />
  );
}

/**
 * Usable inside or outside `Timer.ItemGroup` (falls back to the default
 * item-group recipe).
 */
function TimerItem({
  className,
  ...rest
}: ComponentProps<typeof TimerPrimitive.Item>) {
  const styles = use(TimerItemGroupStylesContext);
  const slots = styles?.slots ?? timerItemGroupRecipe();

  return (
    <TimerPrimitive.Item
      data-part="item"
      data-scope="timer"
      {...rest}
      className={slots.item({ className })}
    />
  );
}

const TimerItemLabel = withTimerItemGroupContext<ComponentProps<"div">>("div", {
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

function TimerPause(props: TimerActionProps) {
  const { m } = useLocale();

  return (
    <TimerActionTrigger
      {...props}
      action="pause"
      aria-label={m("timer.pause")}
    />
  );
}

function TimerResume(props: TimerActionProps) {
  const { m } = useLocale();

  return (
    <TimerActionTrigger
      {...props}
      action="resume"
      aria-label={m("timer.resume")}
    />
  );
}

function TimerStart(props: TimerActionProps) {
  const { m } = useLocale();

  return (
    <TimerActionTrigger
      {...props}
      action="start"
      aria-label={m("timer.start")}
    />
  );
}

function TimerReset(props: TimerActionProps) {
  const { m } = useLocale();

  return (
    <TimerActionTrigger
      {...props}
      action="reset"
      aria-label={m("timer.reset")}
    />
  );
}

function TimerRestart(props: TimerActionProps) {
  const { m } = useLocale();

  return (
    <TimerActionTrigger
      {...props}
      action="restart"
      aria-label={m("timer.restart")}
    />
  );
}

function TimerPlay(props: TimerActionProps) {
  const { paused, running } = useTimerContext();

  if (running) {
    return <TimerPause {...props} />;
  }

  if (paused) {
    return <TimerResume {...props} />;
  }

  return <TimerStart {...props} />;
}
// #endregion

// #region Shorthand
/** Play/pause toggle with a matching icon. */
function ShorthandPlay({ className }: { className?: string }) {
  const { running } = useTimerContext();

  return (
    <TimerPlay asChild className={className}>
      <Button size="icon-sm" variant="ghost">
        {running ? <PauseIcon /> : <PlayIcon />}
      </Button>
    </TimerPlay>
  );
}

export function TimerShorthand({
  classNames,
  showControls = false,
  units = ["hours", "minutes", "seconds"],
  ...rest
}: TimerProps) {
  const { m } = useLocale();

  return (
    <Root {...rest}>
      <TimerArea className={classNames?.area}>
        {units.map((unit, index) => (
          <Fragment key={unit}>
            {index > 0 && <TimerSeparator className={classNames?.separator} />}
            <TimerItemGroup>
              <TimerItem type={unit} />
              <TimerItemLabel>
                {m(`timer.${unit}` as MessageKey)}
              </TimerItemLabel>
            </TimerItemGroup>
          </Fragment>
        ))}
      </TimerArea>

      {showControls && (
        <TimerControl className={classNames?.control}>
          <ShorthandPlay className={classNames?.actionTrigger} />
          <TimerReset asChild className={classNames?.actionTrigger}>
            <Button size="icon-sm" variant="ghost">
              <ArrowCounterClockwiseIcon />
            </Button>
          </TimerReset>
        </TimerControl>
      )}
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
} from "@ark-ui/react";

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
