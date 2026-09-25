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
  return (
    <div className={cn("w-full", heightClassName, className)}>{children}</div>
  );
}

function panelClassName(orientation: "horizontal" | "vertical" = "horizontal") {
  return cn(
    "flex items-center justify-center bg-muted/30 text-sm",
    orientation === "vertical"
      ? "min-h-0 h-full w-full"
      : "min-w-0 h-full w-full",
  );
}

export function Default() {
  return (
    <ResizableFrame>
      <Resizable
        className="size-full rounded-md border"
        defaultSize={[50, 50]}
        panels={[
          { id: "1", minSize: 10 },
          { id: "2", minSize: 10 },
        ]}
      >
        <Resizable.Panel className={panelClassName()} id="1">
          One
        </Resizable.Panel>
        <Resizable.ResizeTrigger id="1:2" withHandle />

        <Resizable.Panel className="min-h-0 h-full min-w-0" id="2">
          <Resizable
            className="size-full"
            defaultSize={[50, 50]}
            orientation="vertical"
            panels={[
              { id: "3", minSize: 10 },
              { id: "4", minSize: 10 },
            ]}
          >
            <Resizable.Panel className={panelClassName("vertical")} id="3">
              Two
            </Resizable.Panel>
            <Resizable.ResizeTrigger id="3:4" withHandle />

            <Resizable.Panel className={panelClassName("vertical")} id="4">
              Three
            </Resizable.Panel>
          </Resizable>
        </Resizable.Panel>
      </Resizable>
    </ResizableFrame>
  );
}
