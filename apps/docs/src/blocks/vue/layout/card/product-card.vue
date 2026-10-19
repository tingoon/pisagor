<script lang="ts" setup>
import { Button, Card } from "@pisagor/vue";
import { productCardBlock } from "#/styles/recipes/card";

const styles = productCardBlock();
</script>

<template>
  <Card :class="styles.root()">
    <Card.Media variant="image" :class="styles.media()" />
    <Card.Header>
      <Card.Description>
        Soft lines and easy depth for modern living spaces.
      </Card.Description>

      <Card.Title>
        <a href="https://example.com/products/living-room-sofa">
          Living room sofa
        </a>
      </Card.Title>
    </Card.Header>
    <Card.Footer :class="styles.footer()">
      <Button type="button" variant="outline" :class="styles.action()">
        Add to cart
      </Button>
      <Button type="button" :class="styles.action()">Buy now</Button>
    </Card.Footer>
  </Card>
</template>
