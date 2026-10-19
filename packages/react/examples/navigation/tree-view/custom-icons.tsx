import { FileCodeIcon, FileJsIcon, FileTextIcon } from "@phosphor-icons/react";
import {
  createFileIcons,
  createTreeCollection,
  TreeView,
} from "@pisagor/react";

export function CustomIcons() {
  const fileIcons = createFileIcons({
    ".json": FileJsIcon,
    ".md": FileTextIcon,
    ".tsx": FileCodeIcon,
  });
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

  return (
    <div>
      <TreeView collection={collection} fileIcons={fileIcons} />
    </div>
  );
}
