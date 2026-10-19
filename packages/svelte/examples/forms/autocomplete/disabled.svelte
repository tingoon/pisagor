<script lang="ts">
  import { Autocomplete } from "@pisagor/svelte";
</script>

<Autocomplete
  disabled
  items={[
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
  ]}
/>
