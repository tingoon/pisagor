import { useState } from "react";
import { Sortable } from "..";

const labels: Record<string, string> = {
  a: "Design system tokens",
  b: "Component APIs",
  c: "Storybook coverage",
  d: "Accessibility checks",
};

export function Default() {
  const [items, setItems] = useState(["a", "b", "c", "d"]);

  return (
    <div className="flex w-full flex-col gap-3">
      <p className="text-muted-foreground text-sm">
        Drag from the handle, or focus an item and press Alt+Arrow to move it.
      </p>
      <Sortable items={items} onValueChange={setItems}>
        {items.map((id) => (
          <Sortable.Item key={id} value={id}>
            <Sortable.ItemContent>
              <Sortable.Handle />
              <span className="font-medium text-sm">{labels[id]}</span>
            </Sortable.ItemContent>
          </Sortable.Item>
        ))}
      </Sortable>
    </div>
  );
}
