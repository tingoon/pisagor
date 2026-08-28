import { SkeletonCircle, SkeletonRoot, SkeletonText } from "./skeleton";

export type { SkeletonProps, SkeletonTextProps } from "./skeleton";

export const Skeleton = Object.assign(SkeletonRoot, {
  Circle: SkeletonCircle,
  Text: SkeletonText,
});
