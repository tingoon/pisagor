import source from "./sizes.tsx?raw";
import { Spinner } from "@pisagor/solid";

export function Sizes() {
  return (
    <div class="flex flex-wrap items-center gap-2">
      <Spinner class="size-4" />
      <Spinner class="size-6" />
      <Spinner class="size-8" />
    </div>
  );
}

export { source as SizesSource };
