import { Progress as ProgressPrimitive } from "@ark-ui/react/progress";
import { type ProgressSlots, progressVariants } from "@pisagor/styles/ui/progress";
import type { ComponentProps, ReactNode } from "react";
import type { VariantClassNames, WithTestId } from "../../internal/types";
import { Field } from "../field";
import { ProgressContext, useProgress } from "./progress.context";

// #region Types
type ProgressTrackProps = ComponentProps<typeof ProgressPrimitive.Track>;

type ProgressRangeProps = ComponentProps<typeof ProgressPrimitive.Range>;

type ProgressValueProps = ComponentProps<typeof ProgressPrimitive.ValueText>;

type ProgressHeaderProps = ComponentProps<"div">;

type ProgressClassNames = VariantClassNames<ProgressSlots>;

type ProgressRootProps = Omit<ComponentProps<typeof ProgressPrimitive.Root>, "value"> & WithTestId;

export interface ProgressProps extends Omit<ProgressRootProps, "children"> {
  /** Slot class names */
  classNames?: ProgressClassNames;
  /**
   * Whether to show indeterminate progress.
   *
   * @defaultValue false
   */
  indeterminate?: boolean;
  /**
   * The value of the progress bar
   *
   * @defaultValue 0
   */
  value?: number;
  /** Optional label rendered above the progress bar. */
  label?: string;
  /** When true, renders the numeric value text beside the label. */
  isValueVisible?: boolean;
  /** Extra props forwarded to the progress track element */
  trackProps?: Omit<ProgressTrackProps, "children" | "className">;
  /** Extra props forwarded to the progress range element */
  rangeProps?: Omit<ProgressRangeProps, "children" | "className">;
  /** Extra props forwarded to the progress value text element */
  valueProps?: Omit<ProgressValueProps, "children" | "className">;
  children?: ReactNode;
}
// #endregion

// #region Parts
function ProgressRoot({
  children,
  className,
  orientation = "horizontal",
  testId,
  ...rest
}: ProgressRootProps & { value?: number | null }) {
  const slots = progressVariants();

  return (
    <ProgressContext value={{ slots }}>
      <ProgressPrimitive.Root
        {...rest}
        className={slots.base({ className })}
        data-testid={testId}
        orientation={orientation}
      >
        {children}
      </ProgressPrimitive.Root>
    </ProgressContext>
  );
}
ProgressRoot.displayName = "Progress.Root";

function ProgressHeader({ className, children, ...rest }: ProgressHeaderProps) {
  const { slots } = useProgress();

  return (
    <div {...rest} className={slots.header({ className })}>
      {children}
    </div>
  );
}
ProgressHeader.displayName = "Progress.Header";

function ProgressValue({ className, ...rest }: ProgressValueProps) {
  const { slots } = useProgress();

  return <ProgressPrimitive.ValueText {...rest} className={slots.value({ className })} />;
}
ProgressValue.displayName = "Progress.Value";

function ProgressTrack({ className, children, ...rest }: ProgressTrackProps) {
  const { slots } = useProgress();

  return (
    <ProgressPrimitive.Track {...rest} className={slots.track({ className })}>
      {children}
    </ProgressPrimitive.Track>
  );
}
ProgressTrack.displayName = "Progress.Track";

function ProgressRange({ className, ...rest }: ProgressRangeProps) {
  const { slots } = useProgress();

  return <ProgressPrimitive.Range {...rest} className={slots.range({ className })} />;
}
ProgressRange.displayName = "Progress.Range";
// #endregion

// #region Closed
export function Progress({
  children,
  className,
  classNames,
  indeterminate = false,
  isValueVisible,
  label,
  orientation = "horizontal",
  rangeProps,
  testId,
  trackProps,
  value,
  valueProps,
  ...rest
}: ProgressProps) {
  const showHeader = label || isValueVisible;

  return (
    <ProgressRoot
      {...rest}
      className={className}
      orientation={orientation}
      testId={testId}
      value={indeterminate ? null : value}
    >
      {showHeader && (
        <ProgressHeader className={classNames?.header}>
          {label && <Field.Label>{label}</Field.Label>}
          {isValueVisible && (
            <Field.Label asChild>
              <ProgressValue {...valueProps} className={classNames?.value} />
            </Field.Label>
          )}
        </ProgressHeader>
      )}

      {children}

      <ProgressTrack {...trackProps} className={classNames?.track}>
        <ProgressRange {...rangeProps} className={classNames?.range} />
      </ProgressTrack>
    </ProgressRoot>
  );
}
Progress.displayName = "Progress";
// #endregion
