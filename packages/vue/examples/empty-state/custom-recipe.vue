<script lang="ts" setup>
import { PhMagnifyingGlass } from "@phosphor-icons/vue";
import { emptyStateRecipe } from "@pisagor/recipes";
import { Button, EmptyState } from "@pisagor/vue";
import { tv } from "tailwind-variants";

const brandEmptyStateRecipe = tv({
  extend: emptyStateRecipe,
  slots: {
    media: "bg-emerald-500/10 text-emerald-600",
    title: "text-emerald-900 dark:text-emerald-100",
  },
  variants: {},
});
</script>

<template>
  <EmptyState.Root :recipe="brandEmptyStateRecipe">
    <EmptyState.Media>
      <PhMagnifyingGlass />
    </EmptyState.Media>
    <EmptyState.Title>No projects found</EmptyState.Title>
    <EmptyState.Description>
      No items match your current filters. Try clearing filters or creating a
      new project.
    </EmptyState.Description>
    <EmptyState.Actions>
      <Button>Create project</Button>
      <Button variant="outline">Clear filters</Button>
    </EmptyState.Actions>
  </EmptyState.Root>
</template>
