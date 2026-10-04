<script lang="ts">
import { TreeView } from "@pisagor/svelte";
import { createDemoCollection } from "./helpers";
import TreeNode from "./tree-node.svelte";

let collection = $state(createDemoCollection());

function onRenameComplete(details: { indexPath: number[]; label: string }) {
  const node = collection.at(details.indexPath);
  if (!node) return;
  collection = collection.replace(details.indexPath, {
    ...node,
    name: details.label,
  });
}
</script>

<div>
  <TreeView canRename={() => true} {collection} {onRenameComplete}>
    <TreeView.Tree>
      {#each collection.rootNode.children ?? [] as node, index}
        <TreeNode indexPath={[index]} {node} />
      {/each}
    </TreeView.Tree>
  </TreeView>
</div>
