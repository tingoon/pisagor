import { Progress as ProgressPrimitive } from "@ark-ui/react/progress";
import { progressVariants } from "@pisagor/styles/ui/progress";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import type { VariantClassNames, WithTestId } from "../../internal/types";
import { Field } from "../field";

// #region Types
export type ProgressTrackProps = ComponentProps<typeof ProgressPrimitive.Track>;

export type ProgressRangeProps = ComponentProps<typeof ProgressPrimitive.Range>;

export type ProgressValueProps = ComponentProps<typeof ProgressPrimitive.ValueText>;

type ProgressClassNames = VariantClassNames<typeof progressVariants>;

export type ProgressRootProps = Omit<ComponentProps<typeof ProgressPrimitive.Root>, "value">;

export interface ProgressProps extends ProgressRootProps, WithTestId {
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
}
// #endregion

// #region Part
export function Progress({
  className,
  classNames,
  value,
  orientation = "horizontal",
  indeterminate = false,
  label,
  isValueVisible,
  trackProps,
  rangeProps,
  valueProps,
  children,
  testId,
  ...rest
}: ProgressProps) {
  const slots = progressVariants();
  const showHeader = label || isValueVisible;

  return (
    <ProgressPrimitive.Root
      {...rest}
      className={cn(slots.root(), className, classNames?.root)}
      data-testid={testId}
      orientation={orientation}
      value={indeterminate ? null : value}
    >
      {showHeader && (
        <div className={cn(slots.header(), classNames?.header)}>
          {label && <Field.Label>{label}</Field.Label>}
          {isValueVisible && (
            <Field.Label asChild>
              <ProgressPrimitive.ValueText
                {...valueProps}
                className={cn(slots.value(), classNames?.value)}
              />
            </Field.Label>
          )}
        </div>
      )}
      {children}
      <ProgressPrimitive.Track {...trackProps} className={cn(slots.track(), classNames?.track)}>
        <ProgressPrimitive.Range {...rangeProps} className={cn(slots.range(), classNames?.range)} />
      </ProgressPrimitive.Track>
    </ProgressPrimitive.Root>
  );
}
// #endregion
