import { AspectRatio } from "@pisagor/react";

export function Video() {
  return (
    <AspectRatio className="bg-muted rounded-xl border" ratio={16 / 9}>
      <div className="flex size-full items-center justify-center">
        <span className="text-muted-foreground text-xs select-none">16:9</span>
      </div>
    </AspectRatio>
  );
}
