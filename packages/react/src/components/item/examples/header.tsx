import { Item } from "..";

export function Header() {
  return (
    <Item variant="outline">
      <Item.Header>
        <img
          alt="Item preview"
          className="aspect-square w-full grayscale"
          height={128}
          src="https://picsum.photos/seed/1/500/300"
          width={128}
        />
      </Item.Header>
      <Item.Content>
        <Item.Title>Item title</Item.Title>
        <Item.Description>Brief description of the item.</Item.Description>
      </Item.Content>
    </Item>
  );
}
