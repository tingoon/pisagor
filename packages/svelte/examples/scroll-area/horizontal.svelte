<script module lang="ts">
  import source from "./horizontal.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { ScrollArea } from "@pisagor/svelte";
</script>

<ScrollArea class="h-auto rounded-lg border">
  <div class="flex w-max gap-2 p-4">
    {#each Array.from({ length: 20 }) as _, i}
      <div
        class="bg-muted flex h-20 w-32 shrink-0 items-center justify-center rounded-md"
      >
        <span class="text-sm font-medium">Item {i + 1}</span>
      </div>
    {/each}
  </div>
</ScrollArea>
