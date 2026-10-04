/** @jsxImportSource solid-js */

import type { NodeProviderProps, TreeNodeType } from "@pisagor/solid";
import { createTreeCollection, TreeView } from "@pisagor/solid";
import { ArrowSquareOutIcon, LinkIcon } from "@pisagor/solid/icons";
export function Links() {
  interface TreeNodeWithLinks extends TreeNodeType<unknown> {
    href?: string;
  }
  const collection = createTreeCollection({
    rootNode: {
      children: [
        {
          children: [
            {
              href: "/docs",
              id: "docs/introduction",
              name: "Introduction",
            },
            {
              href: "/docs/components",
              id: "docs/components",
              name: "Components",
            },
          ],
          id: "docs",
          name: "Documentation",
        },
        {
          children: [
            {
              href: "https://example.com/source",
              id: "external/github",
              name: "GitHub Repository",
            },
          ],
          id: "external",
          name: "External Links",
        },
        { href: "/llms.txt", id: "llms.txt", name: "llms.txt" },
      ],
      id: "ROOT",
      name: "",
    },
  });

  const TreeNode = ({
    indexPath,
    node,
  }: NodeProviderProps<TreeNodeWithLinks>) => {
    return (
      <TreeView.NodeProvider indexPath={indexPath} node={node}>
        {node.children ? (
          <TreeView.Branch>
            <TreeView.BranchControl icon={null}>
              {node.name}
            </TreeView.BranchControl>
            <TreeView.BranchContent>
              {node.children.map((child, index) => (
                <TreeNode indexPath={[...indexPath, index]} node={child} />
              ))}
            </TreeView.BranchContent>
          </TreeView.Branch>
        ) : (
          <TreeView.Item
            asChild={(props) => (
              <a
                {...props()}
                href={node.href ?? "#"}
                rel={
                  node.href?.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                target={node.href?.startsWith("http") ? "_blank" : undefined}
              >
                <TreeView.ItemText icon={LinkIcon}>
                  {node.name}
                  {node.href?.startsWith("http") && <ArrowSquareOutIcon />}
                </TreeView.ItemText>
              </a>
            )}
          />
        )}
      </TreeView.NodeProvider>
    );
  };
  return (
    <div>
      <TreeView collection={collection}>
        <TreeView.Label>Docs</TreeView.Label>
        <TreeView.Tree>
          {collection.rootNode.children?.map((node, index) => (
            <TreeNode indexPath={[index]} node={node} />
          ))}
        </TreeView.Tree>
      </TreeView>
    </div>
  );
}
