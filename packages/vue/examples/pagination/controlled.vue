<script lang="ts" setup>
import { Pagination } from "@pisagor/vue";
import { ref } from "vue";

const page = ref(1);
const onPageChange = (details) => setPage(details.page);
</script>

<template>
  <div class="flex flex-col gap-2">
    <Pagination
      :count="50"
      :page="page"
      :page-size="10"
      @page-change="onPageChange"
    />
    <p class="text-center text-muted-foreground text-sm">
      Page {{ page }} of 5
    </p>
  </div>
</template>
