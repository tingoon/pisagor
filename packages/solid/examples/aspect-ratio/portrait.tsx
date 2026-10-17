import source from "./portrait.tsx?raw";
import { AspectRatio } from "@pisagor/solid";

export function Portrait() {
  return (
    <AspectRatio class="bg-muted rounded-xl border [--ratio:9/16]">
      <div class="flex size-full items-center justify-center">
        <span class="text-muted-foreground text-xs select-none">9:16</span>
      </div>
    </AspectRatio>
  );
}

export { source as PortraitSource };
