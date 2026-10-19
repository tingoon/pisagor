import { Card } from "@pisagor/solid";

export function Product() {
  return (
    <Card class="overflow-hidden">
      <Card.Media class="bg-muted h-32" variant="image" />
      <Card.Header>
        <Card.Title>Product title</Card.Title>
        <Card.Description>Product description</Card.Description>
      </Card.Header>
      <Card.Footer>
        <p class="text-muted-foreground text-sm">Footer actions</p>
      </Card.Footer>
    </Card>
  );
}
