import SkeletonCircle from "./skeleton-circle.svelte";
import SkeletonRoot from "./skeleton-root.svelte";
import SkeletonText from "./skeleton-text.svelte";

export const Skeleton = Object.assign(SkeletonRoot, {
  Circle: SkeletonCircle,
  Text: SkeletonText,
});
