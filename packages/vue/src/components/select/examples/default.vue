<script lang="ts" setup >
import { Select } from "..";

const items = ["Banana", "Apple", "Orange", "Pineapple"];
const placeholder = "Select a fruit";
</script>

<template>
  <Select :items="items" :placeholder="placeholder" />
</template>
