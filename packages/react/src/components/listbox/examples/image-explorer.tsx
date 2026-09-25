import { createListCollection } from "@ark-ui/react";
import { useState } from "react";
import { Listbox } from "..";
export function ImageExplorer() {
  const collection = createListCollection({
    items: [
      {
        alt: "Scenic mountain view",
        label: "Mountain Landscape",
        value: "mountain",
      },
      {
        alt: "Ocean waves",
        label: "Ocean Waves",
        value: "ocean",
      },
      {
        alt: "Forest path",
        label: "Forest Path",
        value: "forest",
      },
      {
        alt: "City skyline",
        label: "City Skyline",
        value: "city",
      },
      {
        alt: "Desert dunes",
        label: "Desert Dunes",
        value: "desert",
      },
    ],
  });
  const [value, setValue] = useState(["mountain"]);

  const selectedImage = collection.items.find(
    (item) => item.value === value.at(0),
  );

  return (
    <div className="flex flex-col gap-2 sm:flex-row">
      <Listbox.Root
        className="w-full"
        collection={collection}
        onValueChange={(value) =>
          setValue(Array.isArray(value) ? value : [value])
        }
        value={value}
      >
        <Listbox.Content className="overflow-auto max-sm:flex-row">
          {collection.items.map((item) => (
            <Listbox.Item item={item} key={item.value}>
              <Listbox.ItemText>{item.label}</Listbox.ItemText>
            </Listbox.Item>
          ))}
        </Listbox.Content>
      </Listbox.Root>
      <div className="flex w-full items-end rounded-xl border bg-muted p-4">
        <div className="mt-auto">
          <h3 className="font-medium text-sm">{selectedImage?.label}</h3>
          <p className="text-muted-foreground text-xs">{selectedImage?.alt}</p>
        </div>
      </div>
    </div>
  );
}
