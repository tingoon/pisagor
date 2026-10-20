import { createTreeCollection, TreeView } from "@pisagor/solid";
import { createSignal } from "solid-js";

export function Rename() {
  const initialCollection = createTreeCollection({
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

  const [collection, setCollection] = createSignal(initialCollection);

  return (
    <div>
      <TreeView
        canRename={() => true}
        collection={collection()}
        onRenameComplete={(details) => {
          setCollection((prev) => {
            const node = prev.at(details.indexPath);
            if (!node) {
              return prev;
            }

            return prev.replace(details.indexPath, {
              ...node,
              name: details.label,
            });
          });
        }}
      />
    </div>
  );
}
