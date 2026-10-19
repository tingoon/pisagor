import { DotsSixVerticalIcon } from "@phosphor-icons/react";
import { Resizable } from "@pisagor/react";
import { cn } from "@pisagor/utils";
import type { ReactNode } from "react";

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
    "bg-muted/30 flex items-center justify-center text-sm",
    orientation === "vertical"
      ? "h-full min-h-0 w-full"
      : "h-full w-full min-w-0",
  );
}

export function OrientationVertical() {
  return (
    <ResizableFrame heightClassName="h-112">
      <Resizable
        className="size-full rounded-md border"
        defaultSize={[50, 50]}
        orientation="vertical"
        panels={[{ id: "1" }, { id: "2" }]}
      >
        <Resizable.Panel className={panelClassName("vertical")} id="1">
          Top
        </Resizable.Panel>
        <Resizable.ResizeTrigger id="1:2">
          <Resizable.ResizeTriggerHandle>
            <DotsSixVerticalIcon className="size-2.5" />
          </Resizable.ResizeTriggerHandle>
        </Resizable.ResizeTrigger>

        <Resizable.Panel className={panelClassName("vertical")} id="2">
          Bottom
        </Resizable.Panel>
      </Resizable>
    </ResizableFrame>
  );
}
