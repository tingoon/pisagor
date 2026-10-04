/** @jsxImportSource solid-js */

import { Resizable } from "@pisagor/solid";
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

export function OrientationVertical() {
  return (
    <ResizableFrame heightClassName="h-112">
      <Resizable
        class="size-full rounded-md border"
        defaultSize={[50, 50]}
        orientation="vertical"
        panels={[{ id: "1" }, { id: "2" }]}
      >
        <Resizable.Panel class={panelClassName("vertical")} id="1">
          Top
        </Resizable.Panel>
        <Resizable.ResizeTrigger id="1:2" withHandle />

        <Resizable.Panel class={panelClassName("vertical")} id="2">
          Bottom
        </Resizable.Panel>
      </Resizable>
    </ResizableFrame>
  );
}
