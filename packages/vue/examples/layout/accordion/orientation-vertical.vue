<script lang="ts" setup>
import { Accordion } from "@pisagor/vue";
import { shortFaqItems } from "./helpers";

const items = shortFaqItems();
</script>

<template>
  <Accordion
    :default-value="['item-1']"
    :items="items"
    orientation="vertical"
  />
</template>
