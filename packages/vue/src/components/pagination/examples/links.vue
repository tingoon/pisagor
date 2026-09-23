<script lang="ts" setup >
import { PhCaretLeft, PhCaretRight } from "@phosphor-icons/vue";
import { Pagination } from "..";
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
