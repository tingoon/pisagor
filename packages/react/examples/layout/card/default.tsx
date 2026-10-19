import { Card } from "@pisagor/react";

export function Default() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Card header</Card.Title>
        <Card.Description>Brief description about the card</Card.Description>
      </Card.Header>
      <Card.Content>
        <p className="text-muted-foreground text-sm">Card content</p>
      </Card.Content>
      <Card.Footer>
        <p className="text-muted-foreground text-sm">Footer</p>
      </Card.Footer>
    </Card>
  );
}
