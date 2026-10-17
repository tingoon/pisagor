import source from "./selection-multiple.tsx?raw";
import { Item, Listbox } from "@pisagor/react";

export function SelectionMultiple() {
  return (
    <Item.Group variant="outline">
      <Item className="p-1">
        <Listbox
          items={[
            { label: "Brazil", value: "br" },
            { label: "Mexico", value: "mx" },
            { label: "Ireland", value: "ie" },
          ]}
          selectionMode="multiple"
        />
      </Item>
    </Item.Group>
  );
}

export { source as SelectionMultipleSource };
