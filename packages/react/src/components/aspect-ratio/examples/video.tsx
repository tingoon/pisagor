import { AspectRatio } from "..";

export function Video() {
  return (
    <AspectRatio className="rounded-xl border bg-muted [--ratio:16/9]">
      <div className="flex size-full items-center justify-center">
        <span className="select-none text-muted-foreground text-xs">16:9</span>
      </div>
    </AspectRatio>
  );
}
