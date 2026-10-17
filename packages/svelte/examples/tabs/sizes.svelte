<script module lang="ts">
  import source from "./sizes.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Tabs } from "@pisagor/svelte";
  import { profileTabs } from "./helpers";

  const sizes = ["sm", "md", "lg"] as const;
</script>

<div class="flex flex-col gap-4">
  {#each sizes as size (size)}
    <Tabs defaultValue="tab-1" items={profileTabs()} {size} />
  {/each}
</div>
