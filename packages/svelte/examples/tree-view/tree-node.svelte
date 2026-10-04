<script lang="ts">
import { type TreeNodeType, TreeView } from "@pisagor/svelte";
import TreeNode from "./tree-node.svelte";

type Props = {
  indexPath: number[];
  node: TreeNodeType;
};

let { indexPath, node }: Props = $props();
</script>

<TreeView.NodeProvider {indexPath} {node}>
  {#if node.children}
    <TreeView.Branch>
      <TreeView.BranchControl>{node.name}</TreeView.BranchControl>
      <TreeView.BranchContent>
        {#each node.children as child, index}
          <TreeNode indexPath={[...indexPath, index]} node={child} />
        {/each}
      </TreeView.BranchContent>
    </TreeView.Branch>
  {:else}
    <TreeView.Item>
      <TreeView.ItemText>{node.name}</TreeView.ItemText>
    </TreeView.Item>
  {/if}
</TreeView.NodeProvider>
