<script lang="ts">
import { Select } from "@pisagor/svelte";

const items = [
  { label: "Next.js", value: "next" },
  { label: "Vite", value: "vite" },
  { label: "ESBuild", value: "esbuild" },
];
const sizes = ["sm", "md", "lg"] as const;
</script>

<div class="flex flex-col gap-2">
  {#each sizes as size (size)}
    <Select {items} placeholder="Select framework" {size} />
  {/each}
</div>
