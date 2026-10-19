import { Progress as ProgressPrimitive } from "@ark-ui/react";
import type {
  ProgressRangeProps,
  ProgressTrackProps,
  ProgressValueTextProps,
} from "@ark-ui/react";
import type {
  ProgressContract,
  ProgressRootContract,
} from "@pisagor/contracts";
import { progressRecipe } from "@pisagor/recipes";
import type { ComponentProps, ReactNode } from "react";
import { createSlotRecipeContext } from "../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Progress",
  recipe: progressRecipe,
});
// #endregion

// #region Parts
const ProgressRoot = withProvider<
  ComponentProps<typeof ProgressPrimitive.Root> & ProgressRootContract
>(ProgressPrimitive.Root, { name: "Root" });

const ProgressHeader = withContext<ComponentProps<"div">>("div", {
  name: "Header",
});

const ProgressValueText = withContext<
  ComponentProps<typeof ProgressPrimitive.ValueText>
>(ProgressPrimitive.ValueText, { name: "ValueText" });

const ProgressTrack = withContext<
  ComponentProps<typeof ProgressPrimitive.Track>
>(ProgressPrimitive.Track, {
  name: "Track",
});

const ProgressRange = withContext<
  ComponentProps<typeof ProgressPrimitive.Range>
>(ProgressPrimitive.Range, {
  name: "Range",
});
// #endregion

// #region Types
export type ProgressRootProps = ComponentProps<typeof ProgressRoot>;

export interface ProgressProps
  extends Omit<ProgressRootProps, "children" | "value">, ProgressContract {
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
  label?: ReactNode;
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
  defaultValue = 0,
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
      defaultValue={defaultValue}
      orientation={orientation}
      value={indeterminate ? null : value}
    >
      {showHeader && (
        <ProgressHeader className={classNames?.header}>
          {label && <ProgressPrimitive.Label>{label}</ProgressPrimitive.Label>}
          {isValueVisible && (
            <ProgressValueText
              {...valueProps}
              className={classNames?.valueText}
            />
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
} from "@ark-ui/react";
