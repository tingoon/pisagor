<script lang="ts">
import { SegmentGroup } from "@pisagor/svelte";

const sizes = ["sm", "md", "lg"] as const;
const items = [
  { label: "Profile", value: "Profile" },
  { label: "Account", value: "Account" },
  { label: "Security", value: "Security" },
];
</script>

<div class="flex flex-col items-start gap-2">
  {#each sizes as size (size)}
    <SegmentGroup defaultValue="Profile" {items} {size} />
  {/each}
</div>
