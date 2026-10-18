import { Timer as TimerPrimitive, ark, useTimerContext } from "@ark-ui/react";
import type {
  PolymorphicProps,
  TimerActionTriggerProps,
  TimerRootProps as TimerRootPrimitiveProps,
  TimerSeparatorProps,
} from "@ark-ui/react";
import type {
  TimerItemGroupProps as BaseTimerItemGroupProps,
  TimerProps as BaseTimerRootProps,
} from "@pisagor/props";
import { timerItemGroupRecipe, timerRecipe } from "@pisagor/recipes";
import type {
  ComponentProps,
  ComponentPropsWithRef,
  FunctionComponent,
} from "react";
import { Fragment, use } from "react";
import { createSlotRecipeContext } from "../internal";
import { type MessageKey, useLocale } from "./provider/context";

// #region Context
const {
  useStyles,
  withContext: withTimerContext,
  withProvider: withTimerProvider,
} = createSlotRecipeContext({
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
type TimerUnit = "hours" | "minutes" | "seconds";

export interface TimerItemGroupProps
  extends
    ComponentPropsWithRef<"div">,
    PolymorphicProps,
    BaseTimerItemGroupProps {
  /**
   * The orientation of the timer item group.
   *
   * @defaultValue "vertical"
   */
  orientation?: "horizontal" | "vertical";
}

export interface TimerActionProps extends Omit<
  TimerActionTriggerProps,
  "action"
> {}

export interface TimerRootProps
  extends TimerRootPrimitiveProps, BaseTimerRootProps {
  units?: TimerUnit[];
  /** Auto-render Timer.Control with play and reset buttons */
  isControlsVisible?: boolean;
}

export type TimerItemLabelProps = ComponentPropsWithRef<"div"> &
  PolymorphicProps;
// #endregion

// #region Parts
const TimerRootBase = withTimerProvider(TimerPrimitive.Root, {
  name: "Root",
  slot: "base",
}) as FunctionComponent<TimerRootPrimitiveProps & BaseTimerRootProps>;

export function TimerRoot({
  isControlsVisible,
  children,
  units,
  ...rest
}: TimerRootProps) {
  const { m } = useLocale();

  return (
    <TimerRootBase {...rest}>
      {units && (
        <TimerArea>
          {units.map((unit, index) => (
            <Fragment key={unit}>
              {index > 0 && <TimerSeparator />}
              <TimerItemGroup>
                <TimerItem type={unit} />
                <TimerItemLabel>
                  {m(`timer.${unit}` as MessageKey)}
                </TimerItemLabel>
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
  ComponentPropsWithRef<"div"> & PolymorphicProps & BaseTimerItemGroupProps
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

/**
 * Usable inside or outside `Timer.ItemGroup` (falls back to the default
 * item-group recipe).
 */
export function TimerItem({
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

TimerItem.displayName = "Timer.Item";

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
  const { slots } = useStyles();

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
  const { m } = useLocale();

  return (
    <TimerPrimitive.ActionTrigger
      {...props}
      action="pause"
      aria-label={m("timer.pause")}
    />
  );
}

export function TimerResume(props: TimerActionProps) {
  const { m } = useLocale();

  return (
    <TimerPrimitive.ActionTrigger
      {...props}
      action="resume"
      aria-label={m("timer.resume")}
    />
  );
}

export function TimerStart(props: TimerActionProps) {
  const { m } = useLocale();

  return (
    <TimerPrimitive.ActionTrigger
      {...props}
      action="start"
      aria-label={m("timer.start")}
    />
  );
}

export function TimerReset(props: TimerActionProps) {
  const { m } = useLocale();

  return (
    <TimerPrimitive.ActionTrigger
      {...props}
      action="reset"
      aria-label={m("timer.reset")}
    />
  );
}

export function TimerRestart(props: TimerActionProps) {
  const { m } = useLocale();

  return (
    <TimerPrimitive.ActionTrigger
      {...props}
      action="restart"
      aria-label={m("timer.restart")}
    />
  );
}

export function TimerPlay(props: TimerActionProps) {
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
} from "@ark-ui/react";

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
