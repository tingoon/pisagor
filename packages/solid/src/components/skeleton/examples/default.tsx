import { Skeleton } from "../index";

export function Default() {
  return (
    <div class="flex items-center gap-2">
      <Skeleton.Circle class="size-16" />
      <Skeleton.Text lines={3} />
    </div>
  );
}
