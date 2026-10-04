<script lang="ts">
import { TreeView } from "@pisagor/svelte/tree-view";
import { createDemoCollection } from "./helpers";
import TreeNodeCheckbox from "./tree-node-checkbox.svelte";

const collection = createDemoCollection();
let checkedValue = $state<string[]>([]);
</script>

<div>
  <TreeView
    {checkedValue}
    {collection}
    onCheckedChange={({ checkedValue: next }) => (checkedValue = next)}
  >
    <TreeView.Tree>
      {#each collection.rootNode.children ?? [] as node, index}
        <TreeNodeCheckbox indexPath={[index]} {node} />
      {/each}
    </TreeView.Tree>
  </TreeView>
</div>
