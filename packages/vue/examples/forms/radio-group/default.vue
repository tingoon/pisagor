<script lang="ts" setup>
import { RadioGroup } from "@pisagor/vue";

const items = [
  { label: "Default", value: "1" },
  { label: "Comfortable", value: "2" },
  { label: "Compact", value: "3" },
];
</script>

<template>
  <RadioGroup default-value="1" :items="items" />
</template>
