<script lang="ts" setup>
import { PhMagnifyingGlass } from "@phosphor-icons/vue";
import { EmptyState } from "..";
</script>

<template>
  <EmptyState.Root>
    <EmptyState.Media>
      <PhMagnifyingGlass />
    </EmptyState.Media>
    <EmptyState.Title>No projects found</EmptyState.Title>
    <EmptyState.Description>
      No items match your current filters. Try clearing filters or creating a
      new project.
    </EmptyState.Description>
    <EmptyState.Actions>
      <button
        class="inline-flex h-9 items-center rounded-lg bg-primary px-4 text-primary-foreground text-sm"
        type="button"
      >
        Create project
      </button>
    </EmptyState.Actions>
  </EmptyState.Root>
</template>
