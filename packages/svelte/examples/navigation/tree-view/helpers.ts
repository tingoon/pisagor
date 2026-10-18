import { createTreeCollection, type TreeNodeType } from "@pisagor/svelte";

export const demoRoot = {
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
} satisfies TreeNodeType;

export function createDemoCollection() {
  return createTreeCollection({ rootNode: demoRoot });
}
