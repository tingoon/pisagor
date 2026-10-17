import { ScrollArea } from "@pisagor/react";

export function Horizontal() {
  return (
    <ScrollArea className="h-auto rounded-lg border">
      <div className="flex w-max gap-2 p-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            className="bg-muted flex h-20 w-32 shrink-0 items-center justify-center rounded-md"
            key={String(i)}
          >
            <span className="text-sm font-medium">Item {i + 1}</span>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
