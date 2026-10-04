<script lang="ts">
import { TreeView } from "@pisagor/svelte/tree-view";
import { createDemoCollection } from "./helpers";
import TreeNode from "./tree-node.svelte";

let collection = $state(createDemoCollection());
</script>

<div>
  <TreeView
    canRename={() => true}
    {collection}
    onRenameComplete={(details) => {
      collection = (() => {
        const node = collection.at(details.indexPath);
        if (!node) return collection;
        return collection.replace(details.indexPath, {
          ...node,
          name: details.label,
        });
      })();
    }}
  >
    <TreeView.Tree>
      {#each collection.rootNode.children ?? [] as node, index}
        <TreeNode indexPath={[index]} {node} />
      {/each}
    </TreeView.Tree>
  </TreeView>
</div>
