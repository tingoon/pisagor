import { createTreeCollection } from "@pisagor/react";
import { useState } from "react";
import type { TreeNodeType } from "..";
import { TreeView } from "..";
export function CheckboxTree() {
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

  const TreeNode = ({
    indexPath,
    node,
  }: {
    node: TreeNodeType;
    indexPath: number[];
  }) => {
    return (
      <TreeView.NodeProvider indexPath={indexPath} node={node}>
        {node.children ? (
          <TreeView.Branch>
            <TreeView.BranchControl>
              <TreeView.NodeCheckbox />
              {node.name}
            </TreeView.BranchControl>
            <TreeView.BranchContent>
              {node.children.map((child, index) => (
                <TreeNode
                  indexPath={[...indexPath, index]}
                  key={child.id}
                  node={child}
                />
              ))}
            </TreeView.BranchContent>
          </TreeView.Branch>
        ) : (
          <TreeView.Item>
            <TreeView.NodeCheckbox />
            <TreeView.ItemText>{node.name}</TreeView.ItemText>
          </TreeView.Item>
        )}
      </TreeView.NodeProvider>
    );
  };
  const [checkedNodes, setCheckedNodes] = useState<string[]>(["readme.md"]);

  return (
    <div className="flex items-center gap-2">
      <div>
        <TreeView
          checkedValue={checkedNodes}
          collection={collection}
          onCheckedChange={({ checkedValue }) => setCheckedNodes(checkedValue)}
        >
          <TreeView.Tree>
            {collection.rootNode.children?.map((node, index) => (
              <TreeNode indexPath={[index]} key={node.id} node={node} />
            ))}
          </TreeView.Tree>
        </TreeView>
      </div>
      <p className="whitespace-pre-wrap text-muted-foreground text-sm">
        {JSON.stringify(checkedNodes, null, 2)}
      </p>
    </div>
  );
}
