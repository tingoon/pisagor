<script module lang="ts">
  import source from "./scroll-fade.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { ScrollArea, Separator } from "@pisagor/svelte";

  const tags = Array.from({ length: 50 }, (_, i) => `v1.0.0-beta.${i}`);
</script>

<ScrollArea class="h-64 w-48 rounded-md border" scrollFade>
  <div class="p-4">
    <h4 class="mb-4 text-sm leading-none font-medium">Tags</h4>
    {#each tags as tag}
      <div class="text-sm">{tag}</div>
      <Separator class="my-2" />
    {/each}
  </div>
</ScrollArea>
