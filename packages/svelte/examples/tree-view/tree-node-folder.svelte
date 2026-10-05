<script lang="ts">
import { type TreeNodeType, TreeView } from "@pisagor/svelte";
import type { Component } from "svelte";
import TreeNodeFolder from "./tree-node-folder.svelte";

type Props = {
  indexPath: number[];
  node: TreeNodeType & {
    expandedIcon?: Component | null;
    icon?: Component | null;
  };
};

let { indexPath, node }: Props = $props();
</script>

<TreeView.NodeProvider {indexPath} {node}>
  {#if node.children}
    <TreeView.Branch>
      <TreeView.BranchControl expandedIcon={node.expandedIcon} icon={node.icon}>
        {node.name}
      </TreeView.BranchControl>
      <TreeView.BranchContent>
        {#each node.children as child, index}
          <TreeNodeFolder indexPath={[...indexPath, index]} node={child} />
        {/each}
      </TreeView.BranchContent>
    </TreeView.Branch>
  {:else}
    <TreeView.Item>
      <TreeView.ItemText>{node.name}</TreeView.ItemText>
    </TreeView.Item>
  {/if}
</TreeView.NodeProvider>
