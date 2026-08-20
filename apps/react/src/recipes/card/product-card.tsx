import { Button, Card, LinkBox } from "@pisagor/react";

export function ProductCard() {
  return (
    <LinkBox asChild>
      <Card className="overflow-hidden">
        <Card.Media className="h-32 bg-muted" variant="image">
          {/* Image goes here */}
        </Card.Media>
        <Card.Header description="This sofa is perfect for modern tropical spaces, baroque inspired spaces.">
          <LinkBox.Overlay asChild>
            <Card.Title asChild>
              <a href="https://example.com/products/living-room-sofa">Living room Sofa</a>
            </Card.Title>
          </LinkBox.Overlay>
        </Card.Header>
        <Card.Footer className="flex-row-reverse gap-2">
          <Button className="flex-1">Buy now</Button>
          <Button className="flex-1" variant="outline">
            Add to cart
          </Button>
        </Card.Footer>
      </Card>
    </LinkBox>
  );
}
