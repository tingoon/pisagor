import type { NodeProviderProps } from "@pisagor/solid";
import { ContextMenu, createTreeCollection, TreeView } from "@pisagor/solid";
import {
  FilePlusIcon,
  FolderPlusIcon,
  PencilSimpleIcon,
  TrashIcon,
} from "@pisagor/solid/icons";
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
              <ContextMenu.ContextTrigger
                asChild={(props) => (
                  <TreeView.BranchControl {...props()}>
                    {node.name}
                  </TreeView.BranchControl>
                )}
              />
              <ContextMenu.Content class="w-40">
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
                <TreeNode indexPath={[...indexPath, index]} node={child} />
              ))}
            </TreeView.BranchContent>
          </TreeView.Branch>
        ) : (
          <ContextMenu>
            <ContextMenu.ContextTrigger
              asChild={(props) => (
                <TreeView.Item {...props()}>
                  <TreeView.ItemText>{node.name}</TreeView.ItemText>
                </TreeView.Item>
              )}
            />
            <ContextMenu.Content class="w-40">
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
            <TreeNode indexPath={[index]} node={node} />
          ))}
        </TreeView.Tree>
      </TreeView>
    </div>
  );
}
