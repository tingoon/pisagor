import { createListCollection } from "@ark-ui/react";
import { Field, Listbox } from "@pisagor/react";

export function Horizontal() {
  const collection = createListCollection({
    items: [
      { artist: "Harbor Lights", title: "Midnight Pier" },
      { artist: "The Night Owls", title: "Quiet Hours" },
      { artist: "Neon Pulse", title: "Glass Orchard" },
      { artist: "Copper Vein", title: "Northbound" },
    ],
    itemToString: (item) => item.title,
    itemToValue: (item) => item.title,
  });

  return (
    <Field>
      <Field.Label>Favorite album</Field.Label>
      <Listbox.Root collection={collection} orientation="horizontal">
        <Listbox.Content className="overflow-x-auto">
          {collection.items.map((item) => (
            <Listbox.Item
              className="w-full flex-col items-start"
              item={item}
              key={item.title}
            >
              <div className="bg-foreground aspect-square size-20 w-full rounded-lg" />
              <div>
                <Listbox.ItemText>{item.title}</Listbox.ItemText>
                <p className="text-muted-foreground text-xs">{item.artist}</p>
              </div>
              <Listbox.ItemIndicator className="bg-background [&_svg]:text-foreground! absolute top-4 right-4 shrink-0 rounded-xs" />
            </Listbox.Item>
          ))}
        </Listbox.Content>
      </Listbox.Root>
    </Field>
  );
}
