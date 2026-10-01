/** @jsxImportSource solid-js */
import { ScrollArea } from "@pisagor/solid/scroll-area";

export function Horizontal() {
  return (
    <ScrollArea class="h-auto rounded-lg border">
      <div class="flex w-max gap-2 p-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div class="flex h-20 w-32 shrink-0 items-center justify-center rounded-md bg-muted">
            <span class="font-medium text-sm">Item {i + 1}</span>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
