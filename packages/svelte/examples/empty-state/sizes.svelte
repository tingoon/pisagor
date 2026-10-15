<script lang="ts">
import { EmptyState } from "@pisagor/svelte";

const sizes = ["sm", "md", "lg"] as const;
</script>

<div class="flex flex-col gap-4">
  {#each sizes as size (size)}
    <EmptyState
      description="No items match your current filters."
      {size}
      title="No projects found"
    />
  {/each}
</div>
