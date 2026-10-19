<script lang="ts">
  import { Command } from "@pisagor/svelte";

  const initialItems = [
    { group: "Fruit", label: "Apple", value: "apple" },
    { group: "Fruit", label: "Banana", value: "banana" },
    { group: "Fruit", label: "Cherry", value: "cherry" },
    { group: "Countries", label: "United States", value: "us" },
    { group: "Countries", label: "United Kingdom", value: "uk" },
    { group: "Countries", label: "Germany", value: "de" },
  ];
</script>

<Command items={initialItems} placeholder="Search..." />
