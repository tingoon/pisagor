import { cn } from "@pisagor/utils";
import type { ReactNode } from "react";
import { Resizable } from "..";

function ResizableFrame({
  children,
  heightClassName = "h-96",
  className,
}: {
  children: ReactNode;
  className?: string;
  heightClassName?: string;
}) {
  return <div className={cn("w-full", heightClassName, className)}>{children}</div>;
}

function panelClassName(orientation: "horizontal" | "vertical" = "horizontal") {
  return cn(
    "flex items-center justify-center bg-muted/30 text-sm",
    orientation === "vertical" ? "min-h-0 h-full w-full" : "min-w-0 h-full w-full",
  );
}

export function Handle() {
  return (
    <ResizableFrame>
      <Resizable
        className="size-full rounded-md border"
        defaultSize={[50, 50]}
        panels={[{ id: "1" }, { id: "2" }]}
      >
        <Resizable.Panel className={panelClassName()} id="1">
          Panel 1
        </Resizable.Panel>
        <Resizable.ResizeTrigger id="1:2" withHandle />

        <Resizable.Panel className={panelClassName()} id="2">
          Panel 2
        </Resizable.Panel>
      </Resizable>
    </ResizableFrame>
  );
}
