import { ark } from "@ark-ui/react/factory";
import type {
  SkeletonProps as BaseSkeletonCircleProps,
  SkeletonProps as BaseSkeletonRootProps,
  SkeletonProps as BaseSkeletonTextProps,
} from "@pisagor/props";
import { skeletonRecipe } from "@pisagor/recipes";
import type { ComponentProps } from "react";

// #region Types
export interface SkeletonTextProps
  extends ComponentProps<typeof ark.div>,
    BaseSkeletonTextProps {
  /**
   * The number of lines of the skeleton text.
   *
   * @defaultValue 1
   */
  lines?: number;
}

export interface SkeletonRootProps
  extends ComponentProps<typeof ark.div>,
    BaseSkeletonRootProps {}

export interface SkeletonCircleProps
  extends ComponentProps<typeof ark.div>,
    BaseSkeletonCircleProps {}
// #endregion

// #region Parts
export function SkeletonRoot({
  recipe = skeletonRecipe,
  className,
  ...rest
}: SkeletonRootProps) {
  const slots = recipe();

  return (
    <ark.div
      {...rest}
      className={slots.base({ className })}
      data-part="root"
      data-scope="skeleton"
    />
  );
}

export function SkeletonCircle({
  recipe = skeletonRecipe,
  className,
  ...rest
}: SkeletonCircleProps) {
  const slots = recipe();

  return (
    <ark.div
      {...rest}
      className={slots.circle({ className })}
      data-part="circle"
      data-scope="skeleton"
    />
  );
}

export function SkeletonText({
  lines = 2,
  recipe = skeletonRecipe,
  className,
  ...rest
}: SkeletonTextProps) {
  const slots = recipe();

  return (
    <ark.div
      {...rest}
      className={slots.text({ className })}
      data-part="text"
      data-scope="skeleton"
    >
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
