import { Portal } from "@ark-ui/react";
import {
  FileIcon,
  FilePlusIcon,
  FolderIcon,
  FolderPlusIcon,
  PencilSimpleIcon,
  TrashIcon,
} from "@phosphor-icons/react";
import type { NodeProviderProps } from "@pisagor/react";
import { ContextMenu, createTreeCollection, TreeView } from "@pisagor/react";

export function WithContextMenu() {
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
            <ContextMenu.Root>
              <ContextMenu.ContextTrigger asChild>
                <TreeView.BranchControl>
                  <TreeView.BranchIndicator />
                  <TreeView.BranchText>
                    <FolderIcon />
                    {node.name}
                  </TreeView.BranchText>
                </TreeView.BranchControl>
              </ContextMenu.ContextTrigger>
              <Portal>
                <ContextMenu.Positioner>
                  <ContextMenu.Content className="w-40">
                    <ContextMenu.Item value="add-folder">
                      <FolderPlusIcon aria-hidden />
                      Add folder
                    </ContextMenu.Item>
                    <ContextMenu.Item value="add-file">
                      <FilePlusIcon aria-hidden />
                      Add file
                    </ContextMenu.Item>
                    <ContextMenu.Separator />
                    <ContextMenu.Item value="rename">
                      <PencilSimpleIcon aria-hidden />
                      Rename
                    </ContextMenu.Item>
                    <ContextMenu.Separator />
                    <ContextMenu.Item value="delete" variant="destructive">
                      <TrashIcon aria-hidden />
                      Delete
                    </ContextMenu.Item>
                  </ContextMenu.Content>
                </ContextMenu.Positioner>
              </Portal>
            </ContextMenu.Root>
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
          <ContextMenu.Root>
            <ContextMenu.ContextTrigger asChild>
              <TreeView.Item>
                <FileIcon />
                <TreeView.ItemText>{node.name}</TreeView.ItemText>
              </TreeView.Item>
            </ContextMenu.ContextTrigger>
            <Portal>
              <ContextMenu.Positioner>
                <ContextMenu.Content className="w-40">
                  <ContextMenu.Item value="add-file">
                    <PencilSimpleIcon aria-hidden />
                    Rename
                  </ContextMenu.Item>
                  <ContextMenu.Separator />
                  <ContextMenu.Item value="delete" variant="destructive">
                    <TrashIcon aria-hidden />
                    Delete
                  </ContextMenu.Item>
                </ContextMenu.Content>
              </ContextMenu.Positioner>
            </Portal>
          </ContextMenu.Root>
        )}
      </TreeView.NodeProvider>
    );
  };

  return (
    <div>
      <TreeView.Root collection={collection}>
        <TreeView.Tree>
          {collection.rootNode.children?.map((node, index) => (
            <TreeNode indexPath={[index]} key={node.id} node={node} />
          ))}
        </TreeView.Tree>
      </TreeView.Root>
    </div>
  );
}
