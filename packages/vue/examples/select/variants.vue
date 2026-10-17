<script lang="ts" setup>
import { Select } from "@pisagor/vue";

const items = ["Apple", "Banana", "Orange"];
</script>

<template>
  <div class="flex flex-col gap-2">
    <Select placeholder="Primary" variant="primary" :items="items" />
    <Select placeholder="Secondary" variant="secondary" :items="items" />
  </div>
</template>
