<script lang="ts" setup>
import { Accordion, Card } from "@pisagor/vue";
import { faqItems } from "./helpers";

const items = faqItems();
</script>

<template>
  <Card>
    <Card.Header
      description="Common questions about our products, shipping, and returns."
      title="Product information"
    />
    <Card.Content>
      <Accordion :default-value="['item-1']" :items="items" />
    </Card.Content>
  </Card>
</template>
