<script lang="ts">
import { ScrollArea } from "../index";
</script>

<ScrollArea class="h-32 w-64 rounded-md border">
  <div class="p-4 text-sm">
    {#each Array.from({ length: 20 }, (_, i) => i) as i (i)}
      <p>Line {i + 1}</p>
    {/each}
  </div>
</ScrollArea>
