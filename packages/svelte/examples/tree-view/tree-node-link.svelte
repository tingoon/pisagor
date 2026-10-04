<script lang="ts">
import { type TreeNodeType, TreeView } from "@pisagor/svelte";
import ArrowSquareOutIcon from "phosphor-svelte/lib/ArrowSquareOutIcon";
import LinkIcon from "phosphor-svelte/lib/LinkIcon";
import TreeNodeLink from "./tree-node-link.svelte";

type Node = TreeNodeType & { href?: string };

type Props = {
  indexPath: number[];
  node: Node;
};

let { indexPath, node }: Props = $props();
</script>

<TreeView.NodeProvider {indexPath} {node}>
  {#if node.children}
    <TreeView.Branch>
      <TreeView.BranchControl icon={null}>{node.name}</TreeView.BranchControl>
      <TreeView.BranchContent>
        {#each node.children as child, index}
          <TreeNodeLink
            indexPath={[...indexPath, index]}
            node={child as Node}
          />
        {/each}
      </TreeView.BranchContent>
    </TreeView.Branch>
  {:else}
    <TreeView.Item>
      {#snippet asChild(
  props,
)}
        <a
          {...props()}
          href={node.href ?? "#"}
          rel={node.href?.startsWith("http") ? "noopener noreferrer" : undefined}
          target={node.href?.startsWith("http") ? "_blank" : undefined}
        >
          <TreeView.ItemText icon={LinkIcon}>
            {node.name}
            {#if node.href?.startsWith("http")}
              <ArrowSquareOutIcon />
            {/if}
          </TreeView.ItemText>
        </a>
      {/snippet}
    </TreeView.Item>
  {/if}
</TreeView.NodeProvider>
