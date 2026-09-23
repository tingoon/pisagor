import { AspectRatio } from "..";

export function Portrait() {
  return (
    <AspectRatio className="rounded-xl border bg-muted [--ratio:9/16]">
      <div className="flex size-full items-center justify-center">
        <span className="select-none text-muted-foreground text-xs">9:16</span>
      </div>
    </AspectRatio>
  );
}
