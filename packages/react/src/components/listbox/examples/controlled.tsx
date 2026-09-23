import { createListCollection } from "@ark-ui/react";
import { Item } from "@pisagor/react";
import { useState } from "react";
import { Listbox } from "..";
export function Controlled() {
  const collection = createListCollection({
    items: [
      { label: "Small", value: "sm" },
      { label: "Medium", value: "md" },
      { label: "Large", value: "lg" },
      { label: "Extra Large", value: "xl" },
    ],
  });
  const [value, setValue] = useState(["md"]);

  const isLarge = value.includes("lg");

  return (
    <div className="flex flex-col gap-2">
      <p className="text-center text-muted-foreground text-sm">Selected the Large size</p>
      <Item.Group variant="outline">
        <Item className="p-1">
          <Listbox.Root
            collection={collection}
            onValueChange={(value) => setValue(Array.isArray(value) ? value : [value])}
            value={value}
          >
            <Listbox.Content>
              {collection.items.map((item) => (
                <Listbox.Item item={item} key={item.value}>
                  <Listbox.ItemText>{item.label}</Listbox.ItemText>
                  <Listbox.ItemIndicator />
                </Listbox.Item>
              ))}
            </Listbox.Content>
          </Listbox.Root>
        </Item>
      </Item.Group>
      <p className="text-center text-muted-foreground text-sm">{isLarge ? "✅" : "❌"}</p>
    </div>
  );
}
