import { DotsSixVerticalIcon } from "@phosphor-icons/react";
import { Sortable } from "@pisagor/react";
import { useState } from "react";

const labels: Record<string, string> = {
  a: "Design system tokens",
  b: "Component APIs",
  c: "Storybook coverage",
  d: "Accessibility checks",
};

export function Disabled() {
  const [items, setItems] = useState(["a", "b", "c"]);

  return (
    <Sortable disabled items={items} onValueChange={setItems}>
      {items.map((id) => (
        <Sortable.Item key={id} value={id}>
          <Sortable.ItemContent>
            <Sortable.Handle>
              <DotsSixVerticalIcon />
            </Sortable.Handle>
            <span className="text-sm font-medium">{labels[id]}</span>
          </Sortable.ItemContent>
        </Sortable.Item>
      ))}
    </Sortable>
  );
}
