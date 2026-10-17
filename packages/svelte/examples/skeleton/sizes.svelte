<script module lang="ts">
  import source from "./sizes.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Skeleton } from "@pisagor/svelte";

  const sizes = ["sm", "md", "lg"] as const;
</script>

<div class="flex flex-col gap-4">
  {#each sizes as size (size)}
    <div class="flex items-center gap-2">
      <Skeleton.Circle {size} />
      <Skeleton.Text lines={2} {size} />
    </div>
  {/each}
</div>
