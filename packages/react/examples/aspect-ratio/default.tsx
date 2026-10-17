import source from "./default.tsx?raw";
import { AspectRatio } from "@pisagor/react";

export function Default() {
  return (
    <AspectRatio className="bg-muted rounded-xl border">
      <div className="flex size-full items-center justify-center">
        <span className="text-muted-foreground text-xs select-none">1:1</span>
      </div>
    </AspectRatio>
  );
}

export { source as DefaultSource };
