<script lang="ts">
import { productCardBlock } from "@pisagor/recipes/blocks/card";
import { Button, Card } from "@pisagor/svelte";

const styles = productCardBlock();
</script>

<Card class={styles.root()}>
  <Card.Media class={styles.media()} variant="image" />
  <Card.Header
    description="Soft lines and easy depth for modern living spaces."
  >
    <Card.Title>
      <a href="https://example.com/products/living-room-sofa"
        >Living room sofa</a
      >
    </Card.Title>
  </Card.Header>
  <Card.Footer class={styles.footer()}>
    <Button class={styles.action()} variant="outline">Add to cart</Button>
    <Button class={styles.action()}>Buy now</Button>
  </Card.Footer>
</Card>
