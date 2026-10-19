import { ArrowSquareOutIcon, LinkIcon } from "@phosphor-icons/react";
import type { NodeProviderProps, TreeNodeType } from "@pisagor/react";
import { createTreeCollection, TreeView } from "@pisagor/react";

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
            <TreeView.BranchControl>
              <TreeView.BranchIndicator />
              <TreeView.BranchText>{node.name}</TreeView.BranchText>
            </TreeView.BranchControl>
            <TreeView.BranchContent>
              <TreeView.BranchIndentGuide />
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
          <TreeView.Item asChild>
            <a
              href={node.href ?? "#"}
              rel={
                node.href?.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              target={node.href?.startsWith("http") ? "_blank" : undefined}
            >
              <LinkIcon />
              <TreeView.ItemText>
                {node.name}
                {node.href?.startsWith("http") && <ArrowSquareOutIcon />}
              </TreeView.ItemText>
            </a>
          </TreeView.Item>
        )}
      </TreeView.NodeProvider>
    );
  };

  return (
    <div>
      <TreeView.Root collection={collection}>
        <TreeView.Label>Docs</TreeView.Label>
        <TreeView.Tree>
          {collection.rootNode.children?.map((node, index) => (
            <TreeNode indexPath={[index]} key={node.id} node={node} />
          ))}
        </TreeView.Tree>
      </TreeView.Root>
    </div>
  );
}
