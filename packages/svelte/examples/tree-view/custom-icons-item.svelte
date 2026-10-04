<script lang="ts">
import { TreeView } from "@pisagor/svelte";
import { createDemoCollection } from "./helpers";
import TreeNodeItem from "./tree-node-item.svelte";

const collection = createDemoCollection();
</script>

<div>
  <TreeView {collection}>
    <TreeView.Tree>
      {#each collection.rootNode.children ?? [] as node, index}
        <TreeNodeItem indexPath={[index]} {node} />
      {/each}
    </TreeView.Tree>
  </TreeView>
</div>
