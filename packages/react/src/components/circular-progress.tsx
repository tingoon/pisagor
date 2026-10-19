import {
  Progress as ProgressPrimitive,
  useProgress,
  useProgressContext,
} from "@ark-ui/react";
import type {
  ProgressRootProps,
  ProgressRootProviderProps,
  ProgressValueTextProps,
  UseProgressReturn,
} from "@ark-ui/react";
import type {
  CircularProgressContract,
  CircularProgressRootContract,
} from "@pisagor/contracts";
import { circularProgressRecipe } from "@pisagor/recipes";
import type { ComponentProps, FunctionComponent, ReactNode } from "react";
import { createSlotRecipeContext } from "../internal";

// #region Context
const { useStyles, withContext, withProvider } = createSlotRecipeContext({
  name: "CircularProgress",
  recipe: circularProgressRecipe,
});
// #endregion

// #region Parts
const CircularProgressRoot = withProvider<
  ComponentProps<typeof ProgressPrimitive.RootProvider> &
    CircularProgressRootContract
>(ProgressPrimitive.RootProvider, { name: "Root" }) as FunctionComponent<
  ProgressRootProviderProps & CircularProgressRootContract
>;

/**
 * Progressbar semantics for the root. Ark only exposes them on `Track` /
 * `Circle`, which the hand-drawn ring does not render.
 */
function getProgressbarProps(progress: UseProgressReturn) {
  if (progress.indeterminate) return { role: "progressbar" } as const;

  return {
    "aria-valuemax": progress.max,
    "aria-valuemin": progress.min,
    "aria-valuenow": progress.value ?? undefined,
    "aria-valuetext": progress.valueAsString,
    role: "progressbar",
  } as const;
}

const CircularProgressValueWrapper = withContext<ComponentProps<"span">>(
  "span",
  { name: "ValueWrapper" },
);

const CircularProgressValueText = withContext<
  ComponentProps<typeof ProgressPrimitive.ValueText>
>(ProgressPrimitive.ValueText, { name: "ValueText" });

interface CircularProgressTrackPartProps {
  size?: number;
  thickness?: number;
  className?: string;
  rangeClassName?: string;
  trackProps?: Omit<
    ComponentProps<"svg">,
    "className" | "height" | "viewBox" | "width"
  >;
}

function CircularProgressTrack({
  size = 32,
  rangeClassName,
  thickness = 4,
  trackProps,
  className,
}: CircularProgressTrackPartProps) {
  const { slots } = useStyles();
  const { max, min, value } = useProgressContext();

  const radius = size / 2 - thickness / 2;
  const circumference = 2 * Math.PI * radius;
  const range = Math.max(max - min, 1);
  const normalizedValue =
    value == null ? min : Math.min(Math.max(value, min), max);
  const percent = (normalizedValue - min) / range;
  const dashOffset = circumference * (1 - percent);

  return (
    <svg
      {...trackProps}
      aria-hidden="true"
      className={slots.track({ className })}
      data-part="circle"
      data-scope="circular-progress"
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      width={size}
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        data-part="track-bg"
        data-scope="circular-progress"
        r={radius}
        strokeWidth={thickness}
      />
      <circle
        className={slots.range({ className: rangeClassName })}
        cx={size / 2}
        cy={size / 2}
        data-part="range"
        data-scope="circular-progress"
        r={radius}
        strokeDasharray={circumference}
        strokeDashoffset={value == null ? circumference * 0.7 : dashOffset}
        strokeLinecap="round"
        strokeWidth={thickness}
      />
    </svg>
  );
}
// #endregion

// #region Types
export interface CircularProgressProps
  extends
    Omit<ProgressRootProps, "children">,
    CircularProgressRootContract,
    CircularProgressContract {
  /**
   * Visual size preset for the progress circle.
   *
   * @defaultValue 32
   */
  size?: number;
  /**
   * Stroke thickness in pixels.
   *
   * @defaultValue 4
   */
  thickness?: number;
  /**
   * Whether to show indeterminate progress.
   *
   * @defaultValue false
   */
  indeterminate?: boolean;
  /** When true, renders the numeric value text centered inside the circle. */
  isValueVisible?: boolean;
  children?: ReactNode;
  /** Extra props forwarded to the circular progress track element */
  trackProps?: Omit<
    ComponentProps<"svg">,
    "className" | "height" | "viewBox" | "width"
  >;
  /** Extra props forwarded to the circular progress value element */
  valueProps?: Omit<ProgressValueTextProps, "children" | "className">;
}
// #endregion

// #region Closed
export function CircularProgress({
  size = 32,
  indeterminate = false,
  isValueVisible,
  children,
  thickness = 4,
  trackProps,
  valueProps,
  className,
  classNames,
  defaultValue,
  formatOptions,
  id,
  ids,
  locale,
  max,
  min,
  onValueChange,
  orientation,
  translations,
  value,
  ...rest
}: CircularProgressProps) {
  const progress = useProgress({
    defaultValue,
    formatOptions,
    id,
    ids,
    locale,
    max,
    min,
    onValueChange,
    orientation,
    translations,
    value: indeterminate ? null : value,
  });

  return (
    <CircularProgressRoot
      {...rest}
      {...getProgressbarProps(progress)}
      className={className}
      value={progress}
    >
      {isValueVisible && (
        <CircularProgressValueWrapper className={classNames?.valueWrapper}>
          <CircularProgressValueText
            {...valueProps}
            className={classNames?.valueText}
          />
        </CircularProgressValueWrapper>
      )}

      {children}

      <CircularProgressTrack
        className={classNames?.track}
        rangeClassName={classNames?.range}
        size={size}
        thickness={thickness}
        trackProps={trackProps}
      />
    </CircularProgressRoot>
  );
}
// #endregion

// #region Display Names
CircularProgressTrack.displayName = "CircularProgress.Track";
CircularProgress.displayName = "CircularProgress";
// #endregion
