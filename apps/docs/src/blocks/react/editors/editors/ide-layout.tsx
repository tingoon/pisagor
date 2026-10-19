import { XIcon } from "@phosphor-icons/react";
import type { TreeNodeType } from "@pisagor/react";
import { Button, createTreeCollection, Tabs, TreeView } from "@pisagor/react";
import { cn } from "@pisagor/utils";
import { useState } from "react";
import { ideLayoutBlock } from "#/styles/recipes/editors";

const styles = ideLayoutBlock();

export interface IdeLayoutProps {
  className?: string;
}

export function IdeLayout({ className }: IdeLayoutProps) {
  const [activeItem, setActiveItem] = useState("");

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
    <div className={cn(styles.root(), className)}>
      <div className={styles.sidebar()}>
        <TreeView
          collection={collection}
          onSelectionChange={({ selectedNodes }) =>
            handleSelectNode(selectedNodes)
          }
        />
      </div>
      <div className={styles.pane()}>
        {activeItem && (
          <Tabs.Root
            className={styles.tabs()}
            value={activeItem}
            variant="underline"
          >
            <Tabs.List>
              <Tabs.Trigger value={activeItem}>
                {activeItem}
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
            <Tabs.Content className={styles.content()} value={activeItem}>
              {"// File content"}
            </Tabs.Content>
          </Tabs.Root>
        )}
      </div>
    </div>
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
