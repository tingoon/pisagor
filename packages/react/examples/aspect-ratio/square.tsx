import source from "./square.tsx?raw";
import { AspectRatio } from "@pisagor/react";

export function Square() {
  return (
    <AspectRatio className="bg-muted rounded-xl border" ratio={1}>
      <div className="flex size-full items-center justify-center">
        <span className="text-muted-foreground text-xs select-none">1:1</span>
      </div>
    </AspectRatio>
  );
}

export { source as SquareSource };
