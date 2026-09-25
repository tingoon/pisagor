import { ark } from "@ark-ui/solid/factory";
import {
  Progress as ProgressPrimitive,
  type ProgressRootProps,
  type ProgressValueTextProps,
  useProgressContext,
} from "@ark-ui/solid/progress";
import {
  type CircularProgressRecipeSlot,
  circularProgressRecipe,
} from "@pisagor/recipes/circular-progress";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import type { VariantClassNames } from "../../internal/types";
import {
  CircularProgressSlotsContext,
  useCircularProgressSlots,
} from "./circular-progress.context";

type CircularProgressTrackProps = ComponentProps<typeof ark.svg>;
type CircularProgressValueProps = ProgressValueTextProps;
type CircularProgressClassNames = VariantClassNames<CircularProgressRecipeSlot>;

type CircularProgressRootProps = ProgressRootProps & {
  recipe?: typeof circularProgressRecipe;
};

export interface CircularProgressProps
  extends Omit<CircularProgressRootProps, "children"> {
  size?: number;
  thickness?: number;
  indeterminate?: boolean;
  isValueVisible?: boolean;
  children?: JSX.Element;
  classNames?: CircularProgressClassNames;
  trackProps?: Omit<
    CircularProgressTrackProps,
    "class" | "height" | "viewBox" | "width"
  >;
  valueProps?: Omit<CircularProgressValueProps, "children" | "class">;
}

interface CircularProgressTrackPartProps {
  size?: number;
  thickness?: number;
  class?: string;
  rangeClassName?: string;
  trackProps?: Omit<
    CircularProgressTrackProps,
    "class" | "height" | "viewBox" | "width"
  >;
}

function CircularProgressRoot(props: CircularProgressRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "recipe", "class"]);
  const slots = () => (local.recipe ?? circularProgressRecipe)();

  return (
    <CircularProgressSlotsContext value={{ slots: slots() }}>
      <ProgressPrimitive.Root
        {...rest}
        class={slots().base({ class: cn(local.class) })}
      >
        {local.children}
      </ProgressPrimitive.Root>
    </CircularProgressSlotsContext>
  );
}

function CircularProgressValueWrapper(props: {
  class?: string;
  children?: JSX.Element;
}): JSX.Element {
  const { slots } = useCircularProgressSlots();
  return (
    <span class={slots.valueWrapper({ class: cn(props.class) })}>
      {props.children}
    </span>
  );
}

function CircularProgressValue(props: CircularProgressValueProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useCircularProgressSlots();
  return (
    <ProgressPrimitive.ValueText
      {...rest}
      class={slots.value({ class: cn(local.class) })}
    />
  );
}

function CircularProgressTrack(
  props: CircularProgressTrackPartProps,
): JSX.Element {
  const { slots } = useCircularProgressSlots();
  const progress = useProgressContext();
  const size = () => props.size ?? 32;
  const thickness = () => props.thickness ?? 4;
  const radius = () => size() / 2 - thickness() / 2;
  const circumference = () => 2 * Math.PI * radius();
  const api = () => progress();
  const range = () => Math.max(api().max - api().min, 1);
  const normalizedValue = () => {
    const value = api().value;
    return value == null
      ? api().min
      : Math.min(Math.max(value, api().min), api().max);
  };
  const percent = () => (normalizedValue() - api().min) / range();
  const dashOffset = () => circumference() * (1 - percent());

  return (
    <ark.svg
      {...props.trackProps}
      aria-hidden="true"
      class={slots.track({ class: cn(props.class) })}
      data-part="circle"
      data-scope="circular-progress"
      height={size()}
      viewBox={`0 0 ${size()} ${size()}`}
      width={size()}
    >
      <circle
        cx={size() / 2}
        cy={size() / 2}
        data-part="track-bg"
        data-scope="circular-progress"
        r={radius()}
        stroke-width={thickness()}
      />
      <circle
        class={slots.range({ class: cn(props.rangeClassName) })}
        cx={size() / 2}
        cy={size() / 2}
        data-part="range"
        data-scope="circular-progress"
        r={radius()}
        stroke-dasharray={String(circumference())}
        stroke-dashoffset={String(
          api().value == null ? circumference() * 0.7 : dashOffset(),
        )}
        stroke-linecap="round"
        stroke-width={thickness()}
      />
    </ark.svg>
  );
}

export function CircularProgress(props: CircularProgressProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "size",
    "indeterminate",
    "isValueVisible",
    "value",
    "children",
    "thickness",
    "trackProps",
    "valueProps",
    "class",
    "classNames",
  ]);

  return (
    <CircularProgressRoot
      {...rest}
      class={local.class}
      value={local.indeterminate ? null : local.value}
    >
      <Show when={local.isValueVisible}>
        <CircularProgressValueWrapper class={local.classNames?.valueWrapper}>
          <CircularProgressValue
            {...local.valueProps}
            class={local.classNames?.value}
          />
        </CircularProgressValueWrapper>
      </Show>
      {local.children}
      <CircularProgressTrack
        class={local.classNames?.track}
        rangeClassName={local.classNames?.range}
        size={local.size ?? 32}
        thickness={local.thickness ?? 4}
        trackProps={local.trackProps}
      />
    </CircularProgressRoot>
  );
}
