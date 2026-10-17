import { Item } from "@pisagor/solid";
import { ArrowSquareOutIcon } from "@pisagor/solid/icons";

export function Link() {
  return (
    <Item.Group class="gap-2">
      <Item
        asChild={(props) => (
          <a {...props()} href="https://example.com/docs">
            <Item.Content>
              <Item.Title>Visit our documentation</Item.Title>
              <Item.Description>
                Learn how to get started with our components.
              </Item.Description>
            </Item.Content>
          </a>
        )}
        variant="muted"
      />
      <Item
        asChild={(props) => (
          <a
            {...props()}
            href="https://example.com/resources"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Item.Content>
              <Item.Title>External resource</Item.Title>
              <Item.Description>
                Opens in a new tab with security attributes.
              </Item.Description>
            </Item.Content>
            <ArrowSquareOutIcon />
          </a>
        )}
        variant="outline"
      />
    </Item.Group>
  );
}
