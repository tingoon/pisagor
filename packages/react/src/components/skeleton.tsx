import { ark, type PolymorphicProps } from "@ark-ui/react";
import type {
  SkeletonProps as BaseSkeletonCircleProps,
  SkeletonProps as BaseSkeletonRootProps,
  SkeletonProps as BaseSkeletonTextProps,
} from "@pisagor/props";
import { skeletonRecipe } from "@pisagor/recipes";
import type { ComponentPropsWithRef } from "react";
import type { SizeScaleProps } from "../internal";

// #region Types
export interface SkeletonTextProps
  extends
    ComponentPropsWithRef<"div">,
    PolymorphicProps,
    BaseSkeletonTextProps {
  /**
   * The number of lines of the skeleton text.
   *
   * @defaultValue 1
   */
  lines?: number;
}

export interface SkeletonRootProps
  extends
    ComponentPropsWithRef<"div">,
    PolymorphicProps,
    BaseSkeletonRootProps {}

export interface SkeletonCircleProps
  extends
    ComponentPropsWithRef<"div">,
    PolymorphicProps,
    BaseSkeletonCircleProps {}
// #endregion

// #region Parts
export function SkeletonRoot({
  size = "md",
  recipe = skeletonRecipe,
  className,
  ...rest
}: SkeletonRootProps & SizeScaleProps) {
  const slots = recipe({ size });

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
  size = "md",
  recipe = skeletonRecipe,
  className,
  ...rest
}: SkeletonCircleProps & SizeScaleProps) {
  const slots = recipe({ size });

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
  size = "md",
  lines = 2,
  recipe = skeletonRecipe,
  className,
  ...rest
}: SkeletonTextProps & SizeScaleProps) {
  const slots = recipe({ size });

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

export const Skeleton = Object.assign(SkeletonRoot, {
  Circle: SkeletonCircle,
  Text: SkeletonText,
});
