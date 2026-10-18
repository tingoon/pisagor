import { Skeleton } from "@pisagor/react";

export function Default() {
  return (
    <div className="flex items-center gap-2">
      <Skeleton.Circle className="size-16" />
      <Skeleton.Text lines={3} />
    </div>
  );
}
