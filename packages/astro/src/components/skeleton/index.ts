import SkeletonCircle from "./skeleton-circle.astro";
import SkeletonRoot from "./skeleton-root.astro";
import SkeletonText from "./skeleton-text.astro";

export const Skeleton = Object.assign(SkeletonRoot, {
  Circle: SkeletonCircle,
  Text: SkeletonText,
});
