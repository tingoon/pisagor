<script lang="ts">
import { Input } from "@pisagor/svelte";
import { Highlight } from "@pisagor/svelte/highlight";

const searchResults = ["Spotlight bulb", "Spot cleaner", "Spot ceiling"];
let query = $state("spot");
</script>

<div class="flex flex-col gap-2">
  <Input
    aria-label="Search"
    oninput={(e) => (query = e.currentTarget.value)}
    placeholder="Search..."
    value={query}
  />
  <div class="space-y-2">
    <p class="text-muted-foreground text-sm">
      Search result for: {query || "(empty)"}
    </p>
    <ul class="space-y-1">
      {#each searchResults as item}
        <li class="text-base text-foreground">
          {#if query}
            <Highlight ignoreCase {query} text={item} />
          {:else}
            {item}
          {/if}
        </li>
      {/each}
    </ul>
  </div>
</div>
