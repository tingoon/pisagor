import source from "./horizontal.tsx?raw";
import { ScrollArea } from "@pisagor/solid";

export function Horizontal() {
  return (
    <ScrollArea class="h-auto rounded-lg border">
      <div class="flex w-max gap-2 p-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div class="bg-muted flex h-20 w-32 shrink-0 items-center justify-center rounded-md">
            <span class="text-sm font-medium">Item {i + 1}</span>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}

export { source as HorizontalSource };
