<script lang="ts">
  import { Combobox } from "@pisagor/svelte";
</script>

<Combobox
  clearable
  defaultValue={["apple"]}
  items={[
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
  ]}
/>
