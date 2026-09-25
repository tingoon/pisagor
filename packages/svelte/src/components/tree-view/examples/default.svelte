<script lang="ts">
import { createTreeCollection, TreeView } from "../index";

const collection = createTreeCollection({
  rootNode: {
    children: [
      { id: "a", name: "A" },
      { id: "b", name: "B" },
    ],
    id: "ROOT",
    name: "",
  },
});
</script>

<TreeView {collection}>
  <TreeView.Label>Files</TreeView.Label>
  <TreeView.Tree>
    {#each collection.rootNode.children ?? [] as node, index (node.id)}
      <TreeView.NodeProvider indexPath={[index]} {node}>
        <TreeView.Item>
          <TreeView.ItemText>{node.name}</TreeView.ItemText>
        </TreeView.Item>
      </TreeView.NodeProvider>
    {/each}
  </TreeView.Tree>
</TreeView>
