import { Resizable } from "@pisagor/react";
import { cn } from "@pisagor/utils";
import type { ReactNode } from "react";
import { useState } from "react";

function ResizableFrame({
  children,
  heightClassName = "h-96",
  className,
}: {
  children: ReactNode;
  className?: string;
  heightClassName?: string;
}) {
  return (
    <div className={cn("w-full", heightClassName, className)}>{children}</div>
  );
}

export function EdgeHandle() {
  const [width, setWidth] = useState(256);

  return (
    <ResizableFrame>
      <div className="flex size-full overflow-hidden rounded-md border">
        <aside
          className="bg-muted text-muted-foreground relative flex shrink-0 flex-col overflow-visible border-e"
          style={{ width }}
        >
          <Resizable.EdgeHandle
            handlePosition="top"
            label="Resize panel"
            maxWidth={400}
            minWidth={120}
            onResizeChange={setWidth}
            onWidthChange={setWidth}
            placement="start"
            width={width}
          />
          <div className="flex flex-1 items-center justify-center p-4 text-sm">
            Panel
          </div>
        </aside>
        <div className="bg-muted/30 flex min-w-0 flex-1 items-center justify-center text-sm">
          Main
        </div>
      </div>
    </ResizableFrame>
  );
}
