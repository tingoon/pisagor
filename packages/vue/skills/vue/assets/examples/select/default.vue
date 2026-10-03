<script lang="ts" setup>
import { Select } from "../../../../../src/components/select";

const items = ["Banana", "Apple", "Orange", "Pineapple"];
const placeholder = "Select a fruit";
</script>

<template>
  <Select :items="items" :placeholder="placeholder" />
</template>
