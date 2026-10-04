<script lang="ts" setup>
import { Accordion } from "@pisagor/vue";
import { ref } from "vue";
import { shortFaqItems } from "./helpers";

const value = ref(["item-1"]);
const items = shortFaqItems();
const onValueChange = ({ value }) => setValue(value);
</script>

<template>
  <div>
    <Accordion :items="items" :value="value" @value-change="onValueChange" />
    <div class="text-center text-muted-foreground text-sm">{{ value }}</div>
  </div>
</template>
