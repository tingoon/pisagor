<script lang="ts">
  import { TreeView } from "@pisagor/svelte";
  import { createDemoCollection } from "./helpers";

  const collection = createDemoCollection();
  let checkedValue = $state<string[]>([]);
</script>

<div>
  <TreeView
    {checkedValue}
    {collection}
    checkbox
    onCheckedChange={({ checkedValue: next }) => (checkedValue = next)}
  />
</div>
