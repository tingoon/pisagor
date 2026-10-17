<script lang="ts">
import source from "./default.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Breadcrumb } from "@pisagor/vue";

const items = [
  { href: "https://example.com/", label: "Home" },
  { href: "https://example.com/", label: "Components" },
  { isCurrentPage: true, label: "Breadcrumb" },
];
</script>

<template>
  <Breadcrumb :items="items" />
</template>
