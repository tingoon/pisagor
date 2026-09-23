<script lang="ts" setup >
import { Card } from "..";
</script>

<template>
        <Card class="[--space:--spacing(2)] md:[--space:--spacing(8)]">
          <Card.Header description="Brief description about the card" title="Card header" />
          <Card.Content>
            <p class="text-muted-foreground text-sm">Card content</p>
          </Card.Content>
          <Card.Footer>
            <p class="text-muted-foreground text-sm">Footer</p>
          </Card.Footer>
        </Card>
  
</template>
