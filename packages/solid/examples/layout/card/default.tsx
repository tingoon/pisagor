import { Card } from "@pisagor/solid";

export function Default() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Card header</Card.Title>
        <Card.Description>Brief description about the card</Card.Description>
      </Card.Header>
      <Card.Content>
        <p class="text-muted-foreground text-sm">Card content</p>
      </Card.Content>
      <Card.Footer>
        <p class="text-muted-foreground text-sm">Footer</p>
      </Card.Footer>
    </Card>
  );
}
