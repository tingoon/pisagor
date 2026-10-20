<script lang="ts" setup>
import { PhCaretLeft, PhCaretRight, PhDotsThree } from "@phosphor-icons/vue";
import { Pagination } from "@pisagor/vue";
</script>

<template>
  <Pagination.Root :count="50" :page-size="10">
    <Pagination.ItemLink page="previous">
      <PhCaretLeft />
      Previous
    </Pagination.ItemLink>
    <Pagination.Context v-slot="{ pages }">
      <template v-for="(page, index) in pages" :key="index">
        <Pagination.ItemLink
          v-if="page.type === 'page'"
          :page="page.value"
          size="icon-md"
        >
          {{ page.value }}
        </Pagination.ItemLink>
        <Pagination.Ellipsis v-else :index="index">
          <PhDotsThree />
        </Pagination.Ellipsis>
      </template>
    </Pagination.Context>
    <Pagination.ItemLink page="next">
      Next
      <PhCaretRight />
    </Pagination.ItemLink>
  </Pagination.Root>
</template>
