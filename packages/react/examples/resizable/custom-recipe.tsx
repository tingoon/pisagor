import { Resizable } from "@pisagor/react";
import { resizableRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { ReactNode } from "react";
import { tv } from "tailwind-variants";

const brandResizableRecipe = tv({
  extend: resizableRecipe,
  slots: {
    resizeTrigger:
      "hover:bg-emerald-500/40 focus-visible:bg-emerald-500/40 active:bg-emerald-500",
  },
  variants: {},
});

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

export function CustomRecipe() {
  return (
    <ResizableFrame>
      <Resizable
        className="size-full rounded-md border"
        defaultSize={[50, 50]}
        panels={[
          { id: "1", minSize: 10 },
          { id: "2", minSize: 10 },
        ]}
        recipe={brandResizableRecipe}
      >
        <Resizable.Panel className={panelClassName()} id="1">
          One
        </Resizable.Panel>
        <Resizable.ResizeTrigger id="1:2" withHandle />

        <Resizable.Panel className="h-full min-h-0 min-w-0" id="2">
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
