import { useState } from "react";
import preview from "#/storybook/preview";
import { Sortable } from "..";

const meta = preview.meta({
  component: Sortable,
  parameters: {
    docs: {
      description: {
        component:
          "Lets users reorder a list by dragging items or moving them with Alt and arrow keys.",
      },
    },
    metadata: {
      aliases: ["reorder", "drag-list"],
      api: "compound",
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Handle: Sortable.Handle,
    Item: Sortable.Item,
    ItemContent: Sortable.ItemContent,
    Root: Sortable.Root,
  },
  title: "Components/Actions/Sortable",
});

const labels: Record<string, string> = {
  a: "Design system tokens",
  b: "Component APIs",
  c: "Storybook coverage",
  d: "Accessibility checks",
};

export const Default = meta.story({
  render: () => {
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
  },
});

export const Horizontal = meta.story({
  render: () => {
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
  },
});

export const Disabled = meta.story({
  render: () => {
    const [items, setItems] = useState(["a", "b", "c"]);

    return (
      <Sortable disabled items={items} onValueChange={setItems}>
        {items.map((id) => (
          <Sortable.Item key={id} value={id}>
            <Sortable.ItemContent>
              <Sortable.Handle />
              <span className="font-medium text-sm">{labels[id]}</span>
            </Sortable.ItemContent>
          </Sortable.Item>
        ))}
      </Sortable>
    );
  },
});

export const WithoutHandle = meta.story({
  render: () => {
    const [items, setItems] = useState(["a", "b", "c"]);

    return (
      <Sortable items={items} onValueChange={setItems}>
        {items.map((id) => (
          <Sortable.Item key={id} value={id}>
            <Sortable.ItemContent>
              <span className="font-medium text-sm">{labels[id]}</span>
            </Sortable.ItemContent>
          </Sortable.Item>
        ))}
      </Sortable>
    );
  },
});
