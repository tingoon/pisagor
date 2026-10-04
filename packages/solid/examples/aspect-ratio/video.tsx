/** @jsxImportSource solid-js */
import { AspectRatio } from "@pisagor/solid";

export function Video() {
  return (
    <AspectRatio class="rounded-xl border bg-muted [--ratio:16/9]">
      <div class="flex size-full items-center justify-center">
        <span class="select-none text-muted-foreground text-xs">16:9</span>
      </div>
    </AspectRatio>
  );
}
