import { DotsSixVerticalIcon } from "@squidlab/phosphor-solid/icons";
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

export function MinMax() {
  return (
    <ResizableFrame>
      <Resizable
        class="size-full rounded-md border"
        defaultSize={[30, 70]}
        panels={[{ id: "1", maxSize: 40, minSize: 25 }, { id: "2" }]}
      >
        <Resizable.Panel class={panelClassName()} id="1">
          Sidebar
        </Resizable.Panel>
        <Resizable.ResizeTrigger id="1:2">
          <Resizable.ResizeTriggerHandle>
            <DotsSixVerticalIcon class="size-2.5" />
          </Resizable.ResizeTriggerHandle>
        </Resizable.ResizeTrigger>

        <Resizable.Panel class={panelClassName()} id="2">
          Content
        </Resizable.Panel>
      </Resizable>
    </ResizableFrame>
  );
}
