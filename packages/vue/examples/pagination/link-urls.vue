<script lang="ts">
import source from "./link-urls.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Pagination } from "@pisagor/vue";

const getHref = (page: number) => `/blog/page/${page}`;
</script>

<template>
  <Pagination :count="50" :page-size="10">
    <Pagination.ItemLink page="previous" :get-href="getHref">
      Previous
    </Pagination.ItemLink>
    <Pagination.ItemLink page="next" :get-href="getHref"
      >Next</Pagination.ItemLink
    >
  </Pagination>
</template>
