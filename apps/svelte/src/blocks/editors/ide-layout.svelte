<script lang="ts">
import { ideLayoutBlock } from "@pisagor/recipes/blocks/editors";
import {
  Button,
  createTreeCollection,
  Tabs,
  type TreeNodeType,
  TreeView,
} from "@pisagor/svelte";
import { cn } from "@pisagor/utils";
import XIcon from "phosphor-svelte/lib/XIcon";

const styles = ideLayoutBlock();

interface Props {
  class?: string;
}
let { class: className }: Props = $props();

let activeItem = $state("");

const collection = createTreeCollection({
  rootNode: {
    children: [
      {
        children: [
          { id: "app/page.tsx", name: "page.tsx" },
          { id: "app/layout.tsx", name: "layout.tsx" },
        ],
        id: "app",
        name: "app",
      },
      {
        children: [
          { id: "components/button.tsx", name: "button.tsx" },
          { id: "components/input.tsx", name: "input.tsx" },
        ],
        id: "components",
        name: "components",
      },
      { id: "package.json", name: "package.json" },
      { id: "readme.md", name: "README.md" },
    ],
    id: "ROOT",
    name: "",
  },
});

function handleSelectNode(selectedNodes: TreeNodeType[]) {
  const selectedItem = selectedNodes.map((node) => node.name)[0];
  const isFolder = selectedNodes.every((node) => node.children?.length ?? 0);
  if (isFolder) return;
  activeItem = selectedItem?.split("/").at(-1) ?? "";
}
</script>

{#snippet treeNode(
  node: TreeNodeType,
  indexPath: number[],
)}
  <TreeView.NodeProvider {indexPath} {node}>
    {#if node.children}
      <TreeView.Branch>
        <TreeView.BranchControl>{node.name}</TreeView.BranchControl>
        <TreeView.BranchContent>
          {#each node.children as child, index}
            {@render treeNode(child, [...indexPath, index])}
          {/each}
        </TreeView.BranchContent>
      </TreeView.Branch>
    {:else}
      <TreeView.Item>
        <TreeView.ItemText>{node.name}</TreeView.ItemText>
      </TreeView.Item>
    {/if}
  </TreeView.NodeProvider>
{/snippet}

<div class={cn(styles.root(), className)}>
  <div class={styles.sidebar()}>
    <TreeView
      {collection}
      onSelectionChange={({ selectedNodes }) => handleSelectNode(selectedNodes)}
    >
      <TreeView.Tree>
        {#each collection.rootNode.children ?? [] as node, index}
          {@render treeNode(node, [index])}
        {/each}
      </TreeView.Tree>
    </TreeView>
  </div>
  <div class={styles.pane()}>
    {#if activeItem}
      <Tabs.Root class={styles.tabs()} value={activeItem}>
        <Tabs.List variant="underline">
          <Tabs.Trigger value={activeItem}>
            {activeItem}
            <Button
              aria-label="Close"
              onclick={() => (activeItem = "")}
              size="icon-xs"
              type="button"
              variant="ghost"
            >
              <XIcon />
            </Button>
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content class={styles.content()} value={activeItem}>
          {"// File content"}
        </Tabs.Content>
      </Tabs.Root>
    {/if}
  </div>
</div>
