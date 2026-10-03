<script lang="ts" setup>
import { Pagination } from "../../../../../src/components/pagination";
</script>

<template>
  <Pagination :count="50" :page-size="10">
    <Pagination.PrevTrigger />
    <Pagination.Items />
    <Pagination.NextTrigger />
  </Pagination>
</template>
