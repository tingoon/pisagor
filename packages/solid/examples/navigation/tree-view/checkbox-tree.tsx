import { createTreeCollection, TreeView } from "@pisagor/solid";
import { createSignal } from "solid-js";

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

  const [checkedNodes, setCheckedNodes] = createSignal<string[]>(["readme.md"]);

  return (
    <div class="flex items-center gap-2">
      <div>
        <TreeView
          checkedValue={checkedNodes()}
          collection={collection}
          onCheckedChange={({ checkedValue }) => setCheckedNodes(checkedValue)}
          checkbox
        />
      </div>
      <p class="text-muted-foreground text-sm whitespace-pre-wrap">
        {JSON.stringify(checkedNodes(), null, 2)}
      </p>
    </div>
  );
}
