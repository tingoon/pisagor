<script lang="ts">
import source from "./links.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { PhCaretLeft, PhCaretRight } from "@phosphor-icons/vue";
import { Pagination } from "@pisagor/vue";
</script>

<template>
  <Pagination :count="50" :page-size="10">
    <Pagination.ItemLink page="previous">
      <PhCaretLeft />
      Previous
    </Pagination.ItemLink>
    <Pagination.Items />
    <Pagination.ItemLink page="next">
      Next
      <PhCaretRight />
    </Pagination.ItemLink>
  </Pagination>
</template>
