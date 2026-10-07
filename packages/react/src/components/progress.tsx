import type {
  ProgressRootProps as ProgressPrimitiveRootProps,
  ProgressRangeProps,
  ProgressTrackProps,
  ProgressValueTextProps,
} from "@ark-ui/react/progress";
import { Progress as ProgressPrimitive } from "@ark-ui/react/progress";
import type { ProgressProps as BaseProgressRootProps } from "@pisagor/props";
import { type ProgressRecipeSlot, progressRecipe } from "@pisagor/recipes";
import type { ComponentProps, FunctionComponent, ReactNode } from "react";
import type { VariantClassNames } from "../internal/types";
import { createSlotRecipeContext } from "../utils";
import { Field } from "./field";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Progress",
  recipe: progressRecipe,
});
// #endregion

// #region Parts
const ProgressRoot = withProvider(ProgressPrimitive.Root, {
  name: "Root",
  slot: "base",
}) as FunctionComponent<
  Omit<ProgressPrimitiveRootProps, "value"> &
    BaseProgressRootProps & { value?: number | null }
>;

const ProgressHeader = withContext("div", {
  name: "Header",
});

const ProgressValue = withContext(ProgressPrimitive.ValueText, {
  name: "Value",
});

const ProgressTrack = withContext(ProgressPrimitive.Track, {
  name: "Track",
});

const ProgressRange = withContext(ProgressPrimitive.Range, {
  name: "Range",
});
// #endregion

// #region Types
type ProgressClassNames = VariantClassNames<ProgressRecipeSlot>;

export interface ProgressProps
  extends Omit<ComponentProps<typeof ProgressRoot>, "children" | "value"> {
  /**
   * Whether to show indeterminate progress.
   *
   * @defaultValue false
   */
  indeterminate?: boolean;
  /** When true, renders the numeric value text beside the label. */
  isValueVisible?: boolean;
  /**
   * The value of the progress bar
   *
   * @defaultValue 0
   */
  value?: number;
  children?: ReactNode;
  /** Optional label rendered above the progress bar. */
  label?: string;
  /** Slot class names */
  classNames?: ProgressClassNames;
  /** Extra props forwarded to the progress range element */
  rangeProps?: Omit<ProgressRangeProps, "children" | "className">;
  /** Extra props forwarded to the progress track element */
  trackProps?: Omit<ProgressTrackProps, "children" | "className">;
  /** Extra props forwarded to the progress value text element */
  valueProps?: Omit<ProgressValueTextProps, "children" | "className">;
}
// #endregion

// #region Closed
export function Progress({
  orientation = "horizontal",
  indeterminate = false,
  isValueVisible,
  value,
  children,
  label,
  rangeProps,
  trackProps,
  valueProps,
  className,
  classNames,
  ...rest
}: ProgressProps) {
  const showHeader = label || isValueVisible;

  return (
    <ProgressRoot
      {...rest}
      className={className}
      orientation={orientation}
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
// #endregion

// #region Display Names
Progress.displayName = "Progress";

// #endregion

export type {
  ProgressRangeProps,
  ProgressTrackProps,
  ProgressValueTextProps,
} from "@ark-ui/react/progress";
