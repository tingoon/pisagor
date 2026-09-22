import { PackageIcon } from "@phosphor-icons/react";
import { createTreeCollection } from "@pisagor/react";
import type { NodeProviderProps } from "..";
import { TreeView } from "..";
export function CustomIconsFolder() {
  const collection = createTreeCollection({
    rootNode: {
      children: [
        {
          children: [
            { id: "app/page.tsx", name: "page.tsx" },
            { id: "app/layout.tsx", name: "layout.tsx" },
          ],
          expandedIcon: PackageIcon,
          icon: PackageIcon,
          id: "app",
          name: "app",
        },
        {
          children: [
            { id: "components/button.tsx", name: "button.tsx" },
            { id: "components/input.tsx", name: "input.tsx" },
          ],
          expandedIcon: null,
          icon: null,
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
            <TreeView.BranchControl expandedIcon={node.expandedIcon} icon={node.icon}>
              {node.name}
            </TreeView.BranchControl>
            <TreeView.BranchContent>
              {node.children.map((child, index) => (
                <TreeNode indexPath={[...indexPath, index]} key={child.id} node={child} />
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
      <TreeView collection={collection}>
        <TreeView.Tree>
          {collection.rootNode.children?.map((node, index) => (
            <TreeNode indexPath={[index]} key={node.id} node={node} />
          ))}
        </TreeView.Tree>
      </TreeView>
    </div>
  );
}
