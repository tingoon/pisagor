import source from "./compound.tsx?raw";
import { ScrollArea } from "@pisagor/react";

export function Compound() {
  return (
    <ScrollArea.Root className="h-48 w-64 rounded-md border">
      <ScrollArea.Viewport>
        <div className="p-4 text-sm">
          {Array.from({ length: 30 }, (_, index) => `Item ${index + 1}`).map(
            (item) => (
              <p key={item}>{item}</p>
            ),
          )}
        </div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner />
    </ScrollArea.Root>
  );
}

export { source as CompoundSource };
