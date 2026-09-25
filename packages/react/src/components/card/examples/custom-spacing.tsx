import { Card } from "..";

export function CustomSpacing() {
  return (
    <Card className="[--space:--spacing(2)] md:[--space:--spacing(8)]">
      <Card.Header
        description="Brief description about the card"
        title="Card header"
      />
      <Card.Content>
        <p className="text-muted-foreground text-sm">Card content</p>
      </Card.Content>
      <Card.Footer>
        <p className="text-muted-foreground text-sm">Footer</p>
      </Card.Footer>
    </Card>
  );
}
