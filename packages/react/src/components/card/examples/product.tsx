import { Card } from "..";

export function Product() {
  return (
    <Card className="overflow-hidden">
      <Card.Media className="h-32 bg-muted" variant="image" />
      <Card.Header description="Product description" title="Product title" />
      <Card.Footer>
        <p className="text-muted-foreground text-sm">Footer actions</p>
      </Card.Footer>
    </Card>
  );
}
