<script module lang="ts">
  import source from "./compound.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { ScrollArea } from "@pisagor/svelte";

  const items = Array.from({ length: 30 }, (_, index) => `Item ${index + 1}`);
</script>

<ScrollArea.Root class="h-48 w-64 rounded-md border">
  <ScrollArea.Viewport>
    <div class="p-4 text-sm">
      {#each items as item (item)}
        <p>{item}</p>
      {/each}
    </div>
  </ScrollArea.Viewport>
  <ScrollArea.Scrollbar orientation="vertical">
    <ScrollArea.Thumb />
  </ScrollArea.Scrollbar>
  <ScrollArea.Corner />
</ScrollArea.Root>
