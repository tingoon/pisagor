import source from "./collapsible.tsx?raw";
import { Resizable } from "@pisagor/solid";
import { cn } from "@pisagor/utils";
import type { JSX } from "solid-js";

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

function panelClassName(orientation: "horizontal" | "vertical" = "horizontal") {
  return cn(
    "bg-muted/30 flex items-center justify-center text-sm",
    orientation === "vertical"
      ? "h-full min-h-0 w-full"
      : "h-full w-full min-w-0",
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

export { source as CollapsibleSource };
