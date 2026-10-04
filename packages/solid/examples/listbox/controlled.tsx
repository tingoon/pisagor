/** @jsxImportSource solid-js */

import { createListCollection } from "@ark-ui/solid/collection";
import { Item, Listbox } from "@pisagor/solid";
import { createSignal } from "solid-js";
export function Controlled() {
  const collection = createListCollection({
    items: [
      { label: "Small", value: "sm" },
      { label: "Medium", value: "md" },
      { label: "Large", value: "lg" },
      { label: "Extra Large", value: "xl" },
    ],
  });
  const [value, setValue] = createSignal(["md"]);

  const isLarge = value().includes("lg");

  return (
    <div class="flex flex-col gap-2">
      <p class="text-center text-muted-foreground text-sm">
        Selected the Large size
      </p>
      <Item.Group variant="outline">
        <Item class="p-1">
          <Listbox.Root
            collection={collection}
            onValueChange={(value) =>
              setValue(Array.isArray(value) ? value : [value])
            }
            value={value()}
          >
            <Listbox.Content>
              {collection.items.map((item) => (
                <Listbox.Item item={item}>
                  <Listbox.ItemText>{item.label}</Listbox.ItemText>
                  <Listbox.ItemIndicator />
                </Listbox.Item>
              ))}
            </Listbox.Content>
          </Listbox.Root>
        </Item>
      </Item.Group>
      <p class="text-center text-muted-foreground text-sm">
        {isLarge ? "✅" : "❌"}
      </p>
    </div>
  );
}
