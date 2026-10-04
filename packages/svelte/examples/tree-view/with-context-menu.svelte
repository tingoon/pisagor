<script lang="ts">
import { TreeView } from "@pisagor/svelte/tree-view";
import { createDemoCollection } from "./helpers";
import TreeNodeContext from "./tree-node-context.svelte";

const collection = createDemoCollection();
</script>

<div>
  <TreeView {collection}>
    <TreeView.Tree>
      {#each collection.rootNode.children ?? [] as node, index}
        <TreeNodeContext indexPath={[index]} {node} />
      {/each}
    </TreeView.Tree>
  </TreeView>
</div>
