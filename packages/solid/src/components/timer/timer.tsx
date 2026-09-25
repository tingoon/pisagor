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
import { timerItemGroupRecipe, timerRecipe } from "@pisagor/recipes/timer";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { For, Show, splitProps } from "solid-js";
import {
  TimerContext,
  TimerItemGroupContext,
  useTimer,
  useTimerItemGroup,
} from "./timer.context";

type TimerUnit = "hours" | "minutes" | "seconds";

export interface TimerItemGroupProps extends ComponentProps<typeof ark.div> {
  orientation?: "horizontal" | "vertical";
  itemGroupRecipe?: typeof timerItemGroupRecipe;
}

export interface TimerActionProps
  extends Omit<TimerActionTriggerProps, "action"> {}

export interface TimerRootProps extends TimerPrimitiveRootProps {
  units?: TimerUnit[];
  isControlsVisible?: boolean;
  recipe?: typeof timerRecipe;
}

export type TimerItemLabelProps = ComponentProps<typeof ark.div>;

export function TimerRoot(props: TimerRootProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "isControlsVisible",
    "children",
    "units",
    "recipe",
    "class",
  ]);
  const slots = () => (local.recipe ?? timerRecipe)();

  return (
    <TimerContext value={{ slots: slots() }}>
      <TimerPrimitive.Root
        {...rest}
        class={slots().base({ class: cn(local.class) })}
      >
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
      </TimerPrimitive.Root>
    </TimerContext>
  );
}

export function TimerArea(props: TimerAreaProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useTimer();
  return (
    <TimerPrimitive.Area {...rest} class={slots.area({ class: local.class })} />
  );
}

export function TimerItemGroup(props: TimerItemGroupProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "orientation",
    "children",
    "itemGroupRecipe",
    "class",
  ]);
  const slots = () => (local.itemGroupRecipe ?? timerItemGroupRecipe)();
  return (
    <TimerItemGroupContext value={{ slots: slots() }}>
      <ark.div
        {...rest}
        class={slots().base({ class: cn(local.class) })}
        data-orientation={local.orientation ?? "vertical"}
        data-part="item-group"
        data-scope="timer"
      >
        {local.children}
      </ark.div>
    </TimerItemGroupContext>
  );
}

export function TimerItem(props: TimerItemProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useTimerItemGroup();
  return (
    <TimerPrimitive.Item {...rest} class={slots.item({ class: local.class })} />
  );
}

export function TimerItemLabel(props: TimerItemLabelProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useTimerItemGroup();
  return (
    <ark.div
      {...rest}
      class={slots.label({ class: cn(local.class) })}
      data-part="item-label"
      data-scope="timer"
    />
  );
}

export function TimerSeparator(props: TimerSeparatorProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useTimer();
  return (
    <TimerPrimitive.Separator
      {...rest}
      class={slots.separator({ class: local.class })}
    >
      {local.children ?? ":"}
    </TimerPrimitive.Separator>
  );
}

export function TimerControl(props: TimerControlProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useTimer();
  return (
    <TimerPrimitive.Control
      {...rest}
      class={slots.control({ class: local.class })}
    />
  );
}

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
