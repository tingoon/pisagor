import { Card } from "..";

export function Default() {
  return (
    <Card>
      <Card.Header description="Brief description about the card" title="Card header" />
      <Card.Content>
        <p className="text-muted-foreground text-sm">Card content</p>
      </Card.Content>
      <Card.Footer>
        <p className="text-muted-foreground text-sm">Footer</p>
      </Card.Footer>
    </Card>
  );
}
