import { Button, Card, LinkBox } from "@pisagor/react";

export function ProductCard() {
  return (
    <LinkBox asChild>
      <Card className="max-w-sm overflow-hidden">
        <Card.Media className="aspect-[4/3] bg-muted" variant="image">
          {/* Image goes here */}
        </Card.Media>
        <Card.Header description="Soft lines and easy depth for modern living spaces.">
          <LinkBox.Overlay asChild>
            <Card.Title asChild>
              <a href="https://example.com/products/living-room-sofa">
                Living room sofa
              </a>
            </Card.Title>
          </LinkBox.Overlay>
        </Card.Header>
        <Card.Footer className="gap-2">
          <Button className="flex-1" variant="outline">
            Add to cart
          </Button>
          <Button className="flex-1">Buy now</Button>
        </Card.Footer>
      </Card>
    </LinkBox>
  );
}
