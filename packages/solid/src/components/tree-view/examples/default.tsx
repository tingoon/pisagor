import { For, Show } from "solid-js";
import {
  createTreeCollection,
  type NodeProviderProps,
  type TreeNodeType,
  TreeView,
} from "../index";

const collection = createTreeCollection<TreeNodeType>({
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
      { id: "package.json", name: "package.json" },
    ],
    id: "ROOT",
    name: "",
  },
});

function TreeNode(props: NodeProviderProps<TreeNodeType>) {
  return (
    <TreeView.NodeProvider {...props}>
      <Show
        fallback={
          <TreeView.Item>
            <TreeView.ItemText>{props.node.name}</TreeView.ItemText>
          </TreeView.Item>
        }
        when={props.node.children}
      >
        {(children) => (
          <TreeView.Branch>
            <TreeView.BranchControl>{props.node.name}</TreeView.BranchControl>
            <TreeView.BranchContent>
              <For each={children()}>
                {(child, index) => (
                  <TreeNode
                    indexPath={[...props.indexPath, index()]}
                    node={child}
                  />
                )}
              </For>
            </TreeView.BranchContent>
          </TreeView.Branch>
        )}
      </Show>
    </TreeView.NodeProvider>
  );
}

export function Default() {
  return (
    <div>
      <TreeView collection={collection}>
        <TreeView.Tree>
          <For each={collection.rootNode.children}>
            {(node, index) => <TreeNode indexPath={[index()]} node={node} />}
          </For>
        </TreeView.Tree>
      </TreeView>
    </div>
  );
}
