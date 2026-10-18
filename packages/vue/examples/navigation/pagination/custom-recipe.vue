<script lang="ts" setup>
import { paginationRecipe } from "@pisagor/recipes";
import { Pagination } from "@pisagor/vue";
import { tv } from "tailwind-variants";

const brandPaginationRecipe = tv({
  extend: paginationRecipe,
  slots: {
    item: "data-selected:not-[hover]:border-emerald-500 data-selected:not-[hover]:text-emerald-700 dark:data-selected:not-[hover]:text-emerald-300",
  },
  variants: {},
});
</script>

<template>
  <Pagination :count="50" :page-size="10" :recipe="brandPaginationRecipe" />
</template>
