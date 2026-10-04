<script lang="ts">
import { Input } from "@pisagor/svelte";

let value = $state("Hello world");
</script>

<Input
  clearable
  onChange={({ target }) => (value = target.value)}
  placeholder="Type to search..."
  {value}
/>
