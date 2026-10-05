import { AspectRatio } from "@pisagor/solid";

export function Portrait() {
  return (
    <AspectRatio class="rounded-xl border bg-muted [--ratio:9/16]">
      <div class="flex size-full items-center justify-center">
        <span class="select-none text-muted-foreground text-xs">9:16</span>
      </div>
    </AspectRatio>
  );
}
