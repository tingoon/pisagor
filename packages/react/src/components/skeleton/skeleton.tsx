import { ark } from "@ark-ui/react/factory";
import {
  skeletonCircleVariants,
  skeletonInlineVariants,
  skeletonTextVariants,
  skeletonVariants,
} from "@pisagor/styles/ui/skeleton";
import type { ComponentProps } from "react";
import type { WithTestId } from "../../internal/types";

// #region Types
export interface SkeletonTextProps extends ComponentProps<typeof ark.div> {
  /**
   * The number of lines of the skeleton text.
   *
   * @defaultValue 1
   */
  lines?: number;
}

export interface SkeletonRootProps extends ComponentProps<typeof ark.div>, WithTestId {}
// #endregion

// #region Parts
export function SkeletonRoot({ className, testId, ...rest }: SkeletonRootProps) {
  return (
    <ark.div
      {...rest}
      className={skeletonVariants({ className })}
      data-part="root"
      data-scope="skeleton"
      data-testid={testId}
    />
  );
}

export function SkeletonCircle({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={skeletonCircleVariants({ className })}
      data-part="circle"
      data-scope="skeleton"
    />
  );
}

export function SkeletonText({ className, lines = 2, ...rest }: SkeletonTextProps) {
  return (
    <ark.div
      {...rest}
      className={skeletonTextVariants({ className })}
      data-part="text"
      data-scope="skeleton"
    >
      {Array.from({ length: lines }).map((_, index) => {
        const key = `skeleton-text-${index}`;

        return <div className={skeletonInlineVariants()} key={key} />;
      })}
    </ark.div>
  );
}
// #endregion

// #region Display Names
SkeletonRoot.displayName = "Skeleton";
SkeletonCircle.displayName = "Skeleton.Circle";
SkeletonText.displayName = "Skeleton.Text";
// #endregion
