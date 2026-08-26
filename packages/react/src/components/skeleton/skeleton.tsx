import { ark } from "@ark-ui/react/factory";
import { skeletonVariants } from "@pisagor/styles/ui/skeleton";
import type { ComponentProps } from "react";
import { useMemo } from "react";

// #region Types
export interface SkeletonTextProps extends ComponentProps<typeof ark.div> {
  /**
   * The number of lines of the skeleton text.
   *
   * @defaultValue 1
   */
  lines?: number;
}

export interface SkeletonRootProps extends ComponentProps<typeof ark.div> {}

export interface SkeletonCircleProps extends ComponentProps<typeof ark.div> {}
// #endregion

// #region Parts
export function SkeletonRoot({ className, ...rest }: SkeletonRootProps) {
  const slots = useMemo(() => skeletonVariants(), []);

  return (
    <ark.div
      {...rest}
      className={slots.base({ className })}
      data-part="root"
      data-scope="skeleton"
    />
  );
}

export function SkeletonCircle({ className, ...rest }: SkeletonCircleProps) {
  const slots = useMemo(() => skeletonVariants(), []);

  return (
    <ark.div
      {...rest}
      className={slots.circle({ className })}
      data-part="circle"
      data-scope="skeleton"
    />
  );
}

export function SkeletonText({ className, lines = 2, ...rest }: SkeletonTextProps) {
  const slots = useMemo(() => skeletonVariants(), []);

  return (
    <ark.div {...rest} className={slots.text({ className })} data-part="text" data-scope="skeleton">
      {Array.from({ length: lines }).map((_, index) => {
        const key = `skeleton-text-${index}`;

        return <div className={slots.line()} key={key} />;
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
