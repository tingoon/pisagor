<script lang="ts">
  import {
    Button,
    createTreeCollection,
    Tabs,
    type TreeNodeType,
    TreeView,
  } from "@pisagor/svelte";
  import { cn } from "@pisagor/utils";
  import { XIcon } from "phosphor-svelte";
  import { ideLayoutBlock } from "#/styles/recipes/editors";

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

<div class={cn(styles.root(), className)}>
  <div class={styles.sidebar()}>
    <TreeView
      {collection}
      onSelectionChange={({
        selectedNodes,
      }: {
        selectedNodes: TreeNodeType[];
      }) => handleSelectNode(selectedNodes)}
    />
  </div>
  <div class={styles.pane()}>
    {#if activeItem}
      <Tabs.Root class={styles.tabs()} value={activeItem} variant="underline">
        <Tabs.List>
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
