<script lang="ts" setup>
import { PhCurrencyDollar } from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue";
import { Card } from "..";
</script>

<template>
  <Card>
    <Card.Media variant="icon">
      <PhCurrencyDollar />
    </Card.Media>
    <Card.Header
      description="Minimum purchase of $100 required. Use code at checkout."
      title="Get 15% off"
    />
    <Card.Content>
      <pre class="rounded-md bg-muted p-2 text-center font-medium text-sm">
              <code>15OFF</code>
            </pre>
    </Card.Content>
    <Card.Footer class="flex-row-reverse">
      <Button size="sm">Copy code</Button>
    </Card.Footer>
  </Card>
</template>
