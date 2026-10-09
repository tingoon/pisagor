import { ark } from "@ark-ui/react/factory";
import type {
  TimerActionTriggerProps,
  TimerRootProps as TimerPrimitiveRootProps,
  TimerSeparatorProps,
} from "@ark-ui/react/timer";
import { Timer as TimerPrimitive, useTimerContext } from "@ark-ui/react/timer";
import type {
  TimerItemGroupProps as BaseTimerItemGroupProps,
  TimerProps as BaseTimerRootProps,
} from "@pisagor/props";
import { timerItemGroupRecipe, timerRecipe } from "@pisagor/recipes";
import type { ComponentProps, FunctionComponent } from "react";
import { Fragment } from "react";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";

// #region Context
const {
  useStyles: useTimer,
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

export interface TimerItemGroupProps
  extends ComponentProps<typeof ark.div>,
    BaseTimerItemGroupProps {
  /**
   * The orientation of the timer item group.
   *
   * @defaultValue "vertical"
   */
  orientation?: "horizontal" | "vertical";
}

export interface TimerActionProps
  extends Omit<TimerActionTriggerProps, "action"> {}

export interface TimerRootProps
  extends TimerPrimitiveRootProps,
    BaseTimerRootProps {
  units?: TimerUnit[];
  /** Auto-render Timer.Control with play and reset buttons */
  isControlsVisible?: boolean;
}

export type TimerItemLabelProps = ComponentProps<typeof ark.div>;
// #endregion

// #region Parts
const TimerRootBase = withTimerProvider(TimerPrimitive.Root, {
  name: "Root",
  slot: "base",
}) as FunctionComponent<TimerPrimitiveRootProps & BaseTimerRootProps>;

export function TimerRoot({
  isControlsVisible,
  children,
  units,
  ...rest
}: TimerRootProps) {
  return (
    <TimerRootBase {...rest}>
      {units && (
        <TimerArea>
          {units.map((unit, index) => (
            <Fragment key={unit}>
              {index > 0 && <TimerSeparator />}
              <TimerItemGroup>
                <TimerItem type={unit} />
                <TimerItemLabel>{unit}</TimerItemLabel>
              </TimerItemGroup>
            </Fragment>
          ))}
        </TimerArea>
      )}
      {isControlsVisible && (
        <TimerControl>
          <TimerPlay />
          <TimerReset />
        </TimerControl>
      )}
      {children}
    </TimerRootBase>
  );
}

export const TimerArea = withTimerContext(TimerPrimitive.Area, {
  name: "Area",
});

const TimerItemGroupBase = withTimerItemGroupProvider(ark.div, {
  name: "ItemGroup",
  slot: "base",
}) as FunctionComponent<
  ComponentProps<typeof ark.div> & BaseTimerItemGroupProps
>;

export function TimerItemGroup({
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

export const TimerItem = withTimerItemGroupContext(TimerPrimitive.Item, {
  name: "Item",
});

export const TimerItemLabel = withTimerItemGroupContext(ark.div, {
  defaultProps: { "data-part": "item-label" },
  name: "ItemLabel",
  slot: "label",
});

export function TimerSeparator({
  children,
  className,
  ...rest
}: TimerSeparatorProps) {
  const { slots } = useTimer();

  return (
    <TimerPrimitive.Separator
      {...rest}
      className={slots.separator({ className })}
    >
      {children ?? ":"}
    </TimerPrimitive.Separator>
  );
}

export const TimerControl = withTimerContext(TimerPrimitive.Control, {
  name: "Control",
});

export function TimerActionTrigger(props: TimerActionTriggerProps) {
  return <TimerPrimitive.ActionTrigger {...props} />;
}

export function TimerPause(props: TimerActionProps) {
  return (
    <TimerPrimitive.ActionTrigger
      {...props}
      action="pause"
      aria-label="Pause"
    />
  );
}

export function TimerResume(props: TimerActionProps) {
  return (
    <TimerPrimitive.ActionTrigger
      {...props}
      action="resume"
      aria-label="Resume"
    />
  );
}

export function TimerStart(props: TimerActionProps) {
  return (
    <TimerPrimitive.ActionTrigger
      {...props}
      action="start"
      aria-label="Start"
    />
  );
}

export function TimerReset(props: TimerActionProps) {
  return (
    <TimerPrimitive.ActionTrigger
      {...props}
      action="reset"
      aria-label="Reset"
    />
  );
}

export function TimerRestart(props: TimerActionProps) {
  return (
    <TimerPrimitive.ActionTrigger
      {...props}
      action="restart"
      aria-label="Restart"
    />
  );
}

export function TimerPlay(props: TimerActionProps) {
  const { paused } = useTimerContext();

  if (paused) {
    return <TimerResume {...props} />;
  }

  return <TimerStart {...props} />;
}
// #endregion

// #region Display Names
TimerRoot.displayName = "Timer";
TimerItemGroup.displayName = "Timer.ItemGroup";
TimerSeparator.displayName = "Timer.Separator";
TimerActionTrigger.displayName = "Timer.ActionTrigger";
TimerPause.displayName = "Timer.Pause";
TimerResume.displayName = "Timer.Resume";
TimerStart.displayName = "Timer.Start";
TimerReset.displayName = "Timer.Reset";
TimerRestart.displayName = "Timer.Restart";
TimerPlay.displayName = "Timer.Play";

// #endregion

export type {
  TimerActionTriggerProps,
  TimerAreaProps,
  TimerControlProps,
  TimerItemProps,
  TimerSeparatorProps,
} from "@ark-ui/react/timer";

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
