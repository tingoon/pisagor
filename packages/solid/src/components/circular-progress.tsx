import { ark } from "@ark-ui/solid/factory";
import {
  Progress as ProgressPrimitive,
  type ProgressRootProps,
  type ProgressRootProviderProps,
  type ProgressValueTextProps,
  type UseProgressReturn,
  useProgress,
  useProgressContext,
} from "@ark-ui/solid/progress";
import type { CircularProgressProps as BaseCircularProgressProps } from "@pisagor/props";
import {
  type CircularProgressRecipeSlot,
  circularProgressRecipe,
} from "@pisagor/recipes";
import type { Component, ComponentProps, JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import type { VariantClassNames } from "../internal/types";

// #region Context
const {
  useStyles: useCircularProgress,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "CircularProgress",
  recipe: circularProgressRecipe,
});
// #endregion

type CircularProgressTrackProps = ComponentProps<typeof ark.svg>;
type CircularProgressValueProps = ProgressValueTextProps;
type CircularProgressClassNames = VariantClassNames<CircularProgressRecipeSlot>;

type CircularProgressRootProps = ProgressRootProviderProps &
  BaseCircularProgressProps;

export interface CircularProgressProps
  extends Omit<ProgressRootProps, "children">,
    BaseCircularProgressProps {
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

const CircularProgressRoot: Component<CircularProgressRootProps> = withProvider(
  ProgressPrimitive.RootProvider,
  { name: "Root", slot: "base" },
);

/**
 * Progressbar semantics for the root. Ark only exposes them on `Track` /
 * `Circle`, which the hand-drawn ring does not render.
 */
function getProgressbarProps(progress: ReturnType<UseProgressReturn>) {
  if (progress.indeterminate) return { role: "progressbar" } as const;

  return {
    "aria-valuemax": progress.max,
    "aria-valuemin": progress.min,
    "aria-valuenow": progress.value ?? undefined,
    "aria-valuetext": progress.valueAsString,
    role: "progressbar",
  } as const;
}

const CircularProgressValueWrapper = withContext("span", {
  defaultProps: { "data-part": "value-wrapper" },
  name: "ValueWrapper",
  slot: "valueWrapper",
});

const CircularProgressValue: Component<CircularProgressValueProps> =
  withContext(ProgressPrimitive.ValueText, {
    name: "Value",
  });

function CircularProgressTrack(
  props: CircularProgressTrackPartProps,
): JSX.Element {
  const styles = useCircularProgress();
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
      class={styles.slots.track({ class: props.class })}
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
        class={styles.slots.range({ class: props.rangeClassName })}
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
  const [local, machine, rest] = splitProps(
    props,
    [
      "size",
      "indeterminate",
      "isValueVisible",
      "children",
      "thickness",
      "trackProps",
      "valueProps",
      "class",
      "classNames",
    ],
    [
      "defaultValue",
      "formatOptions",
      "id",
      "ids",
      "locale",
      "max",
      "min",
      "onValueChange",
      "orientation",
      "translations",
      "value",
    ],
  );
  const progress = useProgress(() => ({
    ...machine,
    value: local.indeterminate ? null : machine.value,
  }));

  return (
    <CircularProgressRoot
      {...rest}
      {...getProgressbarProps(progress())}
      class={local.class}
      value={progress}
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
