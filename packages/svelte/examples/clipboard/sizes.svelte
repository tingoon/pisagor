<script lang="ts">
import { Clipboard } from "@pisagor/svelte";

const sizes = ["sm", "md", "lg"] as const;
</script>

<div class="flex flex-col gap-2">
  {#each sizes as size (size)}
    <Clipboard {size} value="https://example.com/docs" />
  {/each}
</div>
