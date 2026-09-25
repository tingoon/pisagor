import { createTreeCollection } from "@pisagor/react";
import { useState } from "react";
import type { NodeProviderProps } from "..";
import { TreeView } from "..";
export function Rename() {
  const initialCollection = createTreeCollection({
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

  const TreeNode = ({ indexPath, node, ...rest }: NodeProviderProps) => {
    return (
      <TreeView.NodeProvider {...rest} indexPath={indexPath} node={node}>
        {node.children ? (
          <TreeView.Branch>
            <TreeView.BranchControl>{node.name}</TreeView.BranchControl>

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
            <TreeView.ItemText>{node.name}</TreeView.ItemText>
          </TreeView.Item>
        )}
      </TreeView.NodeProvider>
    );
  };
  const [collection, setCollection] = useState(initialCollection);

  return (
    <div>
      <TreeView
        canRename={() => true}
        collection={collection}
        onRenameComplete={(details) => {
          setCollection((prev) => {
            const node = prev.at(details.indexPath);
            if (!node) {
              return prev;
            }
            return prev.replace(details.indexPath, {
              ...node,
              name: details.label,
            });
          });
        }}
      >
        <TreeView.Tree>
          {collection.rootNode.children?.map((node, index) => (
            <TreeNode indexPath={[index]} key={node.id} node={node} />
          ))}
        </TreeView.Tree>
      </TreeView>
    </div>
  );
}
