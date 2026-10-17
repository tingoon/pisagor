import source from "./portrait.tsx?raw";
import { AspectRatio } from "@pisagor/react";

export function Portrait() {
  return (
    <AspectRatio className="bg-muted rounded-xl border" ratio={9 / 16}>
      <div className="flex size-full items-center justify-center">
        <span className="text-muted-foreground text-xs select-none">9:16</span>
      </div>
    </AspectRatio>
  );
}

export { source as PortraitSource };
