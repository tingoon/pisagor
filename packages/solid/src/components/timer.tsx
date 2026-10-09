import { ark } from "@ark-ui/solid/factory";
import type {
  TimerActionTriggerProps,
  TimerAreaProps,
  TimerControlProps,
  TimerItemProps,
  TimerRootProps as TimerPrimitiveRootProps,
  TimerSeparatorProps,
} from "@ark-ui/solid/timer";
import { Timer as TimerPrimitive, useTimerContext } from "@ark-ui/solid/timer";
import type {
  TimerItemGroupProps as BaseTimerItemGroupProps,
  TimerProps as BaseTimerRootProps,
} from "@pisagor/props";
import { timerItemGroupRecipe, timerRecipe } from "@pisagor/recipes";
import type { Component, ComponentProps, JSX } from "solid-js";
import { For, Show, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";

// #region Context
const {
  useStyles: useTimer,
  withContext: withTimerContext,
  withProvider: withTimerProvider,
} = createSlotRecipeContext({ name: "Timer", recipe: timerRecipe });

const {
  withContext: withTimerItemGroupContext,
  withProvider: withTimerItemGroupProvider,
} = createSlotRecipeContext({
  // Same scope as Timer so recipe selectors ([data-scope=timer]) keep matching.
  name: "Timer",
  recipe: timerItemGroupRecipe,
});
// #endregion

type TimerUnit = "hours" | "minutes" | "seconds";

export interface TimerItemGroupProps
  extends ComponentProps<typeof ark.div>,
    BaseTimerItemGroupProps {
  orientation?: "horizontal" | "vertical";
}

export interface TimerActionProps
  extends Omit<TimerActionTriggerProps, "action"> {}

export interface TimerRootProps
  extends TimerPrimitiveRootProps,
    BaseTimerRootProps {
  units?: TimerUnit[];
  isControlsVisible?: boolean;
}

export type TimerItemLabelProps = ComponentProps<typeof ark.div>;

const TimerRootProvider: Component<
  TimerPrimitiveRootProps & BaseTimerRootProps
> = withTimerProvider(TimerPrimitive.Root, { name: "Root", slot: "base" });

export function TimerRoot(props: TimerRootProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "isControlsVisible",
    "children",
    "units",
  ]);

  return (
    <TimerRootProvider {...rest}>
      <Show when={local.units}>
        <TimerArea>
          <For each={local.units}>
            {(unit, index) => (
              <>
                <Show when={index() > 0}>
                  <TimerSeparator />
                </Show>
                <TimerItemGroup>
                  <TimerItem type={unit} />
                  <TimerItemLabel>{unit}</TimerItemLabel>
                </TimerItemGroup>
              </>
            )}
          </For>
        </TimerArea>
      </Show>
      <Show when={local.isControlsVisible}>
        <TimerControl>
          <TimerPlay />
          <TimerReset />
        </TimerControl>
      </Show>
      {local.children}
    </TimerRootProvider>
  );
}

export const TimerArea: Component<TimerAreaProps> = withTimerContext(
  TimerPrimitive.Area,
  { name: "Area" },
);

const TimerItemGroupBase: Component<
  ComponentProps<typeof ark.div> & BaseTimerItemGroupProps
> = withTimerItemGroupProvider(ark.div, {
  name: "ItemGroup",
  slot: "base",
});

export function TimerItemGroup(props: TimerItemGroupProps): JSX.Element {
  const [local, rest] = splitProps(props, ["orientation"]);
  return (
    <TimerItemGroupBase
      {...rest}
      data-orientation={local.orientation ?? "vertical"}
      data-part="item-group"
    />
  );
}

export const TimerItem: Component<TimerItemProps> = withTimerItemGroupContext(
  TimerPrimitive.Item,
  { name: "Item" },
);

export const TimerItemLabel: Component<TimerItemLabelProps> =
  withTimerItemGroupContext(ark.div, {
    defaultProps: { "data-part": "item-label" },
    name: "ItemLabel",
    slot: "label",
  });

export function TimerSeparator(props: TimerSeparatorProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const styles = useTimer();
  return (
    <TimerPrimitive.Separator
      {...rest}
      class={styles.slots.separator({ class: local.class })}
    >
      {local.children ?? ":"}
    </TimerPrimitive.Separator>
  );
}

export const TimerControl: Component<TimerControlProps> = withTimerContext(
  TimerPrimitive.Control,
  { name: "Control" },
);

export function TimerActionTrigger(
  props: TimerActionTriggerProps,
): JSX.Element {
  return <TimerPrimitive.ActionTrigger {...props} />;
}

export function TimerPause(props: TimerActionProps): JSX.Element {
  return (
    <TimerPrimitive.ActionTrigger
      {...props}
      action="pause"
      aria-label="Pause"
    />
  );
}

export function TimerResume(props: TimerActionProps): JSX.Element {
  return (
    <TimerPrimitive.ActionTrigger
      {...props}
      action="resume"
      aria-label="Resume"
    />
  );
}

export function TimerStart(props: TimerActionProps): JSX.Element {
  return (
    <TimerPrimitive.ActionTrigger
      {...props}
      action="start"
      aria-label="Start"
    />
  );
}

export function TimerReset(props: TimerActionProps): JSX.Element {
  return (
    <TimerPrimitive.ActionTrigger
      {...props}
      action="reset"
      aria-label="Reset"
    />
  );
}

export function TimerRestart(props: TimerActionProps): JSX.Element {
  return (
    <TimerPrimitive.ActionTrigger
      {...props}
      action="restart"
      aria-label="Restart"
    />
  );
}

export function TimerPlay(props: TimerActionProps): JSX.Element {
  const timer = useTimerContext();
  return (
    <Show fallback={<TimerStart {...props} />} when={timer().paused}>
      <TimerResume {...props} />
    </Show>
  );
}

export type {
  TimerActionTriggerProps,
  TimerAreaProps,
  TimerControlProps,
  TimerItemProps,
  TimerSeparatorProps,
} from "@ark-ui/solid/timer";

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
