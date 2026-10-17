import { Item, Listbox } from "@pisagor/react";

export function Disabled() {
  return (
    <Item.Group variant="outline">
      <Item className="p-1">
        <Listbox
          disabled
          items={[
            { label: "Brazil", value: "br" },
            { label: "Mexico", value: "mx" },
            { label: "Ireland", value: "ie" },
          ]}
        />
      </Item>
    </Item.Group>
  );
}
