<script lang="ts">
import { TreeView } from "@pisagor/svelte/tree-view";
import { createDemoCollection } from "./helpers";
import TreeNode from "./tree-node.svelte";

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
  >
    <TreeView.Tree>
      {#each collection.rootNode.children ?? [] as node, index}
        <TreeNode indexPath={[index]} {node} />
      {/each}
    </TreeView.Tree>
  </TreeView>
  <p class="text-muted-foreground text-sm">{isCorrectSelection ? "✅" : "❌"}</p>
</div>
