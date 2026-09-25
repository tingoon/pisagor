import { FileCodeIcon, FileJsIcon, FileTextIcon } from "@phosphor-icons/react";
import { createFileIcons, createTreeCollection } from "@pisagor/react";
import type { NodeProviderProps } from "..";
import { TreeView } from "..";
export function CustomIcons() {
  const fileIcons = createFileIcons({
    ".json": FileJsIcon,
    ".md": FileTextIcon,
    ".tsx": FileCodeIcon,
  });
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
  return (
    <div>
      <TreeView collection={collection} fileIcons={fileIcons}>
        <TreeView.Tree>
          {collection.rootNode.children?.map((node, index) => (
            <TreeNode indexPath={[index]} key={node.id} node={node} />
          ))}
        </TreeView.Tree>
      </TreeView>
    </div>
  );
}
