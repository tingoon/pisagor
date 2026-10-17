<script lang="ts">
import source from "./default.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Select } from "@pisagor/vue";

const items = ["Banana", "Apple", "Orange", "Pineapple"];
const placeholder = "Select a fruit";
</script>

<template>
  <Select :items="items" :placeholder="placeholder" />
</template>
