<script lang="ts">
  import { TreeView } from "@pisagor/svelte";
  import { createDemoCollection } from "./helpers";

  const collection = createDemoCollection();
  let selected = $state<string[]>([]);
  const isCorrectSelection = $derived(selected[0] === "components/input.tsx");
</script>

<div class="flex flex-col items-center gap-2">
  <p class="text-muted-foreground text-sm">Select input.tsx</p>
  <TreeView
    class="overflow-hidden"
    {collection}
    onSelectionChange={({ selectedValue }) => (selected = selectedValue)}
    selectedValue={selected}
  />
  <p class="text-muted-foreground text-sm">
    {isCorrectSelection ? "✅" : "❌"}
  </p>
</div>
