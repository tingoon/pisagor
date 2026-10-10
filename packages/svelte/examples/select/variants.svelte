<script lang="ts">
import { Select } from "@pisagor/svelte";

const items = ["Apple", "Banana", "Orange"];
</script>

<div class="flex flex-col gap-2">
  <Select {items} placeholder="Primary" variant="primary" />
  <Select {items} placeholder="Secondary" variant="secondary" />
</div>
