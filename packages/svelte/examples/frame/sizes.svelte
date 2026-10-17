<script module lang="ts">
  import source from "./sizes.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Frame } from "@pisagor/svelte";

  const sizes = ["sm", "md", "lg"] as const;
</script>

<div class="flex flex-col gap-4">
  {#each sizes as size (size)}
    <Frame {size}>
      <Frame.Header>
        <Frame.Title>Section {size}</Frame.Title>
      </Frame.Header>
      <Frame.Panel>
        <p class="text-muted-foreground text-sm">Section content</p>
      </Frame.Panel>
    </Frame>
  {/each}
</div>
