import { PackageIcon } from "@phosphor-icons/react";
import { createTreeCollection, TreeView } from "@pisagor/react";

export function CustomIconsFolder() {
  const collection = createTreeCollection({
    rootNode: {
      children: [
        {
          children: [
            { id: "app/page.tsx", name: "page.tsx" },
            { id: "app/layout.tsx", name: "layout.tsx" },
          ],
          expandedIcon: PackageIcon,
          icon: PackageIcon,
          id: "app",
          name: "app",
        },
        {
          children: [
            { id: "components/button.tsx", name: "button.tsx" },
            { id: "components/input.tsx", name: "input.tsx" },
          ],
          expandedIcon: null,
          icon: null,
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
      <TreeView collection={collection} />
    </div>
  );
}
