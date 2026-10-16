import { cn } from "@pisagor/utils";

export function panelClassName(
  orientation: "horizontal" | "vertical" = "horizontal",
) {
  return cn(
    "bg-muted/30 flex items-center justify-center text-sm",
    orientation === "vertical"
      ? "h-full min-h-0 w-full"
      : "h-full w-full min-w-0",
  );
}
