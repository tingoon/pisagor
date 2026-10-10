<script lang="ts">
import { Combobox } from "@pisagor/svelte";

const items = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
];
</script>

<div class="flex flex-col gap-2">
  <Combobox {items} placeholder="Primary" variant="primary" />
  <Combobox {items} placeholder="Secondary" variant="secondary" />
</div>
