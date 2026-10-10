<script lang="ts" setup>
import { Timeline } from "@pisagor/vue";

const items = [
  { title: "Planned" },
  { title: "In progress" },
  { title: "Shipped" },
];
</script>

<template>
  <div class="w-full">
    <Timeline orientation="horizontal" :items="items" />
  </div>
</template>
