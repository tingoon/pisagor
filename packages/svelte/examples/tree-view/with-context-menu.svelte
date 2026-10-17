<script module lang="ts">
  import source from "./with-context-menu.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { TreeView } from "@pisagor/svelte";
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
