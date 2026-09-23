import { createTreeCollection } from "@pisagor/react";
import { useState } from "react";
import type { NodeProviderProps } from "..";
import { TreeView } from "..";
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
      <TreeView.NodeProvider indexPath={indexPath} key={node.id} node={node}>
        {node.children ? (
          <TreeView.Branch>
            <TreeView.BranchControl>{node.name}</TreeView.BranchControl>

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
  const [selected, setSelected] = useState<string[]>([]);

  const isCorrectSelection = selected[0] === "components/input.tsx";

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-muted-foreground text-sm">Select input.tsx</p>

      <TreeView
        className="overflow-hidden"
        collection={collection}
        onSelectionChange={({ selectedValue }) => setSelected(selectedValue)}
        selectedValue={selected}
      >
        <TreeView.Tree>
          {collection.rootNode.children?.map((node, index) => (
            <TreeNode indexPath={[index]} key={node.id} node={node} />
          ))}
        </TreeView.Tree>
      </TreeView>
      <p className="text-muted-foreground text-sm">{isCorrectSelection ? "✅" : "❌"}</p>
    </div>
  );
}
