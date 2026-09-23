import { ArrowSquareOutIcon } from "@phosphor-icons/react";
import { Item } from "..";

export function Link() {
  return (
    <Item.Group className="gap-2">
      <Item asChild variant="muted">
        <a href="https://example.com/docs">
          <Item.Content>
            <Item.Title>Visit our documentation</Item.Title>
            <Item.Description>Learn how to get started with our components.</Item.Description>
          </Item.Content>
        </a>
      </Item>
      <Item asChild variant="outline">
        <a href="https://example.com/resources" rel="noopener noreferrer" target="_blank">
          <Item.Content>
            <Item.Title>External resource</Item.Title>
            <Item.Description>Opens in a new tab with security attributes.</Item.Description>
          </Item.Content>
          <ArrowSquareOutIcon />
        </a>
      </Item>
    </Item.Group>
  );
}
