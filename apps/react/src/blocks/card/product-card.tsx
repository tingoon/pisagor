import { Button, Card, LinkBox } from "@pisagor/react";
import { productCardBlock } from "@pisagor/recipes/blocks/card";

const styles = productCardBlock();

export function ProductCard() {
  return (
    <LinkBox asChild>
      <Card className={styles.root()}>
        <Card.Media className={styles.media()} variant="image">
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
        <Card.Footer className={styles.footer()}>
          <Button className={styles.action()} variant="outline">
            Add to cart
          </Button>
          <Button className={styles.action()}>Buy now</Button>
        </Card.Footer>
      </Card>
    </LinkBox>
  );
}
