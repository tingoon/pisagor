import source from "./video.tsx?raw";
import { AspectRatio } from "@pisagor/solid";

export function Video() {
  return (
    <AspectRatio class="bg-muted rounded-xl border [--ratio:16/9]">
      <div class="flex size-full items-center justify-center">
        <span class="text-muted-foreground text-xs select-none">16:9</span>
      </div>
    </AspectRatio>
  );
}

export { source as VideoSource };
