<script lang="ts">
import { TreeView } from "@pisagor/svelte";
import { createDemoCollection } from "./helpers";
import TreeNode from "./tree-node.svelte";

const collection = createDemoCollection();
</script>

<div>
  <TreeView {collection} selectionMode="multiple">
    <TreeView.Tree>
      {#each collection.rootNode.children ?? [] as node, index}
        <TreeNode indexPath={[index]} {node} />
      {/each}
    </TreeView.Tree>
  </TreeView>
</div>
