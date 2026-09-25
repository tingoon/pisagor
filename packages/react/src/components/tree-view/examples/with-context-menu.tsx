import {
  FilePlusIcon,
  FolderPlusIcon,
  PencilSimpleIcon,
  TrashIcon,
} from "@phosphor-icons/react";
import { ContextMenu, createTreeCollection } from "@pisagor/react";
import type { NodeProviderProps } from "..";
import { TreeView } from "..";
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
            <ContextMenu>
              <ContextMenu.ContextTrigger asChild>
                <TreeView.BranchControl>{node.name}</TreeView.BranchControl>
              </ContextMenu.ContextTrigger>
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
            </ContextMenu>
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
          <ContextMenu>
            <ContextMenu.ContextTrigger asChild>
              <TreeView.Item>
                <TreeView.ItemText>{node.name}</TreeView.ItemText>
              </TreeView.Item>
            </ContextMenu.ContextTrigger>
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
          </ContextMenu>
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
