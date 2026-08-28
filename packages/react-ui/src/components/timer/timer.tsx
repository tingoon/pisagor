import { ark } from "@ark-ui/react/factory";
import { Timer as TimerPrimitive, useTimerContext } from "@ark-ui/react/timer";
import { timerItemGroupVariants, timerVariants } from "@pisagor/recipes/timer";
import type { ComponentProps } from "react";
import { Fragment } from "react";
import { TimerContext, TimerItemGroupContext, useTimer, useTimerItemGroup } from "./timer.context";

// #region Types
type TimerUnit = "hours" | "minutes" | "seconds";

export interface TimerItemGroupProps extends ComponentProps<typeof ark.div> {
  /**
   * The orientation of the timer item group.
   *
   * @defaultValue "vertical"
   */
  orientation?: "horizontal" | "vertical";
}

export interface TimerActionProps
  extends Omit<ComponentProps<typeof TimerPrimitive.ActionTrigger>, "action"> {}

export type TimerRootProps = ComponentProps<typeof TimerPrimitive.Root> & {
  units?: TimerUnit[];
  /** Auto-render Timer.Control with play and reset buttons */
  isControlsVisible?: boolean;
};

export type TimerAreaProps = ComponentProps<typeof TimerPrimitive.Area>;

export type TimerItemProps = ComponentProps<typeof TimerPrimitive.Item>;

export type TimerSeparatorProps = ComponentProps<typeof TimerPrimitive.Separator>;

export type TimerControlProps = ComponentProps<typeof TimerPrimitive.Control>;

export type TimerActionTriggerProps = ComponentProps<typeof TimerPrimitive.ActionTrigger>;

export type TimerItemLabelProps = ComponentProps<typeof ark.div>;
// #endregion

// #region Parts
export function TimerRoot({
  isControlsVisible,
  children,
  units,
  className,
  ...rest
}: TimerRootProps) {
  const slots = timerVariants();

  return (
    <TimerContext value={{ slots }}>
      <TimerPrimitive.Root {...rest} className={slots.base({ className })}>
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
      </TimerPrimitive.Root>
    </TimerContext>
  );
}

export function TimerArea({ className, ...rest }: TimerAreaProps) {
  const { slots } = useTimer();

  return <TimerPrimitive.Area {...rest} className={slots.area({ className })} />;
}

export function TimerItemGroup({
  orientation = "vertical",
  children,
  className,
  ...rest
}: TimerItemGroupProps) {
  const slots = timerItemGroupVariants();

  return (
    <TimerItemGroupContext value={{ slots }}>
      <ark.div
        {...rest}
        className={slots.base({ className })}
        data-orientation={orientation}
        data-part="item-group"
        data-scope="timer"
      >
        {children}
      </ark.div>
    </TimerItemGroupContext>
  );
}

export function TimerItem({ className, ...rest }: TimerItemProps) {
  const { slots } = useTimerItemGroup();

  return <TimerPrimitive.Item {...rest} className={slots.item({ className })} />;
}

export function TimerItemLabel({ className, ...rest }: TimerItemLabelProps) {
  const { slots } = useTimerItemGroup();

  return (
    <ark.div
      {...rest}
      className={slots.label({ className })}
      data-part="item-label"
      data-scope="timer"
    />
  );
}

export function TimerSeparator({ children, className, ...rest }: TimerSeparatorProps) {
  const { slots } = useTimer();

  return (
    <TimerPrimitive.Separator {...rest} className={slots.separator({ className })}>
      {children ?? ":"}
    </TimerPrimitive.Separator>
  );
}

export function TimerControl({ className, ...rest }: TimerControlProps) {
  const { slots } = useTimer();

  return <TimerPrimitive.Control {...rest} className={slots.control({ className })} />;
}

export function TimerActionTrigger(props: TimerActionTriggerProps) {
  return <TimerPrimitive.ActionTrigger {...props} />;
}

export function TimerPause(props: TimerActionProps) {
  return <TimerPrimitive.ActionTrigger {...props} action="pause" aria-label="Pause" />;
}

export function TimerResume(props: TimerActionProps) {
  return <TimerPrimitive.ActionTrigger {...props} action="resume" aria-label="Resume" />;
}

export function TimerStart(props: TimerActionProps) {
  return <TimerPrimitive.ActionTrigger {...props} action="start" aria-label="Start" />;
}

export function TimerReset(props: TimerActionProps) {
  return <TimerPrimitive.ActionTrigger {...props} action="reset" aria-label="Reset" />;
}

export function TimerRestart(props: TimerActionProps) {
  return <TimerPrimitive.ActionTrigger {...props} action="restart" aria-label="Restart" />;
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
TimerArea.displayName = "Timer.Area";
TimerItemGroup.displayName = "Timer.ItemGroup";
TimerItem.displayName = "Timer.Item";
TimerItemLabel.displayName = "Timer.ItemLabel";
TimerSeparator.displayName = "Timer.Separator";
TimerControl.displayName = "Timer.Control";
TimerActionTrigger.displayName = "Timer.ActionTrigger";
TimerPause.displayName = "Timer.Pause";
TimerResume.displayName = "Timer.Resume";
TimerStart.displayName = "Timer.Start";
TimerReset.displayName = "Timer.Reset";
TimerRestart.displayName = "Timer.Restart";
TimerPlay.displayName = "Timer.Play";
// #endregion
