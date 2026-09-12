import SkeletonRoot from "./skeleton.astro";
import SkeletonCircle from "./skeleton-circle.astro";
import SkeletonText from "./skeleton-text.astro";

export const Skeleton = Object.assign(SkeletonRoot, {
  Circle: SkeletonCircle,
  Text: SkeletonText,
});
