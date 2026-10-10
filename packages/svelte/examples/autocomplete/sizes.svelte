<script lang="ts">
import { Autocomplete } from "@pisagor/svelte";

const items = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
];
const sizes = ["sm", "md", "lg"] as const;
</script>

<div class="flex flex-col gap-2">
  {#each sizes as size (size)}
    <Autocomplete {items} placeholder={`Size ${size}`} {size} />
  {/each}
</div>
