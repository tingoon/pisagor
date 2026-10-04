<script lang="ts">
import { Button, EmptyState } from "@pisagor/svelte";
import MagnifyingGlassIcon from "phosphor-svelte/lib/MagnifyingGlassIcon";
</script>

<EmptyState.Root>
      <EmptyState.Media>
        <MagnifyingGlassIcon />
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
