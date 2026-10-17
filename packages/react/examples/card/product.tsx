import { Card } from "@pisagor/react";

export function Product() {
  return (
    <Card className="overflow-hidden">
      <Card.Media className="bg-muted h-32" variant="image" />
      <Card.Header description="Product description" title="Product title" />
      <Card.Footer>
        <p className="text-muted-foreground text-sm">Footer actions</p>
      </Card.Footer>
    </Card>
  );
}
