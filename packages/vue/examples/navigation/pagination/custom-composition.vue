<script lang="ts" setup>
import { PhCaretLeft, PhCaretRight, PhDotsThree } from "@phosphor-icons/vue";
import { Button, Pagination } from "@pisagor/vue";
</script>

<template>
  <Pagination.Root :count="50" :page-size="10">
    <Pagination.PrevTrigger as-child>
      <Button variant="ghost">
        <PhCaretLeft />
        Previous
      </Button>
    </Pagination.PrevTrigger>
    <Pagination.Context v-slot="{ pages }">
      <template v-for="(page, index) in pages" :key="index">
        <Pagination.Item
          v-if="page.type === 'page'"
          as-child
          type="page"
          :value="page.value"
        >
          <Button size="icon-md" variant="ghost">{{ page.value }}</Button>
        </Pagination.Item>
        <Pagination.Ellipsis v-else :index="index">
          <PhDotsThree />
        </Pagination.Ellipsis>
      </template>
    </Pagination.Context>
    <Pagination.NextTrigger as-child>
      <Button variant="ghost">
        Next
        <PhCaretRight />
      </Button>
    </Pagination.NextTrigger>
  </Pagination.Root>
</template>
