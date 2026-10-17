import source from "./responsive.tsx?raw";
import { AspectRatio } from "@pisagor/react";

export function Responsive() {
  return (
    <AspectRatio className="bg-muted rounded-xl border sm:[--ratio:16/9] md:[--ratio:1/1]">
      <div className="flex size-full items-center justify-center">
        <span className="text-muted-foreground text-xs select-none">
          16:9 → 1:1
        </span>
      </div>
    </AspectRatio>
  );
}

export { source as ResponsiveSource };
