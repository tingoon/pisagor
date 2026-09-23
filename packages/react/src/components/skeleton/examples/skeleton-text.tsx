import { Skeleton } from "..";

export function SkeletonText() {
  return (
    <div className="flex flex-col gap-5">
      <Skeleton className="h-6 w-3/4" />
      <Skeleton.Text lines={5} />
      <Skeleton.Text lines={3} />
      <Skeleton.Text lines={2} />
    </div>
  );
}
