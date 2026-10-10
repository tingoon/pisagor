<script lang="ts">
import { Autocomplete } from "@pisagor/svelte";

const items = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
];
</script>

<div class="flex flex-col gap-2">
  <Autocomplete {items} placeholder="Primary" variant="primary" />
  <Autocomplete {items} placeholder="Secondary" variant="secondary" />
</div>
