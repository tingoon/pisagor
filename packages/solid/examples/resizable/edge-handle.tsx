import source from "./edge-handle.tsx?raw";
import { Resizable } from "@pisagor/solid";
import { cn } from "@pisagor/utils";
import { createSignal, type JSX } from "solid-js";

function ResizableFrame({
  children,
  heightClassName = "h-96",
  className,
}: {
  children: JSX.Element;
  className?: string;
  heightClassName?: string;
}) {
  return <div class={cn("w-full", heightClassName, className)}>{children}</div>;
}

export function EdgeHandle() {
  const [width, setWidth] = createSignal(256);

  return (
    <ResizableFrame>
      <div class="flex size-full overflow-hidden rounded-md border">
        <aside
          class="bg-muted text-muted-foreground relative flex shrink-0 flex-col overflow-visible border-e"
          style={{ width: `${width()}px` }}
        >
          <Resizable.EdgeHandle
            handlePosition="top"
            label="Resize panel"
            onResizeChange={setWidth}
            onWidthChange={setWidth}
            placement="start"
            width={width()}
          />
          <div class="flex flex-1 items-center justify-center p-4 text-sm">
            Panel
          </div>
        </aside>
        <div class="bg-muted/30 flex min-w-0 flex-1 items-center justify-center text-sm">
          Main
        </div>
      </div>
    </ResizableFrame>
  );
}

export { source as EdgeHandleSource };
