/** @jsxImportSource solid-js */

import { Resizable } from "@pisagor/solid/resizable";
import { cn } from "@pisagor/utils";

function ResizableFrame({
  children,
  heightClassName = "h-96",
  className,
}: {
  children: ReactNode;
  className?: string;
  heightClassName?: string;
}) {
  return <div class={cn("w-full", heightClassName, className)}>{children}</div>;
}

function panelClassName(orientation: "horizontal" | "vertical" = "horizontal") {
  return cn(
    "flex items-center justify-center bg-muted/30 text-sm",
    orientation === "vertical"
      ? "min-h-0 h-full w-full"
      : "min-w-0 h-full w-full",
  );
}

export function Collapsible() {
  return (
    <ResizableFrame>
      <Resizable
        class="size-full rounded-md border"
        defaultSize={[25, 75]}
        panels={[
          { collapsedSize: 0, collapsible: true, id: "sidebar", minSize: 15 },
          { id: "main", minSize: 40 },
        ]}
      >
        <Resizable.Panel class={panelClassName()} id="sidebar">
          Sidebar
        </Resizable.Panel>
        <Resizable.ResizeTrigger id="sidebar:main" withHandle />

        <Resizable.Panel class={panelClassName()} id="main">
          Main
        </Resizable.Panel>
      </Resizable>
    </ResizableFrame>
  );
}
