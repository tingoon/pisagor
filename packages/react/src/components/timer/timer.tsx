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
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import { Fragment } from "react";
import type { WithTestId } from "../../internal/types";

// #region Types
type TimerUnit = "hours" | "minutes" | "seconds";

interface TimerItemGroupProps extends ComponentProps<typeof ark.div> {
  /**
   * The orientation of the timer item group.
   *
   * @defaultValue "vertical"
   */
  orientation?: "horizontal" | "vertical";
}

interface TimerActionProps
  extends Omit<ComponentProps<typeof TimerPrimitive.ActionTrigger>, "action"> {}

interface TimerRootProps extends ComponentProps<typeof TimerPrimitive.Root>, WithTestId {
  units?: TimerUnit[];
  /** Auto-render Timer.Control with play and reset buttons */
  isControlsVisible?: boolean;
}

// #endregion

// #region Components
export function TimerRoot({
  className,
  units,
  isControlsVisible,
  children,
  testId,
  ...rest
}: TimerRootProps) {
  return (
    <TimerPrimitive.Root {...rest} className={cn(timerVariants(), className)} data-testid={testId}>
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
TimerRoot.displayName = "Timer";

export function TimerArea({ className, ...rest }: ComponentProps<typeof TimerPrimitive.Area>) {
  return <TimerPrimitive.Area {...rest} className={cn(timerAreaVariants(), className)} />;
}
TimerArea.displayName = "Timer.Area";

export function TimerItemGroup({
  orientation = "vertical",
  className,
  ...rest
}: TimerItemGroupProps) {
  return (
    <ark.div
      {...rest}
      className={cn(timerItemGroupVariants(), className)}
      data-orientation={orientation}
      data-part="item-group"
      data-scope="timer"
    />
  );
}
TimerItemGroup.displayName = "Timer.ItemGroup";

export function TimerItem({ className, ...rest }: ComponentProps<typeof TimerPrimitive.Item>) {
  return <TimerPrimitive.Item {...rest} className={cn(timerItemVariants(), className)} />;
}
TimerItem.displayName = "Timer.Item";

export function TimerItemLabel({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={cn(timerItemLabelVariants(), className)}
      data-part="item-label"
      data-scope="timer"
    />
  );
}
TimerItemLabel.displayName = "Timer.ItemLabel";

export function TimerSeparator({
  className,
  children,
  ...rest
}: ComponentProps<typeof TimerPrimitive.Separator>) {
  return (
    <TimerPrimitive.Separator {...rest} className={cn(timerSeparatorVariants(), className)}>
      {children ?? ":"}
    </TimerPrimitive.Separator>
  );
}
TimerSeparator.displayName = "Timer.Separator";

export function TimerControl({
  className,
  ...rest
}: ComponentProps<typeof TimerPrimitive.Control>) {
  return <TimerPrimitive.Control {...rest} className={cn(timerControlVariants(), className)} />;
}
TimerControl.displayName = "Timer.Control";

export function TimerActionTrigger(props: ComponentProps<typeof TimerPrimitive.ActionTrigger>) {
  return <TimerPrimitive.ActionTrigger {...props} />;
}
TimerActionTrigger.displayName = "Timer.ActionTrigger";

export function TimerPause(props: TimerActionProps) {
  return <TimerPrimitive.ActionTrigger aria-label="Pause" {...props} action="pause" />;
}
TimerPause.displayName = "Timer.Pause";

export function TimerResume(props: TimerActionProps) {
  return <TimerPrimitive.ActionTrigger aria-label="Resume" {...props} action="resume" />;
}
TimerResume.displayName = "Timer.Resume";

export function TimerStart(props: TimerActionProps) {
  return <TimerPrimitive.ActionTrigger aria-label="Start" {...props} action="start" />;
}
TimerStart.displayName = "Timer.Start";

export function TimerReset(props: TimerActionProps) {
  return <TimerPrimitive.ActionTrigger aria-label="Reset" {...props} action="reset" />;
}
TimerReset.displayName = "Timer.Reset";

export function TimerRestart(props: TimerActionProps) {
  return <TimerPrimitive.ActionTrigger aria-label="Restart" {...props} action="restart" />;
}
TimerRestart.displayName = "Timer.Restart";

export function TimerPlay(props: TimerActionProps) {
  const { paused } = useTimer();

  if (paused) {
    return <TimerResume {...props} />;
  }

  return <TimerStart {...props} />;
}
TimerPlay.displayName = "Timer.Play";
// #endregion
