<script lang="ts">
import source from "./custom-composition.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Pagination } from "@pisagor/vue";
</script>

<template>
  <Pagination :count="50" :page-size="10">
    <Pagination.PrevTrigger />
    <Pagination.Items />
    <Pagination.NextTrigger />
  </Pagination>
</template>
