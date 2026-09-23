import { useState } from "react";
import { Sortable } from "..";

const labels: Record<string, string> = {
  a: "Design system tokens",
  b: "Component APIs",
  c: "Storybook coverage",
  d: "Accessibility checks",
};

export function Horizontal() {
  const [items, setItems] = useState(["a", "b", "c", "d"]);

  return (
    <Sortable items={items} onValueChange={setItems} orientation="horizontal">
      {items.map((id) => (
        <Sortable.Item className="min-w-36" key={id} value={id}>
          <Sortable.ItemContent>
            <Sortable.Handle />
            <span className="font-medium text-sm">{labels[id]}</span>
          </Sortable.ItemContent>
        </Sortable.Item>
      ))}
    </Sortable>
  );
}
