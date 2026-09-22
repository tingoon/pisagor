import type { TreeNodeType } from "..";

export const sampleFileTree: TreeNodeType = {
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
};

export const controlledFileTree: TreeNodeType = {
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
};

export interface TreeNodeWithLink extends Omit<TreeNodeType, "children"> {
  children?: TreeNodeWithLink[];
  href?: string;
}

export const docsLinkTree: TreeNodeWithLink = {
  children: [
    {
      children: [
        { href: "/docs", id: "docs/introduction", name: "Introduction" },
        { href: "/docs/components", id: "docs/components", name: "Components" },
      ],
      id: "docs",
      name: "Documentation",
    },
    {
      children: [
        {
          href: "https://example.com/source",
          id: "external/github",
          name: "GitHub Repository",
        },
      ],
      id: "external",
      name: "External Links",
    },
    { href: "/llms.txt", id: "llms.txt", name: "llms.txt" },
  ],
  id: "ROOT",
  name: "",
};
