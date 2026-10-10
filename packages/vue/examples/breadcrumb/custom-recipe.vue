<script lang="ts" setup>
import { breadcrumbRecipe } from "@pisagor/recipes";
import { Breadcrumb } from "@pisagor/vue";
import { tv } from "tailwind-variants";

const brandBreadcrumbRecipe = tv({
  extend: breadcrumbRecipe,
  slots: {
    list: "text-emerald-700 dark:text-emerald-300",
    separator: "text-emerald-500",
  },
  variants: {},
});
</script>

<template>
  <Breadcrumb
    :items="[
      { href: 'https://example.com/', label: 'Home' },
      { href: 'https://example.com/', label: 'Components' },
      { isCurrentPage: true, label: 'Breadcrumb' },
    ]"
    :recipe="brandBreadcrumbRecipe"
  />
</template>
