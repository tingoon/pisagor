<script lang="ts">
import { ScrollArea } from "@pisagor/svelte/scroll-area";
</script>

<ScrollArea class="h-auto rounded-lg border">
      <div class="flex w-max gap-2 p-4">
        {#each Array.from({ length: 20 }) as _}
<div
            class="flex h-20 w-32 shrink-0 items-center justify-center rounded-md bg-muted"
          >
            <span class="font-medium text-sm">Item {i + 1}</span>
          </div>
{/each}
      </div>
    </ScrollArea>
