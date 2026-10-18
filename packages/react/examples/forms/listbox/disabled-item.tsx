import { Item, Listbox } from "@pisagor/react";

export function DisabledItem() {
  return (
    <Item.Group variant="outline">
      <Item className="p-1">
        <Listbox
          items={[
            { label: "Free", value: "free" },
            { label: "Pro", value: "pro" },
            { disabled: true, label: "Enterprise", value: "enterprise" },
            { label: "Custom", value: "custom" },
          ]}
        />
      </Item>
    </Item.Group>
  );
}
