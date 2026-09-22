<script setup lang="ts">
import { Accordion } from "..";
import { shortFaqItems } from "./helpers";

const items = [
  {
    content: "Our flagship product combines cutting-edge technology with sleek design.",
    title: "Product information",
    value: "item-1",
  },
  {
    content: "We offer worldwide shipping through trusted courier partners.",
    title: "Shipping details",
    value: "item-2",
  },
  {
    content: "We stand behind our products with a comprehensive 30-day return policy.",
    title: "Return policy",
    value: "item-3",
  },
];

const disabledItems = items.map((item) =>
  item.value === "item-2" ? { ...item, disabled: true } : item,
);
</script>

<template>
  <Accordion :default-value="['item-1']" :items="disabledItems" />
</template>
