import { ark } from "@ark-ui/react/factory";
import { Progress as ProgressPrimitive, useProgressContext } from "@ark-ui/react/progress";
import {
  type CircularProgressSlots,
  circularProgressVariants,
} from "@pisagor/recipes/circular-progress";
import type { ComponentProps, ReactNode } from "react";
import type { VariantClassNames } from "../../internal/types";
import {
  CircularProgressSlotsContext,
  useCircularProgressSlots,
} from "./circular-progress.context";

// #region Types
type CircularProgressTrackProps = ComponentProps<typeof ark.svg>;

type CircularProgressValueProps = ComponentProps<typeof ProgressPrimitive.ValueText>;

type CircularProgressClassNames = VariantClassNames<CircularProgressSlots>;

type CircularProgressRootProps = ComponentProps<typeof ProgressPrimitive.Root>;

export interface CircularProgressProps extends Omit<CircularProgressRootProps, "children"> {
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
  /** Slot class names */
  classNames?: CircularProgressClassNames;
  /** Extra props forwarded to the circular progress track element */
  trackProps?: Omit<CircularProgressTrackProps, "className" | "height" | "viewBox" | "width">;
  /** Extra props forwarded to the circular progress value element */
  valueProps?: Omit<CircularProgressValueProps, "children" | "className">;
}

interface CircularProgressTrackPartProps {
  size?: number;
  thickness?: number;
  className?: string;
  rangeClassName?: string;
  trackProps?: Omit<CircularProgressTrackProps, "className" | "height" | "viewBox" | "width">;
}
// #endregion

// #region Parts
function CircularProgressRoot({ children, className, ...rest }: CircularProgressRootProps) {
  const slots = circularProgressVariants();

  return (
    <CircularProgressSlotsContext value={{ slots }}>
      <ProgressPrimitive.Root {...rest} className={slots.base({ className })}>
        {children}
      </ProgressPrimitive.Root>
    </CircularProgressSlotsContext>
  );
}

function CircularProgressValueWrapper({
  children,
  className,
}: {
  className?: string;
  children?: ReactNode;
}) {
  const { slots } = useCircularProgressSlots();

  return <span className={slots.valueWrapper({ className })}>{children}</span>;
}

function CircularProgressValue({ className, ...rest }: CircularProgressValueProps) {
  const { slots } = useCircularProgressSlots();

  return <ProgressPrimitive.ValueText {...rest} className={slots.value({ className })} />;
}

function CircularProgressTrack({
  size = 32,
  rangeClassName,
  thickness = 4,
  trackProps,
  className,
}: CircularProgressTrackPartProps) {
  const { slots } = useCircularProgressSlots();
  const { max, min, value } = useProgressContext();

  const radius = size / 2 - thickness / 2;
  const circumference = 2 * Math.PI * radius;
  const range = Math.max(max - min, 1);
  const normalizedValue = value == null ? min : Math.min(Math.max(value, min), max);
  const percent = (normalizedValue - min) / range;
  const dashOffset = circumference * (1 - percent);

  return (
    <ark.svg
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
    </ark.svg>
  );
}
// #endregion

// #region Closed
export function CircularProgress({
  size = 32,
  indeterminate = false,
  isValueVisible,
  value,
  children,
  thickness = 4,
  trackProps,
  valueProps,
  className,
  classNames,
  ...rest
}: CircularProgressProps) {
  return (
    <CircularProgressRoot {...rest} className={className} value={indeterminate ? null : value}>
      {isValueVisible && (
        <CircularProgressValueWrapper className={classNames?.valueWrapper}>
          <CircularProgressValue {...valueProps} className={classNames?.value} />
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
CircularProgressRoot.displayName = "CircularProgress.Root";
CircularProgressValueWrapper.displayName = "CircularProgress.ValueWrapper";
CircularProgressValue.displayName = "CircularProgress.Value";
CircularProgressTrack.displayName = "CircularProgress.Track";
CircularProgress.displayName = "CircularProgress";
// #endregion
