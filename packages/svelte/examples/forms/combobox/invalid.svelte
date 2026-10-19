<script lang="ts">
  import { Combobox } from "@pisagor/svelte";
</script>

<Combobox
  invalid
  items={[
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
  ]}
/>
