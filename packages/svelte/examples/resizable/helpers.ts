import { cn } from "@pisagor/utils";

export function panelClassName(
  orientation: "horizontal" | "vertical" = "horizontal",
) {
  return cn(
    "flex items-center justify-center bg-muted/30 text-sm",
    orientation === "vertical"
      ? "min-h-0 h-full w-full"
      : "min-w-0 h-full w-full",
  );
}
