<script lang="ts" setup>
import { RadioGroup } from "@pisagor/vue";

const items = [
  { label: "Default", value: "default" },
  { label: "Comfortable", value: "comfortable" },
  { label: "Compact", value: "compact" },
];
</script>

<template>
  <RadioGroup invalid :items="items" />
</template>
