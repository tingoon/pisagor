<script lang="ts" setup>
import { PhMagnifyingGlass } from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue";
import { EmptyState } from "..";
</script>

<template>
  <EmptyState.Root>
    <EmptyState.Media>
      <PhMagnifyingGlass />
    </EmptyState.Media>
    <EmptyState.Title>No projects found</EmptyState.Title>
    <EmptyState.Description>
      No items match your current filters. Try clearing filters or creating a new project.
    </EmptyState.Description>
    <EmptyState.Actions>
      <Button>Create project</Button>
      <Button variant="outline">Clear filters</Button>
    </EmptyState.Actions>
  </EmptyState.Root>
</template>
