<script lang="ts">
  import { Portal } from "@ark-ui/svelte";
  import { ContextMenu, type TreeNodeType, TreeView } from "@pisagor/svelte";
  import {
    CaretRightIcon,
    FileIcon,
    FilePlusIcon,
    FolderIcon,
    FolderPlusIcon,
    PencilSimpleIcon,
    TrashIcon,
  } from "phosphor-svelte";
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
      <ContextMenu.Root>
        <ContextMenu.ContextTrigger>
          {#snippet asChild(props)}
            <TreeView.BranchControl {...props()}>
              <TreeView.BranchIndicator>
                <CaretRightIcon />
              </TreeView.BranchIndicator>
              <TreeView.BranchText>
                <FolderIcon />
                {node.name}
              </TreeView.BranchText>
            </TreeView.BranchControl>
          {/snippet}
        </ContextMenu.ContextTrigger>
        <Portal>
          <ContextMenu.Positioner>
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
          </ContextMenu.Positioner>
        </Portal>
      </ContextMenu.Root>
      <TreeView.BranchContent>
        <TreeView.BranchIndentGuide />
        {#each node.children as child, index}
          <TreeNodeContext indexPath={[...indexPath, index]} node={child} />
        {/each}
      </TreeView.BranchContent>
    </TreeView.Branch>
  {:else}
    <ContextMenu.Root>
      <ContextMenu.ContextTrigger>
        {#snippet asChild(props)}
          <TreeView.Item {...props()}>
            <FileIcon />
            <TreeView.ItemText>{node.name}</TreeView.ItemText>
          </TreeView.Item>
        {/snippet}
      </ContextMenu.ContextTrigger>
      <Portal>
        <ContextMenu.Positioner>
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
        </ContextMenu.Positioner>
      </Portal>
    </ContextMenu.Root>
  {/if}
</TreeView.NodeProvider>
