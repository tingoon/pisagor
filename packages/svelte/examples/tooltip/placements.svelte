<script lang="ts">
import { Button, Tooltip } from "@pisagor/svelte";

const placements = ["left", "top", "bottom", "right"] as const;
</script>

<div class="flex flex-wrap items-center justify-center gap-2">
  {#each placements as placement}
    <Tooltip positioning={{ placement }}>
      {#snippet content()}
        <p>Add to library</p>
      {/snippet}
      <Button class="capitalize" variant="outline">{placement}</Button>
    </Tooltip>
  {/each}
</div>
