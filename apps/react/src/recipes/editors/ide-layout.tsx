import { XIcon } from "@phosphor-icons/react";
import { Button } from "@pisagor/react/button";
import { Tabs } from "@pisagor/react/tabs";
import {
  createTreeCollection,
  type NodeProviderProps,
  type TreeNodeType,
  TreeView,
} from "@pisagor/react/tree-view";
import { cn } from "@pisagor/utils";
import { useState } from "react";

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
    <div className={cn("flex size-full gap-2", className)}>
      <div className="rounded-lg border p-2">
        <TreeView
          collection={collection}
          onSelectionChange={({ selectedNodes }) => handleSelectNode(selectedNodes)}
        >
          <TreeView.Tree>
            {collection.rootNode.children?.map((node, index) => (
              <TreeNode indexPath={[index]} key={node.id} node={node} />
            ))}
          </TreeView.Tree>
        </TreeView>
      </div>
      <div className="flex flex-1 flex-col rounded-lg border p-0.5">
        {activeItem && (
          <Tabs className="flex-1" value={activeItem}>
            <Tabs.List variant="underline">
              <Tabs.Trigger value={activeItem}>
                {activeItem}
                <Button
                  onClick={() => setActiveItem("")}
                  size="icon-xs"
                  type="button"
                  variant="ghost"
                >
                  <XIcon />
                </Button>
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content className="p-2 text-muted-foreground text-sm" value={activeItem}>
              {"// File content"}
            </Tabs.Content>
          </Tabs>
        )}
      </div>
    </div>
  );
}

function TreeNode({ node, indexPath, ...rest }: NodeProviderProps) {
  return (
    <TreeView.Node {...rest} indexPath={indexPath} node={node}>
      {node.children ? (
        <TreeView.Branch>
          <TreeView.BranchItem>{node.name}</TreeView.BranchItem>

          <TreeView.BranchContent>
            {node.children.map((child, index) => (
              <TreeNode indexPath={[...indexPath, index]} key={child.id} node={child} />
            ))}
          </TreeView.BranchContent>
        </TreeView.Branch>
      ) : (
        <TreeView.Content>
          <TreeView.Item>{node.name}</TreeView.Item>
        </TreeView.Content>
      )}
    </TreeView.Node>
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
