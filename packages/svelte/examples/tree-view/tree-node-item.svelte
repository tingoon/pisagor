<script lang="ts">
import { type TreeNodeType, TreeView } from "@pisagor/svelte";
import StarIcon from "phosphor-svelte/lib/StarIcon";
import TreeNodeItem from "./tree-node-item.svelte";

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
          <TreeNodeItem indexPath={[...indexPath, index]} node={child} />
        {/each}
      </TreeView.BranchContent>
    </TreeView.Branch>
  {:else}
    <TreeView.Item>
      <TreeView.ItemText icon={StarIcon}>{node.name}</TreeView.ItemText>
    </TreeView.Item>
  {/if}
</TreeView.NodeProvider>
