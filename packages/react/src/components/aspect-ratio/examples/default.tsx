import { AspectRatio } from "..";

export function Default() {
  return (
    <AspectRatio className="rounded-xl border bg-muted">
      <div className="flex size-full items-center justify-center">
        <span className="select-none text-muted-foreground text-xs">1:1</span>
      </div>
    </AspectRatio>
  );
}
