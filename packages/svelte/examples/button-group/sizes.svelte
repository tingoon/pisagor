<script lang="ts">
import { Button, ButtonGroup } from "@pisagor/svelte";

const sizes = ["sm", "md", "lg"] as const;
</script>

<div class="flex flex-col items-start gap-2">
  {#each sizes as size (size)}
    <ButtonGroup {size}>
      <Button {size} variant="outline">Archive</Button>
      <Button {size} variant="outline">Report</Button>
    </ButtonGroup>
  {/each}
</div>
