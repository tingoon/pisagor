/** @jsxImportSource solid-js */

import { ideLayoutBlock } from "@pisagor/recipes/blocks/editors";
import type { NodeProviderProps, TreeNodeType } from "@pisagor/solid";
import { Button, createTreeCollection, Tabs, TreeView } from "@pisagor/solid";
import { XIcon } from "@pisagor/solid/icons";
import { cn } from "@pisagor/utils";
import { createSignal, For, Show } from "solid-js";

const styles = ideLayoutBlock();

export interface IdeLayoutProps {
  class?: string;
}

export function IdeLayout(props: IdeLayoutProps) {
  const [activeItem, setActiveItem] = createSignal("");

  const handleSelectNode = (selectedNodes: TreeNodeType[]) => {
    const selectedItem = selectedNodes.map((node) => node.name)[0];
    const isFolder = selectedNodes.every((node) => node.children?.length ?? 0);
    if (isFolder) {
      return;
    }
    const formattedName = selectedItem?.split("/").at(-1);
    setActiveItem(formattedName ?? "");
  };

  return (
    <div class={cn(styles.root(), props.class)}>
      <div class={styles.sidebar()}>
        <TreeView
          collection={collection}
          onSelectionChange={({ selectedNodes }) =>
            handleSelectNode(selectedNodes)
          }
        >
          <TreeView.Tree>
            <For each={collection.rootNode.children ?? []}>
              {(node, index) => <TreeNode indexPath={[index()]} node={node} />}
            </For>
          </TreeView.Tree>
        </TreeView>
      </div>
      <div class={styles.pane()}>
        <Show when={activeItem()}>
          {(item) => (
            <Tabs.Root class={styles.tabs()} value={item()}>
              <Tabs.List variant="underline">
                <Tabs.Trigger value={item()}>
                  {item()}
                  <Button
                    aria-label="Close"
                    onClick={() => setActiveItem("")}
                    size="icon-xs"
                    type="button"
                    variant="ghost"
                  >
                    <XIcon />
                  </Button>
                </Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content class={styles.content()} value={item()}>
                {"// File content"}
              </Tabs.Content>
            </Tabs.Root>
          )}
        </Show>
      </div>
    </div>
  );
}

function TreeNode(props: NodeProviderProps) {
  return (
    <TreeView.NodeProvider indexPath={props.indexPath} node={props.node}>
      <Show
        fallback={
          <TreeView.Item>
            <TreeView.ItemText>{props.node.name}</TreeView.ItemText>
          </TreeView.Item>
        }
        when={props.node.children}
      >
        {(children) => (
          <TreeView.Branch>
            <TreeView.BranchControl>{props.node.name}</TreeView.BranchControl>
            <TreeView.BranchContent>
              <For each={children()}>
                {(child, index) => (
                  <TreeNode
                    indexPath={[...props.indexPath, index()]}
                    node={child}
                  />
                )}
              </For>
            </TreeView.BranchContent>
          </TreeView.Branch>
        )}
      </Show>
    </TreeView.NodeProvider>
  );
}

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
