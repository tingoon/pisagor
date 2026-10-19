import { createTreeCollection, TreeView } from "@pisagor/react";
import { useState } from "react";

export function CheckboxTree() {
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

  const [checkedNodes, setCheckedNodes] = useState<string[]>(["readme.md"]);

  return (
    <div className="flex items-center gap-2">
      <div>
        <TreeView
          checkedValue={checkedNodes}
          collection={collection}
          onCheckedChange={({ checkedValue }) => setCheckedNodes(checkedValue)}
          checkbox
        />
      </div>
      <p className="text-muted-foreground text-sm whitespace-pre-wrap">
        {JSON.stringify(checkedNodes, null, 2)}
      </p>
    </div>
  );
}
