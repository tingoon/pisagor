import { ark } from "@ark-ui/react/factory";
import {
  Progress as ProgressPrimitive,
  useProgressContext as useCircularProgress,
} from "@ark-ui/react/progress";
import { circularProgressVariants } from "@pisagor/styles/ui/circular-progress";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import type { VariantClassNames, WithTestId } from "../../internal/types";

// #region Types
export type CircularProgressTrackProps = ComponentProps<typeof ark.svg>;

export type CircularProgressValueProps = ComponentProps<typeof ProgressPrimitive.ValueText>;

type CircularProgressClassNames = VariantClassNames<typeof circularProgressVariants>;

export type CircularProgressRootProps = ComponentProps<typeof ProgressPrimitive.Root>;

export interface CircularProgressProps extends CircularProgressRootProps, WithTestId {
  /** Slot class names */
  classNames?: CircularProgressClassNames;
  /**
   * Whether to show indeterminate progress.
   *
   * @defaultValue false
   */
  indeterminate?: boolean;
  /** When true, renders the numeric value text centered inside the circle. */
  isValueVisible?: boolean;
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
  /** Extra props forwarded to the circular progress track element */
  trackProps?: Omit<CircularProgressTrackProps, "className" | "height" | "viewBox" | "width">;
  /** Extra props forwarded to the circular progress value element */
  valueProps?: Omit<CircularProgressValueProps, "children" | "className">;
}

interface CircularProgressTrackSlotProps {
  size?: number;
  thickness?: number;
  classNames?: CircularProgressClassNames;
  trackProps?: Omit<CircularProgressTrackProps, "className" | "height" | "viewBox" | "width">;
}
// #endregion

// #region Part
export function CircularProgress({
  value,
  indeterminate = false,
  size = 32,
  thickness = 4,
  isValueVisible,
  className,
  classNames,
  trackProps,
  valueProps,
  children,
  testId,
  ...rest
}: CircularProgressProps) {
  const slots = circularProgressVariants();

  return (
    <ProgressPrimitive.Root
      {...rest}
      className={slots.base({ className: cn(className, classNames?.base) })}
      data-testid={testId}
      value={indeterminate ? null : value}
    >
      {isValueVisible && (
        <span className={slots.valueWrapper({ className: classNames?.valueWrapper })}>
          <CircularProgressValue
            {...valueProps}
            className={slots.value({ className: classNames?.value })}
          />
        </span>
      )}
      {children}
      <CircularProgressTrack
        classNames={classNames}
        size={size}
        thickness={thickness}
        trackProps={trackProps}
      />
    </ProgressPrimitive.Root>
  );
}

function CircularProgressTrack({
  size = 32,
  thickness = 4,
  classNames,
  trackProps,
}: CircularProgressTrackSlotProps) {
  const slots = circularProgressVariants();
  const { max, min, value } = useCircularProgress();

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
      className={slots.track({ className: classNames?.track })}
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
        className={slots.range({ className: classNames?.range })}
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

function CircularProgressValue({ className, ...rest }: CircularProgressValueProps) {
  return <ProgressPrimitive.ValueText {...rest} className={className} />;
}
// #endregion
