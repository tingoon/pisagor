<script lang="ts">
import { ContextMenu, type TreeNodeType, TreeView } from "@pisagor/svelte";
import FilePlusIcon from "phosphor-svelte/lib/FilePlusIcon";
import FolderPlusIcon from "phosphor-svelte/lib/FolderPlusIcon";
import PencilSimpleIcon from "phosphor-svelte/lib/PencilSimpleIcon";
import TrashIcon from "phosphor-svelte/lib/TrashIcon";
import TreeNodeContext from "./tree-node-context.svelte";

type Props = {
  indexPath: number[];
  node: TreeNodeType;
};

let { indexPath, node }: Props = $props();
</script>

<TreeView.NodeProvider {indexPath} {node}>
  {#if node.children}
    <TreeView.Branch>
      <ContextMenu>
        <ContextMenu.ContextTrigger>
          {#snippet asChild(props)}
            <TreeView.BranchControl {...props()}>{node.name}</TreeView.BranchControl>
          {/snippet}
        </ContextMenu.ContextTrigger>
        <ContextMenu.Content class="w-40">
          <ContextMenu.Item value="add-folder">
            <FolderPlusIcon aria-hidden />
            Add folder
          </ContextMenu.Item>
          <ContextMenu.Item value="add-file">
            <FilePlusIcon aria-hidden />
            Add file
          </ContextMenu.Item>
          <ContextMenu.Separator />
          <ContextMenu.Item value="rename">
            <PencilSimpleIcon aria-hidden />
            Rename
          </ContextMenu.Item>
          <ContextMenu.Separator />
          <ContextMenu.Item value="delete" variant="destructive">
            <TrashIcon aria-hidden />
            Delete
          </ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu>
      <TreeView.BranchContent>
        {#each node.children as child, index}
          <TreeNodeContext indexPath={[...indexPath, index]} node={child} />
        {/each}
      </TreeView.BranchContent>
    </TreeView.Branch>
  {:else}
    <ContextMenu>
      <ContextMenu.ContextTrigger>
        {#snippet asChild(props)}
          <TreeView.Item {...props()}>
            <TreeView.ItemText>{node.name}</TreeView.ItemText>
          </TreeView.Item>
        {/snippet}
      </ContextMenu.ContextTrigger>
      <ContextMenu.Content class="w-40">
        <ContextMenu.Item value="add-file">
          <PencilSimpleIcon aria-hidden />
          Rename
        </ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item value="delete" variant="destructive">
          <TrashIcon aria-hidden />
          Delete
        </ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu>
  {/if}
</TreeView.NodeProvider>
