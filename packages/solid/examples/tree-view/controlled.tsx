/** @jsxImportSource solid-js */

import type { NodeProviderProps } from "@pisagor/solid";
import { createTreeCollection, TreeView } from "@pisagor/solid";
import { createSignal } from "solid-js";
export function Controlled() {
  const collection = createTreeCollection({
    rootNode: {
      children: [
        {
          children: [
            { id: "components/button.tsx", name: "button.tsx" },
            { id: "components/input.tsx", name: "input.tsx" },
          ],
          id: "components",
          name: "components",
        },
        { id: "package.json", name: "package.json" },
      ],
      id: "ROOT",
      name: "",
    },
  });

  const TreeNode = ({ indexPath, node }: NodeProviderProps) => {
    return (
      <TreeView.NodeProvider indexPath={indexPath} node={node}>
        {node.children ? (
          <TreeView.Branch>
            <TreeView.BranchControl>{node.name}</TreeView.BranchControl>

            <TreeView.BranchContent>
              {node.children.map((child, index) => (
                <TreeNode indexPath={[...indexPath, index]} node={child} />
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
  const [selected, setSelected] = createSignal<string[]>([]);

  const isCorrectSelection = selected()[0] === "components/input.tsx";

  return (
    <div class="flex flex-col items-center gap-2">
      <p class="text-muted-foreground text-sm">Select input.tsx</p>

      <TreeView
        class="overflow-hidden"
        collection={collection}
        onSelectionChange={({ selectedValue }) => setSelected(selectedValue)}
        selectedValue={selected()}
      >
        <TreeView.Tree>
          {collection.rootNode.children?.map((node, index) => (
            <TreeNode indexPath={[index]} node={node} />
          ))}
        </TreeView.Tree>
      </TreeView>
      <p class="text-muted-foreground text-sm">
        {isCorrectSelection ? "✅" : "❌"}
      </p>
    </div>
  );
}
