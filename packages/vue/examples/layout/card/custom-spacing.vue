<script lang="ts" setup>
import { Card } from "@pisagor/vue";
</script>

<template>
  <Card class="[--space:--spacing(2)] md:[--space:--spacing(8)]">
    <Card.Header>
      <Card.Title>Card header</Card.Title>
      <Card.Description>Brief description about the card</Card.Description>
    </Card.Header>
    <Card.Content>
      <p class="text-muted-foreground text-sm">Card content</p>
    </Card.Content>
    <Card.Footer>
      <p class="text-muted-foreground text-sm">Footer</p>
    </Card.Footer>
  </Card>
</template>
