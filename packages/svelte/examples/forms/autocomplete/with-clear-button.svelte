<script lang="ts">
  import { Autocomplete } from "@pisagor/svelte";
</script>

<Autocomplete
  clearable
  defaultValue={["apple"]}
  items={[
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
  ]}
/>
