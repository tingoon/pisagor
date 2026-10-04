/** @jsxImportSource solid-js */

import { createListCollection } from "@ark-ui/solid/collection";
import { Listbox } from "@pisagor/solid";
import { createSignal } from "solid-js";
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
  const [value, setValue] = createSignal(["mountain"]);

  const selectedImage = collection.items.find(
    (item) => item.value === value().at(0),
  );

  return (
    <div class="flex flex-col gap-2 sm:flex-row">
      <Listbox.Root
        class="w-full"
        collection={collection}
        onValueChange={(value) =>
          setValue(Array.isArray(value) ? value : [value])
        }
        value={value()}
      >
        <Listbox.Content class="overflow-auto max-sm:flex-row">
          {collection.items.map((item) => (
            <Listbox.Item item={item}>
              <Listbox.ItemText>{item.label}</Listbox.ItemText>
            </Listbox.Item>
          ))}
        </Listbox.Content>
      </Listbox.Root>
      <div class="flex w-full items-end rounded-xl border bg-muted p-4">
        <div class="mt-auto">
          <h3 class="font-medium text-sm">{selectedImage?.label}</h3>
          <p class="text-muted-foreground text-xs">{selectedImage?.alt}</p>
        </div>
      </div>
    </div>
  );
}
