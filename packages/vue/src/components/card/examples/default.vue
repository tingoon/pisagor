<script lang="ts" setup >
import { Card } from "..";
</script>

<template>
        <div class="w-96">
          <Card>
            <Card.Header description="Brief description about the card" title="Card header" />
            <Card.Content>
              <p class="text-muted-foreground text-sm">Card content</p>
            </Card.Content>
            <Card.Footer>
              <p class="text-muted-foreground text-sm">Footer</p>
            </Card.Footer>
          </Card>
        </div>
  
</template>
