import { Item } from "@pisagor/react";

const sizes = ["sm", "md", "lg"] as const;

export function Sizes() {
  return (
    <div className="flex flex-col gap-2">
      {sizes.map((size) => (
        <Item key={size} size={size} variant="outline">
          <Item.Content>
            <Item.Title>Item {size}</Item.Title>
            <Item.Description>
              An item with title and description.
            </Item.Description>
          </Item.Content>
        </Item>
      ))}
    </div>
  );
}
