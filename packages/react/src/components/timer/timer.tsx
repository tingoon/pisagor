import { ark } from "@ark-ui/react/factory";
import { Timer as TimerPrimitive, useTimerContext as useTimer } from "@ark-ui/react/timer";
import {
  timerAreaVariants,
  timerControlVariants,
  timerItemGroupVariants,
  timerItemLabelVariants,
  timerItemVariants,
  timerSeparatorVariants,
  timerVariants,
} from "@pisagor/styles/ui/timer";
import type { ComponentProps } from "react";
import { Fragment } from "react";
import type { WithTestId } from "../../internal/types";

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

export type TimerRootProps = ComponentProps<typeof TimerPrimitive.Root> &
  WithTestId & {
    units?: TimerUnit[];
    /** Auto-render Timer.Control with play and reset buttons */
    isControlsVisible?: boolean;
  };

export type TimerAreaProps = ComponentProps<typeof TimerPrimitive.Area>;

export type TimerItemProps = ComponentProps<typeof TimerPrimitive.Item>;

export type TimerSeparatorProps = ComponentProps<typeof TimerPrimitive.Separator>;

export type TimerControlProps = ComponentProps<typeof TimerPrimitive.Control>;

export type TimerActionTriggerProps = ComponentProps<typeof TimerPrimitive.ActionTrigger>;
// #endregion

// #region Parts
export function TimerRoot({
  className,
  units,
  isControlsVisible,
  children,
  testId,
  ...rest
}: TimerRootProps) {
  return (
    <TimerPrimitive.Root {...rest} className={timerVariants({ className })} data-testid={testId}>
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
  );
}

export function TimerArea({ className, ...rest }: TimerAreaProps) {
  return <TimerPrimitive.Area {...rest} className={timerAreaVariants({ className })} />;
}

export function TimerItemGroup({
  orientation = "vertical",
  className,
  ...rest
}: TimerItemGroupProps) {
  return (
    <ark.div
      {...rest}
      className={timerItemGroupVariants({ className })}
      data-orientation={orientation}
      data-part="item-group"
      data-scope="timer"
    />
  );
}

export function TimerItem({ className, ...rest }: TimerItemProps) {
  return <TimerPrimitive.Item {...rest} className={timerItemVariants({ className })} />;
}

export function TimerItemLabel({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={timerItemLabelVariants({ className })}
      data-part="item-label"
      data-scope="timer"
    />
  );
}

export function TimerSeparator({ className, children, ...rest }: TimerSeparatorProps) {
  return (
    <TimerPrimitive.Separator {...rest} className={timerSeparatorVariants({ className })}>
      {children ?? ":"}
    </TimerPrimitive.Separator>
  );
}

export function TimerControl({ className, ...rest }: TimerControlProps) {
  return <TimerPrimitive.Control {...rest} className={timerControlVariants({ className })} />;
}

export function TimerActionTrigger(props: TimerActionTriggerProps) {
  return <TimerPrimitive.ActionTrigger {...props} />;
}

export function TimerPause(props: TimerActionProps) {
  return <TimerPrimitive.ActionTrigger aria-label="Pause" {...props} action="pause" />;
}

export function TimerResume(props: TimerActionProps) {
  return <TimerPrimitive.ActionTrigger aria-label="Resume" {...props} action="resume" />;
}

export function TimerStart(props: TimerActionProps) {
  return <TimerPrimitive.ActionTrigger aria-label="Start" {...props} action="start" />;
}

export function TimerReset(props: TimerActionProps) {
  return <TimerPrimitive.ActionTrigger aria-label="Reset" {...props} action="reset" />;
}

export function TimerRestart(props: TimerActionProps) {
  return <TimerPrimitive.ActionTrigger aria-label="Restart" {...props} action="restart" />;
}

export function TimerPlay(props: TimerActionProps) {
  const { paused } = useTimer();

  if (paused) {
    return <TimerResume {...props} />;
  }

  return <TimerStart {...props} />;
}

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
