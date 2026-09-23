import { Spinner } from "..";

export function Sizes() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Spinner className="size-4" />
      <Spinner className="size-6" />
      <Spinner className="size-8" />
    </div>
  );
}
